import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { AuthNav } from '@/components/AuthNav';
import { BookOpen } from 'lucide-react';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
          <span className="hidden md:inline-block text-sm font-medium text-slate-500 border-l border-slate-200 pl-6">
            Know it. Use it. Prove it.
          </span>
        </div>
        <nav className="flex items-center gap-3 sm:gap-6 text-sm font-medium">
          <Link 
            href="/lessons" 
            className="flex items-center gap-1.5 text-slate-700 hover:text-indigo-600 transition-colors font-medium px-2 py-1"
          >
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Lessons</span>
          </Link>
          <Link href="/about" className="hidden sm:block text-slate-600 hover:text-indigo-600 transition-colors">
            Our Story
          </Link>
          <div className="hidden sm:block">
            <AuthNav />
          </div>
          <Link 
            href="/assessment" 
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-sm whitespace-nowrap"
          >
            Start Assessment
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo className="opacity-80" />
          <p className="text-slate-500 text-sm italic">Pronounced &quot;juh-NAH-chee&quot;</p>
          <p className="text-slate-500 text-sm mt-2">Where knowing becomes doing.</p>
        </div>
        
        <div className="flex flex-wrap gap-6 sm:gap-8 text-sm text-slate-600">
          <Link href="/lessons" className="hover:text-indigo-600 transition-colors font-medium text-indigo-600">Learning Hub (17 Lessons)</Link>
          <Link href="/assessment" className="hover:text-indigo-600 transition-colors">Assessment</Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">About Jnachi</Link>
          <Link href="/profile" className="hover:text-indigo-600 transition-colors">My Profile</Link>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl mt-8 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
        &copy; {new Date().getFullYear()} Jnachi. All rights reserved.
      </div>
    </footer>
  );
}

