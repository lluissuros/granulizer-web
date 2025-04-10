import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="bg-gray-900 p-4 border-b border-gray-700 flex gap-4">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/grain-player" className="hover:text-blue-400">Grain Player</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
