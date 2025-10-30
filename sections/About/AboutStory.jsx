'use client';

import Image from 'next/image';
import { Users, Crown } from 'lucide-react';
import Link from 'next/link';

export default function AboutStory() {
    return (
        <section className="bg-white">
            <div className="wrapper mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
                    {/* LEFT: Image collage */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {/* Top-left portrait */}
                            <div className='flex flex-col gap-4 sm:gap-6'>
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                                    <Image
                                        src="/about/ourStory3.webp"
                                        alt="Head chef welcoming guests"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 50vw, 520px"
                                        priority
                                    />
                                </div>

                                {/* Top-right dining hall */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                                    <Image
                                        src="/about/ourStory1.webp"
                                        alt="Our signature dining hall"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 50vw, 520px"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-4 sm:gap-6'>
                                {/* Bottom-left kitchen action */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                                    <Image
                                        src="/about/ourStory4.webp"
                                        alt="Chefs at work in the kitchen"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 50vw, 520px"
                                    />
                                </div>

                                {/* Bottom-right lounge/business shot */}
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                                    <Image
                                        src="/about/ourStory2.webp"
                                        alt="Guests enjoying the lounge"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 50vw, 520px"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Circular badge */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-primary text-white shadow-lg flex items-center justify-center">
                                <div className="text-center leading-tight mt-2 sm:mt-4">
                                    <div className="text-[11px] sm:text-sm tracking-widest uppercase">Experience</div>
                                    <div className="text-2xl sm:text-3xl font-extrabold">10+</div>
                                    <div className="text-[11px] sm:text-sm tracking-widest uppercase">Years</div>
                                </div>
                                {/* ring accent */}
                                <span className="absolute inset-0 rounded-full ring-8 ring-primary/20 animate-ping" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Copy + stats */}
                    <div>
                        <p className='heading3'>
                            Indian Grill Wrap &amp; Go
                        </p>
                        <h2 className="heading1">
                            Our Story
                        </h2>

                        <p className="mt-5 text-gray-700 leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don’t look even slightly believable.
                        </p>

                        <p className="mt-4 text-gray-700 leading-relaxed italic">
                            Over 10 years’ experience providing top‑quality house booking, catering, and events to bring your amazing
                            dream to life — and make you happy.
                        </p>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-[color:var(--color-primary,theme(colors.sky.600))]/10 text-primary flex items-center justify-center">
                                    <Users className="h-6 w-6" aria-hidden />
                                </div>
                                <div>
                                    <div className="text-xl sm:text-2xl font-bold text-gray-900">90k+ Customers</div>
                                    <p className="text-gray-500">Believe in our service &amp; care</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-[color:var(--color-primary,theme(colors.sky.600))]/10 text-primary flex items-center justify-center">
                                    <Crown className="h-6 w-6" aria-hidden />
                                </div>
                                <div>
                                    <div className="text-xl sm:text-2xl font-bold text-gray-900">100+ Menu</div>
                                    <p className="text-gray-500">Food ready for everyone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
