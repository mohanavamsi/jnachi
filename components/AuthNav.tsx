'use client';

import Link from 'next/link';
import { useAuth } from './AuthProvider';
import { loginWithGoogle, logout } from '@/lib/firebase';
import { LogOut, User as UserIcon } from 'lucide-react';

export function AuthNav() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse"></div>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/profile" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
          <UserIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Profile</span>
        </Link>
        <button 
          onClick={logout}
          className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={loginWithGoogle}
      className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
    >
      Log In
    </button>
  );
}
