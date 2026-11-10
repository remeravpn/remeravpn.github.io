// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          RSH Finder
        </Link>
        <nav className="space-x-4">
          <Link href="/houses" className="text-gray-600 hover:text-gray-900">
            Houses
          </Link>
          <Link href="/roommates" className="text-gray-600 hover:text-gray-900">
            Roommates
          </Link>
        </nav>
      </div>
    </header>
  );
}
