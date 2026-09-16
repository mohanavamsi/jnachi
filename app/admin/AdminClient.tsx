'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Users,
  Award,
  FileText,
  Search,
  Download,
  Copy,
  Check,
  Lock,
  Unlock,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ChevronRight,
  Filter,
  Layers,
  MapPin,
  Building,
  Mail,
  Calendar,
  Key,
  ShieldAlert,
  ArrowUpDown,
  TrendingUp,
  Clock,
} from 'lucide-react';
import {
  UnifiedContact,
  AdminAttemptItem,
  AdminCertificateItem,
  AdminLeadItem,
} from '@/app/api/admin/data/route';

interface AdminMetrics {
  totalContacts: number;
  totalLeads: number;
  totalRegisteredUsers: number;
  totalAttempts: number;
  totalCertificates: number;
  passRate: number;
}

export default function AdminClient() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Data states
  const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
  const [contacts, setContacts] = useState<UnifiedContact[]>([]);
  const [attempts, setAttempts] = useState<AdminAttemptItem[]>([]);
  const [certificates, setCertificates] = useState<AdminCertificateItem[]>([]);
  const [leads, setLeads] = useState<AdminLeadItem[]>([]);

  // UI / Filter states
  const [activeTab, setActiveTab] = useState<'contacts' | 'attempts' | 'certificates' | 'leads'>('contacts');
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'registered_user' | 'lead' | 'exam_candidate' | 'certified_alumni'>('all');
  const [tierFilter, setTierFilter] = useState<string>('all');
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedSingleEmail, setCopiedSingleEmail] = useState<string | null>(null);

  // Check stored passcode on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('jnachi_admin_passcode') || localStorage.getItem('jnachi_admin_passcode');
      if (stored) {
        setPasscode(stored);
        fetchAdminData(stored);
      }
    }
  }, []);

  const fetchAdminData = async (code: string) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      const res = await fetch('/api/admin/data', {
        headers: {
          'x-admin-key': code.trim(),
        },
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Authentication failed. Incorrect passcode.');
      }

      setMetrics(data.metrics);
      setContacts(data.contacts || []);
      setAttempts(data.attempts || []);
      setCertificates(data.certificates || []);
      setLeads(data.leads || []);
      setIsAuthenticated(true);

      if (typeof window !== 'undefined') {
        sessionStorage.setItem('jnachi_admin_passcode', code.trim());
      }
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : 'Invalid Admin Passcode');
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) return;
    fetchAdminData(passcode);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setPasscode('');
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('jnachi_admin_passcode');
      localStorage.removeItem('jnachi_admin_passcode');
    }
  };

  // 1. Filtered Contacts
  const filteredContacts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return contacts.filter((c) => {
      // Type filter
      if (typeFilter !== 'all' && !c.types.includes(typeFilter)) {
        return false;
      }
      // Search query
      if (!q) return true;
      return (
        c.email.toLowerCase().includes(q) ||
        (c.name && c.name.toLowerCase().includes(q)) ||
        (c.company && c.company.toLowerCase().includes(q)) ||
        (c.location && c.location.toLowerCase().includes(q)) ||
        c.certificates.some((cert) => cert.certificateId.toLowerCase().includes(q))
      );
    });
  }, [contacts, searchQuery, typeFilter]);

  // 2. Filtered Attempts
  const filteredAttempts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return attempts.filter((a) => {
      if (tierFilter !== 'all' && a.tier !== tierFilter) return false;
      if (!q) return true;
      return (
        a.email.toLowerCase().includes(q) ||
        (a.recipientName && a.recipientName.toLowerCase().includes(q)) ||
        (a.certificateId && a.certificateId.toLowerCase().includes(q)) ||
        a.tier.toLowerCase().includes(q) ||
        a.tierTitle.toLowerCase().includes(q)
      );
    });
  }, [attempts, searchQuery, tierFilter]);

  // 3. Filtered Certificates
  const filteredCertificates = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return certificates.filter((c) => {
      if (tierFilter !== 'all' && c.tier !== tierFilter) return false;
      if (!q) return true;
      return (
        c.certificateId.toLowerCase().includes(q) ||
        c.recipientName.toLowerCase().includes(q) ||
        (c.company && c.company.toLowerCase().includes(q)) ||
        c.tier.toLowerCase().includes(q)
      );
    });
  }, [certificates, searchQuery, tierFilter]);

  // 4. Filtered Leads
  const filteredLeads = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return leads.filter((l) => {
      if (!q) return true;
      return l.email.toLowerCase().includes(q) || l.level.toLowerCase().includes(q);
    });
  }, [leads, searchQuery]);

  // Copy All Filtered Emails (Comma-separated)
  const handleCopyAllEmails = async () => {
    const emailList = Array.from(new Set(filteredContacts.map((c) => c.email))).join(', ');
    if (!emailList) return;
    try {
      await navigator.clipboard.writeText(emailList);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 3000);
    } catch {
      // Fallback
    }
  };

  // Copy Single Email
  const handleCopySingle = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedSingleEmail(email);
      setTimeout(() => setCopiedSingleEmail(null), 2000);
    } catch {
      // Fallback
    }
  };

  // Export Contacts to CSV
  const handleExportCsv = () => {
    if (filteredContacts.length === 0) return;

    const headers = [
      'Email',
      'Name',
      'Company',
      'Location',
      'User Types',
      'Highest Score',
      'Best Tier Earned',
      'Total Attempts',
      'Certificates Count',
      'First Seen Date',
      'Last Activity Date',
    ];

    const rows = filteredContacts.map((c) => [
      `"${c.email}"`,
      `"${c.name || ''}"`,
      `"${c.company || ''}"`,
      `"${c.location || ''}"`,
      `"${c.types.join(', ')}"`,
      c.highestScore !== undefined ? c.highestScore : '',
      `"${c.bestTierTitle || c.bestTierEarned || ''}"`,
      c.totalAttempts,
      c.certificates.length,
      `"${new Date(c.firstSeenAt).toISOString()}"`,
      `"${new Date(c.lastActivityAt).toISOString()}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `jnachi-leads-users-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // =========================================================================
  // VIEW: PASSCODE LOCK SCREEN
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
        <div className="w-full max-w-md bg-slate-900/90 border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6 text-center backdrop-blur-xl">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center mx-auto shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-950/70 border border-indigo-500/30 px-3 py-1 rounded-full">
              Jnachi Master Control
            </span>
            <h1 className="text-2xl font-black text-white">Admin Dashboard</h1>
            <p className="text-xs text-slate-400">
              Enter the master administrator passcode to inspect contacts, exam attempts, and platform metrics.
            </p>
          </div>

          {authError && (
            <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-xs font-semibold text-rose-300 flex items-center gap-2 text-left animate-in fade-in">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Admin Passcode"
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono placeholder:text-slate-500"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !passcode.trim()}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Unlock Admin Portal</span>
                </>
              )}
            </button>
          </form>

          <div className="pt-2 text-[11px] text-slate-500">
            Official Jnachi Security & Data Privacy Protocol
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW: AUTHENTICATED DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white pb-24">
      {/* Top Admin Navbar */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md">
              J
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-white tracking-tight">Jnachi Admin</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Live Console
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Database & Contact Directory Intelligence</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => fetchAdminData(passcode)}
              disabled={isLoading}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-white/10 transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>

            <button
              type="button"
              onClick={handleSignOut}
              className="text-xs font-bold text-slate-400 hover:text-rose-400 px-3 py-1.5 rounded-xl border border-white/10 hover:border-rose-500/30 transition-all flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Lock Console</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        {/* KPI METRICS OVERVIEW */}
        {metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {/* 1. Total Contacts */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                <span>Total Contacts</span>
                <Users className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">{metrics.totalContacts}</div>
              <div className="text-[10px] text-indigo-300 font-medium">Unified DB Directory</div>
            </div>

            {/* 2. Registered Users */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                <span>Users</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">{metrics.totalRegisteredUsers}</div>
              <div className="text-[10px] text-emerald-300 font-medium">Auth Accounts</div>
            </div>

            {/* 3. Assessment Leads */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                <span>Leads Captured</span>
                <Mail className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">{metrics.totalLeads}</div>
              <div className="text-[10px] text-amber-300 font-medium">Diagnostic Tests</div>
            </div>

            {/* 4. Total Exam Attempts */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                <span>Exam Attempts</span>
                <Layers className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-purple-400">{metrics.totalAttempts}</div>
              <div className="text-[10px] text-purple-300 font-medium">Proctored Sessions</div>
            </div>

            {/* 5. Conferred Certifications */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                <span>Certificates</span>
                <Award className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">{metrics.totalCertificates}</div>
              <div className="text-[10px] text-amber-300 font-medium">Conferred Diplomas</div>
            </div>

            {/* 6. Overall Pass Rate */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                <span>Pass Rate</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">{metrics.passRate}%</div>
              <div className="text-[10px] text-slate-400 font-medium">80% Benchmark</div>
            </div>
          </div>
        )}

        {/* TAB NAVIGATION & TOOLBAR */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            {/* Tabs */}
            <div className="flex p-1 bg-slate-900 rounded-2xl border border-white/10 shrink-0 self-start sm:self-auto overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => setActiveTab('contacts')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'contacts'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Unified Contacts ({contacts.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('attempts')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'attempts'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Exam Attempts ({attempts.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('certificates')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'certificates'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Certificates ({certificates.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('leads')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'leads'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Leads ({leads.length})</span>
              </button>
            </div>

            {/* Quick Actions (Copy All Emails / CSV Export) */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyAllEmails}
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold rounded-xl border border-white/10 transition-all flex items-center gap-1.5"
                title="Copy all filtered emails"
              >
                {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAll ? 'Copied All!' : 'Copy Emails'}</span>
              </button>

              <button
                type="button"
                onClick={handleExportCsv}
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
                title="Export contacts table to CSV"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by email, name, organization, certificate ID..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-slate-500"
              />
            </div>

            {/* Filter Pills for Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {(['all', 'registered_user', 'lead', 'exam_candidate', 'certified_alumni'] as const).map((filterType) => (
                  <button
                    key={filterType}
                    type="button"
                    onClick={() => setTypeFilter(filterType)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      typeFilter === filterType
                        ? 'bg-white text-slate-900'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {filterType === 'all'
                      ? 'All Contacts'
                      : filterType === 'registered_user'
                      ? 'Users'
                      : filterType === 'lead'
                      ? 'Leads'
                      : filterType === 'exam_candidate'
                      ? 'Examinees'
                      : 'Certified Alumni'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* =================================================================== */}
        {/* TAB 1: UNIFIED CONTACTS DIRECTORY */}
        {/* =================================================================== */}
        {activeTab === 'contacts' && (
          <div className="bg-slate-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-sm">Unified Email Directory ({filteredContacts.length})</h3>
                <p className="text-xs text-slate-400">Merged across all registrations, diagnostic assessments, and exam sessions.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-white/10">
                  <tr>
                    <th className="py-3.5 px-4">Contact / Email</th>
                    <th className="py-3.5 px-4">Organization & Location</th>
                    <th className="py-3.5 px-4">Profile Types</th>
                    <th className="py-3.5 px-4 text-center">Score / Tier</th>
                    <th className="py-3.5 px-4 text-center">Attempts</th>
                    <th className="py-3.5 px-4 text-right">Last Activity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredContacts.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-slate-500">
                        No contacts found matching search filter.
                      </td>
                    </tr>
                  ) : (
                    filteredContacts.map((c) => (
                      <tr key={c.email} className="hover:bg-white/5 transition-colors">
                        {/* Email & Name */}
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-white flex items-center gap-1.5">
                            <span>{c.name || 'Candidate'}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="font-mono text-[11px] text-indigo-300">{c.email}</span>
                            <button
                              type="button"
                              onClick={() => handleCopySingle(c.email)}
                              className="text-slate-500 hover:text-white transition-colors"
                              title="Copy email"
                            >
                              {copiedSingleEmail === c.email ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* Org & Location */}
                        <td className="py-3.5 px-4">
                          <div className="text-slate-200">{c.company || '—'}</div>
                          <div className="text-[11px] text-slate-400">{c.location || '—'}</div>
                        </td>

                        {/* Types Badges */}
                        <td className="py-3.5 px-4">
                          <div className="flex flex-wrap gap-1">
                            {c.types.map((t) => (
                              <span
                                key={t}
                                className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                  t === 'certified_alumni'
                                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                                    : t === 'registered_user'
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                    : t === 'exam_candidate'
                                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                    : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                                }`}
                              >
                                {t === 'certified_alumni'
                                  ? '🏆 Alumni'
                                  : t === 'registered_user'
                                  ? '👤 User'
                                  : t === 'exam_candidate'
                                  ? '📝 Examinee'
                                  : '⚡ Lead'}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* Score / Best Tier */}
                        <td className="py-3.5 px-4 text-center">
                          {c.bestTierTitle ? (
                            <div className="font-bold text-amber-300">{c.bestTierTitle}</div>
                          ) : c.highestScore !== undefined ? (
                            <div className="font-bold text-indigo-300">
                              {c.highestScore} / {c.highestPercentage ? `${c.highestPercentage}%` : '100'}
                            </div>
                          ) : (
                            <span className="text-slate-500">—</span>
                          )}
                        </td>

                        {/* Attempts */}
                        <td className="py-3.5 px-4 text-center">
                          <span className="font-bold text-slate-300">{c.totalAttempts || c.certificates.length || 0}</span>
                        </td>

                        {/* Last Activity */}
                        <td className="py-3.5 px-4 text-right text-slate-400 font-mono text-[11px]">
                          {new Date(c.lastActivityAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: EXAM ATTEMPTS */}
        {/* =================================================================== */}
        {activeTab === 'attempts' && (
          <div className="bg-slate-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-sm">Proctored Exam Sessions ({filteredAttempts.length})</h3>
                <p className="text-xs text-slate-400">All 40-question proctored attempts across 4 Core Tiers & 6 Roles.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-white/10">
                  <tr>
                    <th className="py-3.5 px-4">Candidate</th>
                    <th className="py-3.5 px-4">Track Tier</th>
                    <th className="py-3.5 px-4 text-center">Attempt #</th>
                    <th className="py-3.5 px-4 text-center">Score / 40</th>
                    <th className="py-3.5 px-4 text-center">Status</th>
                    <th className="py-3.5 px-4">Certificate ID</th>
                    <th className="py-3.5 px-4 text-right">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredAttempts.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-slate-500">
                        No examination attempts found.
                      </td>
                    </tr>
                  ) : (
                    filteredAttempts.map((a) => (
                      <tr key={a.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-white">{a.recipientName || 'Candidate'}</div>
                          <div className="font-mono text-[11px] text-slate-400">{a.email}</div>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="font-semibold text-indigo-300">{a.tierTitle}</span>
                        </td>

                        <td className="py-3.5 px-4 text-center font-bold text-slate-300">
                          #{a.attemptNumber}
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          {typeof a.score === 'number' ? (
                            <span className={`font-black ${a.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {a.score} ({a.percentage}%)
                            </span>
                          ) : (
                            <span className="text-slate-500">In Progress</span>
                          )}
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          {a.passed ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              <Check className="w-3 h-3" /> Passed (80%+)
                            </span>
                          ) : a.status === 'completed' ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                              <XCircle className="w-3 h-3" /> Did Not Pass
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              <Clock className="w-3 h-3" /> In Progress
                            </span>
                          )}
                        </td>

                        <td className="py-3.5 px-4">
                          {a.certificateId ? (
                            <Link
                              href={`/verify/${encodeURIComponent(a.certificateId)}`}
                              target="_blank"
                              className="font-mono text-[11px] text-indigo-400 hover:text-indigo-300 hover:underline flex items-center gap-1"
                            >
                              <span>{a.certificateId}</span>
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          ) : (
                            <span className="text-slate-600">—</span>
                          )}
                        </td>

                        <td className="py-3.5 px-4 text-right text-slate-400 font-mono text-[11px]">
                          {new Date(a.completedAt || a.startedAt).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: CONFERRED CERTIFICATES */}
        {/* =================================================================== */}
        {activeTab === 'certificates' && (
          <div className="bg-slate-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-sm">Issued Diplomas & Verifications ({filteredCertificates.length})</h3>
                <p className="text-xs text-slate-400">Cryptographically verifiable diplomas registered in the public registry.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-white/10">
                  <tr>
                    <th className="py-3.5 px-4">Certificate ID</th>
                    <th className="py-3.5 px-4">Recipient Candidate</th>
                    <th className="py-3.5 px-4">Track Tier</th>
                    <th className="py-3.5 px-4 text-center">Score</th>
                    <th className="py-3.5 px-4 text-center">Status</th>
                    <th className="py-3.5 px-4 text-right">Issued Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredCertificates.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-slate-500">
                        No issued certificates found yet.
                      </td>
                    </tr>
                  ) : (
                    filteredCertificates.map((c) => (
                      <tr key={c.certificateId} className="hover:bg-white/5 transition-colors">
                        <td className="py-3.5 px-4">
                          <Link
                            href={`/verify/${encodeURIComponent(c.certificateId)}`}
                            target="_blank"
                            className="font-mono font-bold text-amber-300 hover:underline flex items-center gap-1"
                          >
                            <span>{c.certificateId}</span>
                            <ExternalLink className="w-3 h-3 opacity-70" />
                          </Link>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-bold text-white">{c.recipientName}</div>
                          {c.company && <div className="text-[11px] text-slate-400">{c.company}</div>}
                        </td>

                        <td className="py-3.5 px-4 font-semibold text-indigo-300">
                          {c.tierTitle}
                        </td>

                        <td className="py-3.5 px-4 text-center font-bold text-emerald-400">
                          {c.score} ({c.percentage}%)
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            <Check className="w-3 h-3" /> Valid Pass
                          </span>
                        </td>

                        <td className="py-3.5 px-4 text-right text-slate-400 font-mono text-[11px]">
                          {new Date(c.issuedAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: DIAGNOSTIC LEADS */}
        {/* =================================================================== */}
        {activeTab === 'leads' && (
          <div className="bg-slate-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-sm">3-Minute Assessment Leads ({filteredLeads.length})</h3>
                <p className="text-xs text-slate-400">Top-of-funnel diagnostic submissions.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-white/10">
                  <tr>
                    <th className="py-3.5 px-4">Email</th>
                    <th className="py-3.5 px-4 text-center">Diagnostic Score</th>
                    <th className="py-3.5 px-4">Standing Level</th>
                    <th className="py-3.5 px-4 text-right">Captured Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-12 text-slate-500">
                        No diagnostic leads captured yet.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((l) => (
                      <tr key={l.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-medium text-indigo-300">
                          {l.email}
                        </td>

                        <td className="py-3.5 px-4 text-center font-bold text-white">
                          {l.score} / 100
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="capitalize text-slate-300 font-semibold">{l.level}</span>
                        </td>

                        <td className="py-3.5 px-4 text-right text-slate-400 font-mono text-[11px]">
                          {new Date(l.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
