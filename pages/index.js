// pages/index.js
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Rwanda Student Housing & Roommate Finder
        </h1>
        <p className="mb-8 text-center text-gray-700">
          Browse houses for rent and find compatible roommates near your university.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            href="/houses"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
          >
            Browse Houses
          </Link>
          <Link
            href="/roommates"
            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 text-center"
          >
            Find Roommates
          </Link>
        </div>
      </main>
    </div>
  );
}
