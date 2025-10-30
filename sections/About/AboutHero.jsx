import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
    return (
        <section className="mt-20">
            <div className="wrapper">
                <div className="relative w-full h-[400px] sm:h-[600px] rounded-2xl overflow-hidden">
                    {/* Background image */}
                    <Image
                        fill
                        alt="Our story at Indian Grill Wrap & Go"
                        src="/about/aboutHero.webp"
                        priority
                        fetchPriority='high'
                        className="object-cover"
                    />

                    {/* Overlay: gradient + tint for readability */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0">
                        <div className="h-full px-6 sm:px-10 lg:px-14 flex items-end pb-10">
                            <div className="max-w-3xl text-white">
                                <h1 className="mt-4 text-white text-4xl md:text-7xl font-semibold font-playfair">
                                    A restaurant that puts freshness first
                                </h1>

                                <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-xl text-white/90">
                                    Hand‑marinated proteins, crisp veggies, and house sauces crafted daily in a spotless, organized kitchen.
                                </p>

                                <div className="mt-6 sm:mt-24 flex flex-wrap gap-3">
                                    <Link
                                        href="/menu"
                                    >
                                        <Button variant='outline' className='bg-white'>
                                            Explore The Menu
                                        </Button>
                                    </Link>
                                </div>

                                {/* Quick stats */}
                                <dl className="mt-8 grid grid-cols-3 gap-4 max-w-lg lg:max-w-full">
                                    <div>
                                        <dt className="text-xs lg:text-xl font-medium uppercase tracking-wide">Years perfecting</dt>
                                        <dd className="text-xl sm:text-3xl font-extrabold text-primary">10+</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs lg:text-xl font-medium uppercase tracking-wide">Signature wraps</dt>
                                        <dd className="text-xl sm:text-3xl font-extrabold text-primary">15</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs lg:text-xl font-medium uppercase tracking-wide">Daily fresh preps</dt>
                                        <dd className="text-xl sm:text-3xl font-extrabold text-primary">100%</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    {/* Subtle border shine */}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
                </div>
            </div>
        </section>
    );
}
