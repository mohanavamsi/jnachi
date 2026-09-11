'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from './AuthProvider';
import { loginWithGoogle, logout } from '@/lib/firebase';
import { LogOut, User as UserIcon, ChevronDown, Sparkles } from 'lucide-react';

export function AuthNav() {
  const { user, userProfile, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (loading) {
    return <div className="w-8 h-8 rounded-full bg-slate-100 animate-pulse border border-slate-200" />;
  }

  if (user) {
    const displayName = user.displayName || userProfile?.displayName || 'My Account';
    const initials = (displayName || 'U')
      .split(' ')
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase();

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-700"
          title={displayName}
        >
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={displayName}
              className="w-7 h-7 rounded-full object-cover border border-slate-200"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-semibold flex items-center justify-center">
              {initials || 'U'}
            </div>
          )}
          <span className="hidden lg:inline text-xs font-medium max-w-[90px] truncate text-slate-700">
            {displayName.split(' ')[0]}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200/80 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
            <div className="px-3.5 py-2.5 border-b border-slate-100">
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Signed in as</p>
              <p className="text-sm font-semibold text-slate-800 truncate mt-0.5">{displayName}</p>
              {user.email && (
                <p className="text-xs text-slate-500 truncate mt-0.5">{user.email}</p>
              )}
            </div>

            <div className="py-1">
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-slate-700 hover:bg-indigo-50/70 hover:text-indigo-600 transition-colors"
              >
                <UserIcon className="w-4 h-4 text-slate-400" />
                <span>My Profile</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-slate-700 hover:bg-indigo-50/70 hover:text-indigo-600 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-slate-400" />
                <span>Our Story</span>
              </Link>
            </div>

            <div className="pt-1 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  logout();
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-rose-600 hover:bg-rose-50 transition-colors text-left"
              >
                <LogOut className="w-4 h-4 text-rose-500" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={loginWithGoogle}
      className="text-sm font-medium text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
    >
      Log In
    </button>
  );
}
