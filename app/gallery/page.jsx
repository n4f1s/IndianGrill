'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

const RAW = [
    // About
    { id: 'ah', title: 'Dining Room', src: '/about/aboutHero.webp', cat: 'Spaces', w: 3, h: 1 },
    { id: 'o1', title: 'Our Story I', src: '/about/ourStory1.webp', cat: 'Spaces', w: 3, h: 2 },
    { id: 'o2', title: 'Our Story II', src: '/about/ourStory2.webp', cat: 'Spaces', w: 3, h: 2 },
    { id: 'o3', title: 'Our Story III', src: '/about/ourStory3.webp', cat: 'Spaces', w: 3, h: 2 },
    { id: 'o4', title: 'Our Story IV', src: '/about/ourStory4.webp', cat: 'Spaces', w: 3, h: 2 },

    // Foods (mostly wide)
    { id: 'wrap', title: 'Chicken Tikka Wrap', src: '/foods/chickenTikkaWrap.jpg', cat: 'Wraps', w: 3, h: 1 },
    { id: 'wrap2', title: 'Chicken Wrap', src: '/foods/chickenWrap.jpg', cat: 'Wraps', w: 2, h: 1 },
    { id: 'ctm', title: 'Chicken Tikka Masala', src: '/foods/chickenTikkaMasala.jpg', cat: 'Mains', w: 2, h: 1 },
    { id: 'biryani', title: 'Lamb Biryani', src: '/foods/lambBiryani.jpg', cat: 'Mains', w: 2, h: 1 },
    { id: 'korma', title: 'Beef Korma', src: '/foods/beefKorma.jpg', cat: 'Mains', w: 2, h: 1 },
    { id: 'vind', title: 'Lamb Vindaloo', src: '/foods/lambVindaloo.jpg', cat: 'Mains', w: 2, h: 1 },
    { id: 'salad', title: 'Cucumber Salad', src: '/foods/cucumberSalad.jpg', cat: 'Sides', w: 2, h: 1 },
    { id: 'chaat', title: 'Salad Chaat', src: '/foods/saladChaat.jpg', cat: 'Sides', w: 2, h: 1 },
    { id: 'combo', title: 'Combo Platter', src: '/foods/combo.webp', cat: 'Mains', w: 4, h: 1 },

    // Quality shots
    { id: 'q1', title: 'Kitchen Prep', src: '/quality1.jpg', cat: 'Behind the scenes', w: 3, h: 2 },
    { id: 'q2', title: 'Fresh Finish', src: '/quality2.jpg', cat: 'Behind the scenes', w: 3, h: 2 },
    { id: 'enjoy2', title: 'Enjoy Together II', src: '/enjoy2.jpg', cat: 'People', w: 3, h: 2 },

    // Hero and textures as fillers
    { id: 'homeHero', title: 'Home Hero', src: '/homeHero.webp', cat: 'Spaces', w: 3, h: 1 },
    { id: 'enjoy1', title: 'Enjoy Together I', src: '/enjoy1.jpg', cat: 'People', w: 6, h: 2 },
];

const CATS = ['All', ...Array.from(new Set(RAW.map((x) => x.cat)))];

export default function GalleryPage() {
    const [active, setActive] = useState('All');

    const items = useMemo(() => (active === 'All' ? RAW : RAW.filter((d) => d.cat === active)), [active]);

    return (
        <main className="mt-20 min-h-screen">
            <div className="wrapper">
                <header className="mb-8 sm:mb-10 text-center">
                    <h1 className="heading1">Gallery</h1>
                    <p className="mt-2 heading3">A peek at our spaces, wraps, mains, and moments.</p>
                </header>

                {/* Filters */}
                <nav className="mb-8 flex flex-wrap items-center justify-center gap-2">
                    {CATS.map((c) => {
                        const on = c === active;
                        return (
                            <button
                                key={c}
                                onClick={() => setActive(c)}
                                className={[
                                    'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                                    on ? 'bg-primary text-white' : 'border border-gray-300 hover:bg-gray-50',
                                ].join(' ')}
                                aria-pressed={on}
                            >
                                {c}
                            </button>
                        );
                    })}
                </nav>

                {/* Grid tuned for wide images with some tall accents */}
                <section
                    className="
            grid gap-4 sm:gap-5
            grid-cols-2
            sm:grid-cols-6
            lg:grid-cols-12
            auto-rows-[8px] sm:auto-rows-[10px]
          "
                >
                    {items.map((it) => (
                        <figure
                            key={it.id}
                            className="group relative overflow-hidden rounded-2xl shadow-sm bg-gray-100"
                            style={{
                                gridColumn: `span ${Math.min(it.w * 2, 12)}`,
                                gridRow: `span ${it.h * 10}`,
                            }}
                        >
                            <Image
                                src={it.src}
                                alt={it.title}
                                fill
                                // Wide-first sizes: ~50vw on small, ~33vw on md, ~25vw on lg for large spans
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                priority={false}
                            />
                            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                <div className="rounded-xl bg-black/45 backdrop-blur text-white px-3 py-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
                                    <p className="line-clamp-1 text-sm font-semibold">{it.title}</p>
                                    <p className="text-xs text-white/85">{it.cat}</p>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </section>
            </div>
        </main>
    );
}
