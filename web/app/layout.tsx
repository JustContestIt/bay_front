import './globals.css';
import type { Metadata } from 'next';
import NavBar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Bailanysta',
  description: 'Минимальная социальная сеть (Next.js + Express + Prisma)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Применение темы из localStorage на стороне клиента — см. ThemeToggle
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="min-h-screen">
        <NavBar />
        <main className="container py-6">{children}</main>
      </body>
    </html>
  );
}
