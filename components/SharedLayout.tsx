import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { AuthNav } from '@/components/AuthNav';

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
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className="text-slate-600 hover:text-indigo-600 transition-colors">
            Our Story
          </Link>
          <Link href="/reading" className="text-slate-600 hover:text-indigo-600 transition-colors">
            Check Reading
          </Link>
          <AuthNav />
          <Link 
            href="/reading" 
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-sm"
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
        
        <div className="flex gap-8 text-sm text-slate-600">
          <Link href="/about" className="hover:text-indigo-600 transition-colors">About Jnachi</Link>
          <Link href="#" className="hover:text-indigo-600 transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-indigo-600 transition-colors">Terms</Link>
          <Link href="#" className="hover:text-indigo-600 transition-colors">Contact</Link>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl mt-8 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
        &copy; {new Date().getFullYear()} Jnachi. All rights reserved.
      </div>
    </footer>
  );
}
