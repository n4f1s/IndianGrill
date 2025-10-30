'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-[100dvh] grid place-items-center bg-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <header className="text-center">
          <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-primary font-playfair">Sign in</h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back! Please enter your details to continue.
          </p>
        </header>

        <form className="mt-6 space-y-4" action="/api/auth/signin" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="Your secure password"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" name="remember" className="h-4 w-4 rounded border-gray-300" />
              Remember me
            </label>
            <Link href="/auth/forgot" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-secondary transition-colors"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
            onClick={() => {
              // e.g., NextAuth
              // signIn('google');
            }}
          >
            Continue with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link href="/auth/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
