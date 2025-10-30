'use client';

import Link from 'next/link';

export default function SignupPage() {
  return (
    <main className="min-h-[100dvh] grid place-items-center bg-white px-4">
      <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <header className="text-center">
          <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-primary font-playfair">Create account</h1>
          <p className="mt-2 text-sm sm:text-lg text-gray-600">
            Join us to order faster and track your favorites.
          </p>
        </header>

        <form className="mt-6 space-y-4" action="/api/auth/signup" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="Ayesha"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Khan"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-800">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="+1 555 123 4567"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

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
              autoComplete="new-password"
              placeholder="At least 8 characters"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="confirm" className="block text-sm font-semibold text-gray-800">
              Confirm password
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              required
              autoComplete="new-password"
              placeholder="Re-enter your password"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-start gap-2">
            <input id="tos" name="tos" type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300" />
            <label htmlFor="tos" className="text-sm text-gray-700">
              I agree to the Terms and Privacy Policy.
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-secondary transition-colors"
          >
            Create account
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
            Sign up with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
