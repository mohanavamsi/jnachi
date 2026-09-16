import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
} from 'firebase/firestore';
import firebaseConfig from '@/firebase-applet-config.json';
import { CertTier, CERT_TIERS } from '@/lib/certTypes';

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export interface UnifiedContact {
  email: string;
  name: string;
  company?: string;
  location?: string;
  types: ('registered_user' | 'lead' | 'exam_candidate' | 'certified_alumni')[];
  highestScore?: number;
  highestPercentage?: number;
  bestTierEarned?: CertTier;
  bestTierTitle?: string;
  totalAttempts: number;
  certificates: { certificateId: string; tier: CertTier; score: number; issuedAt: number }[];
  firstSeenAt: number;
  lastActivityAt: number;
}

export interface AdminLeadItem {
  id: string;
  email: string;
  score: number;
  level: string;
  createdAt: number;
}

export interface AdminAttemptItem {
  id: string;
  email: string;
  recipientName: string;
  location?: string;
  company?: string;
  tier: CertTier;
  tierTitle: string;
  attemptNumber: number;
  status: string;
  score?: number;
  percentage?: number;
  passed?: boolean;
  certificateId?: string;
  startedAt: number;
  completedAt?: number;
}

export interface AdminCertificateItem {
  certificateId: string;
  recipientName: string;
  location?: string;
  company?: string;
  tier: CertTier;
  tierTitle: string;
  score: number;
  percentage: number;
  issuedAt: number;
  status: string;
}

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key');
    const expectedPasscode = process.env.ADMIN_PASSCODE || 'jnachi-admin-2026';

    if (authHeader !== expectedPasscode) {
      return NextResponse.json(
        { error: 'Unauthorized. Invalid Admin Passcode.' },
        { status: 401 }
      );
    }

    const contactsMap = new Map<string, UnifiedContact>();

    const getOrCreateContact = (rawEmail: string): UnifiedContact => {
      const email = rawEmail.trim().toLowerCase();
      if (!contactsMap.has(email)) {
        contactsMap.set(email, {
          email,
          name: '',
          types: [],
          totalAttempts: 0,
          certificates: [],
          firstSeenAt: Date.now(),
          lastActivityAt: Date.now(),
        });
      }
      return contactsMap.get(email)!;
    };

    // 1. Fetch `users`
    const usersList: { uid: string; email: string; displayName?: string; location?: string; company?: string; createdAt?: number }[] = [];
    try {
      const usersSnap = await getDocs(collection(db, 'users'));
      usersSnap.forEach((d) => {
        const u = d.data();
        const email = u.email || '';
        if (email && email.includes('@')) {
          const createdAt = u.createdAt?.toMillis?.() || u.createdAt || Date.now();
          usersList.push({
            uid: d.id,
            email,
            displayName: u.displayName || '',
            location: u.location || '',
            company: u.company || '',
            createdAt,
          });

          const contact = getOrCreateContact(email);
          if (!contact.types.includes('registered_user')) contact.types.push('registered_user');
          if (u.displayName && !contact.name) contact.name = u.displayName;
          if (u.location && !contact.location) contact.location = u.location;
          if (u.company && !contact.company) contact.company = u.company;
          contact.firstSeenAt = Math.min(contact.firstSeenAt, createdAt);
          contact.lastActivityAt = Math.max(contact.lastActivityAt, createdAt);
        }
      });
    } catch (e) {
      console.warn('Error fetching users collection:', e);
    }

    // 2. Fetch `leads` (from 3-min assessment)
    const leadsList: AdminLeadItem[] = [];
    try {
      const leadsSnap = await getDocs(collection(db, 'leads'));
      leadsSnap.forEach((d) => {
        const l = d.data();
        const email = l.email || '';
        if (email && email.includes('@')) {
          const createdAt = l.createdAt?.toMillis?.() || l.createdAt || Date.now();
          leadsList.push({
            id: d.id,
            email,
            score: Number(l.score) || 0,
            level: l.level || 'Diagnostic',
            createdAt,
          });

          const contact = getOrCreateContact(email);
          if (!contact.types.includes('lead')) contact.types.push('lead');
          contact.highestScore = Math.max(contact.highestScore || 0, Number(l.score) || 0);
          contact.firstSeenAt = Math.min(contact.firstSeenAt, createdAt);
          contact.lastActivityAt = Math.max(contact.lastActivityAt, createdAt);
        }
      });
    } catch (e) {
      console.warn('Error fetching leads collection:', e);
    }

    // 3. Fetch `cert_profiles`
    try {
      const certProfilesSnap = await getDocs(collection(db, 'cert_profiles'));
      certProfilesSnap.forEach((d) => {
        const cp = d.data();
        const email = cp.email || '';
        if (email && email.includes('@')) {
          const contact = getOrCreateContact(email);
          if (!contact.types.includes('exam_candidate')) contact.types.push('exam_candidate');
          if (cp.recipientName && !contact.name) contact.name = cp.recipientName;
          if (cp.location && !contact.location) contact.location = cp.location;
          if (cp.company && !contact.company) contact.company = cp.company;
          if (typeof cp.highestScore === 'number') {
            contact.highestScore = Math.max(contact.highestScore || 0, cp.highestScore);
          }
          if (typeof cp.totalAttempts === 'number') {
            contact.totalAttempts = Math.max(contact.totalAttempts, cp.totalAttempts);
          }
          if (cp.lastAttemptAt) {
            contact.lastActivityAt = Math.max(contact.lastActivityAt, cp.lastAttemptAt);
          }
        }
      });
    } catch (e) {
      console.warn('Error fetching cert_profiles collection:', e);
    }

    // 4. Fetch `cert_attempts`
    const attemptsList: AdminAttemptItem[] = [];
    try {
      const attemptsSnap = await getDocs(collection(db, 'cert_attempts'));
      attemptsSnap.forEach((d) => {
        const a = d.data();
        const email = a.email || '';
        if (email && email.includes('@')) {
          const rawTier = (a.tier as CertTier) || 'beginner';
          const tierTitle = CERT_TIERS[rawTier]?.title || 'Jnachi Certification';
          const startedAt = Number(a.startedAt) || Date.now();
          const completedAt = a.completedAt ? Number(a.completedAt) : undefined;

          attemptsList.push({
            id: d.id,
            email,
            recipientName: a.recipientName || '',
            location: a.location || undefined,
            company: a.company || undefined,
            tier: rawTier,
            tierTitle,
            attemptNumber: a.attemptNumber || 1,
            status: a.status || 'completed',
            score: typeof a.score === 'number' ? a.score : undefined,
            percentage: typeof a.percentage === 'number' ? a.percentage : undefined,
            passed: Boolean(a.passed),
            certificateId: a.certificateId || undefined,
            startedAt,
            completedAt,
          });

          const contact = getOrCreateContact(email);
          if (!contact.types.includes('exam_candidate')) contact.types.push('exam_candidate');
          if (a.recipientName && !contact.name) contact.name = a.recipientName;
          if (a.location && !contact.location) contact.location = a.location;
          if (a.company && !contact.company) contact.company = a.company;
          if (typeof a.score === 'number') {
            contact.highestScore = Math.max(contact.highestScore || 0, a.score);
          }
          if (typeof a.percentage === 'number') {
            contact.highestPercentage = Math.max(contact.highestPercentage || 0, a.percentage);
          }
          contact.firstSeenAt = Math.min(contact.firstSeenAt, startedAt);
          contact.lastActivityAt = Math.max(contact.lastActivityAt, completedAt || startedAt);
        }
      });
    } catch (e) {
      console.warn('Error fetching cert_attempts collection:', e);
    }

    // 5. Fetch `certificates`
    const certificatesList: AdminCertificateItem[] = [];
    try {
      const certsSnap = await getDocs(collection(db, 'certificates'));
      certsSnap.forEach((d) => {
        const c = d.data();
        const certId = c.certificateId || d.id;
        const rawTier = (c.tier as CertTier) || 'beginner';
        const tierTitle = CERT_TIERS[rawTier]?.title || 'Certified AI';
        const issuedAt = Number(c.issuedAt) || Date.now();

        certificatesList.push({
          certificateId: certId,
          recipientName: c.recipientName || '',
          location: c.location || undefined,
          company: c.company || undefined,
          tier: rawTier,
          tierTitle,
          score: Number(c.score) || 36,
          percentage: Number(c.percentage) || 90,
          issuedAt,
          status: c.status || 'valid',
        });
      });
    } catch (e) {
      console.warn('Error fetching certificates collection:', e);
    }

    // Link certificates back to matching contacts by name / ID in attempts
    attemptsList.forEach((att) => {
      if (att.passed && att.certificateId) {
        const contact = getOrCreateContact(att.email);
        if (!contact.types.includes('certified_alumni')) contact.types.push('certified_alumni');
        if (!contact.certificates.some((c) => c.certificateId === att.certificateId)) {
          contact.certificates.push({
            certificateId: att.certificateId,
            tier: att.tier,
            score: att.score || 36,
            issuedAt: att.completedAt || att.startedAt,
          });
          contact.bestTierEarned = att.tier;
          contact.bestTierTitle = att.tierTitle;
        }
      }
    });

    // Format final sorted list of contacts (newest activity first)
    const contacts = Array.from(contactsMap.values()).sort(
      (a, b) => b.lastActivityAt - a.lastActivityAt
    );

    // Calculate Global KPI Summary
    const totalContacts = contacts.length;
    const totalLeads = leadsList.length;
    const totalRegisteredUsers = usersList.length;
    const totalAttempts = attemptsList.length;
    const completedAttempts = attemptsList.filter((a) => a.status === 'completed');
    const passedAttempts = attemptsList.filter((a) => a.passed);
    const totalCertificates = certificatesList.length || passedAttempts.length;
    const passRate = completedAttempts.length > 0
      ? Math.round((passedAttempts.length / completedAttempts.length) * 100)
      : 0;

    return NextResponse.json({
      success: true,
      timestamp: Date.now(),
      metrics: {
        totalContacts,
        totalLeads,
        totalRegisteredUsers,
        totalAttempts,
        totalCertificates,
        passRate,
      },
      contacts,
      attempts: attemptsList.sort((a, b) => b.startedAt - a.startedAt),
      certificates: certificatesList.sort((a, b) => b.issuedAt - a.issuedAt),
      leads: leadsList.sort((a, b) => b.createdAt - a.createdAt),
    });
  } catch (error: unknown) {
    console.error('Error in /api/admin/data:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch admin data' },
      { status: 500 }
    );
  }
}
