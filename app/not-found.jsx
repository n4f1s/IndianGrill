import Link from 'next/link';

export const metadata = {
  title: 'Not Found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-6 py-16">
      <div className="text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-primary">
          404
        </h1>
        <p className="mt-2 text-lg">This page could not be found.</p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md px-4 py-2 text-base font-semibold transition-colors bg-primary text-white hover:bg-secondary"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
