'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, db, OperationType, handleFirestoreError } from '@/lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export interface UserProfile {
  displayName?: string;
  email?: string;
  location?: string;
  company?: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  updateUserProfile: (data: { displayName?: string; location?: string; company?: string }) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  loading: true,
  updateUserProfile: async () => {},
  refreshProfile: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (currentUser: User) => {
    const userRef = doc(db, 'users', currentUser.uid);
    try {
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        const initialProfile = {
          email: currentUser.email || '',
          displayName: currentUser.displayName || '',
          location: '',
          company: '',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        };
        await setDoc(userRef, initialProfile);
        setUserProfile(initialProfile);
      } else {
        setUserProfile(userSnap.data() as UserProfile);
      }
    } catch (error) {
      console.error('Error fetching/creating user profile', error);
      handleFirestoreError(error, OperationType.GET, `users/${currentUser.uid}`);
    }
  };

  const updateUserProfile = async (data: { displayName?: string; location?: string; company?: string }) => {
    if (!user) throw new Error('User not authenticated');
    const userRef = doc(db, 'users', user.uid);
    try {
      const payload: Record<string, unknown> = {
        updatedAt: serverTimestamp(),
      };
      if (data.displayName !== undefined) payload.displayName = data.displayName.trim();
      if (data.location !== undefined) payload.location = data.location.trim();
      if (data.company !== undefined) payload.company = data.company.trim();

      const { updateDoc } = await import('firebase/firestore');
      await updateDoc(userRef, payload);
      setUserProfile((prev) => ({
        ...prev,
        ...data,
      }));
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${user.uid}`);
    }
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        await fetchProfile(currentUser);
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, userProfile, loading, updateUserProfile, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
