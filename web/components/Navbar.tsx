'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import useSWR from 'swr';
import { api, fetcherJSON } from '@/lib/api';

export default function NavBar() {
  const { data: me } = useSWR(api('/me'), fetcherJSON);

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur z-20">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <Link href="/feed" className="font-semibold">
            Bailanysta
          </Link>
          <nav className="hidden md:flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
            <Link href="/feed">/feed</Link>
            <Link href="/profile">/profile</Link>
            <Link href="/notifications">/notifications</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          {me ? (
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {me.displayName || me.username}
            </span>
          ) : (
            <Link href="/profile" className="text-sm underline">
              Войти
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
