'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Button from './Button';

const MAIN_NAV = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Promotions', href: '/promotions' },
    { label: 'Order', href: '/order' },
    { label: 'Menu', href: '/menu' },
];

function clsx(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (href) => {
        if (href === '/') return pathname === '/';
        return pathname === href || pathname.startsWith(href + '/');
    };

    return (
        <header className="relative z-50">
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow">
                <div className="sm:px-16 px-4 max-w-[1490px] w-full mx-auto">
                    <div className="flex items-center justify-between h-[80px] gap-4">
                        {/* Logo + Brand */}
                        <div className="flex items-center">
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={40}
                                height={40}
                                priority
                                fetchPriority="high"
                            />
                            <Link href="/" className="text-sm sm:text-xl font-bold ml-4">
                                Indian Grill Wrap &amp; Go
                            </Link>
                        </div>

                        {/* Main nav */}
                        <ul className="hidden md:flex items-center gap-6">
                            {MAIN_NAV.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={
                                                `text-lg font-bold transition-colors text-black hover:text-primary ` +
                                                (active ? 'text-primary underline underline-offset-4' : '')
                                            }
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-3">
                            <Button onClick={() => router.push('/auth/login')}>Sign-in</Button>
                            <Button variant="outline" onClick={() => router.push('/auth/signup')}>
                                Sign-up
                            </Button>
                        </div>

                        {/* Mobile menu trigger */}
                        <MobileMenu MAIN_NAV={MAIN_NAV} isActive={isActive} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

const MobileMenu = ({ MAIN_NAV, isActive }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="md:hidden">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
                aria-label="Toggle menu"
                aria-expanded={open}
            >
                {!open ? (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                ) : (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
            </button>

            {open && (
                <div className="absolute left-0 right-0 top-[80px] bg-white/95 backdrop-blur border-t border-gray-200 shadow-md">
                    <ul className="flex flex-col gap-1 p-3">
                        {MAIN_NAV.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        aria-current={active ? 'page' : undefined}
                                        className={clsx(
                                            'block rounded-md px-3 py-2 text-base font-semibold transition-colors',
                                            'color-primary hover:color-secondary',
                                            active && 'color-secondary bg-sky-50'
                                        )}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="mt-2 flex gap-3 px-3 py-1">
                            <Link
                                href="/auth/login"
                                className="rounded-md px-3 py-2 text-sm font-semibold bg-primary text-white hover:bg-secondary"
                                onClick={() => setOpen(false)}
                            >
                                Sign-in
                            </Link>
                            <Link
                                href="/auth/signup"
                                className="rounded-md px-3 py-2 text-sm font-semibold border border-gray-300 hover:bg-gray-50"
                                onClick={() => setOpen(false)}
                            >
                                Sign-up
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
