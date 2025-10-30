'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bike, Timer, FlameKindling, MapPin } from 'lucide-react';

export default function Delivery() {
    return (
        <section className="bg-white">
            <div className="wrapper">
                <div className="relative overflow-hidden rounded-2xl bg-tertiary">
                    {/* Illustration */}
                    <div className="pointer-events-none md:absolute -bottom-1 md:left-10">
                        <Image
                            src="/deliveryMan.png"
                            alt="Courier on the way with hot food"
                            width={420}
                            height={560}
                            priority={false}
                        />
                    </div>

                    <div className='absolute -top-10 '>
                        <Image
                            src="/gif/birds.gif"
                            alt="Courier riding through NYC"
                            width={500}
                            height={260}
                            unoptimized       
                            priority={false}
                        />
                    </div>

                    {/* Content */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-12 px-6 sm:px-8 lg:px-12">
                        {/* Left spacer for image on desktop */}
                        <div className="hidden md:block" />

                        {/* Text + actions */}
                        <div className="md:pl-6">
                            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold tracking-wide uppercase text-primary">
                                Fast Delivery
                            </span>

                            <h2 className="mt-3 heading1">
                                Fast delivery across New York
                            </h2>

                            <p className="mt-3 text-gray-700">
                                Order in seconds and track every step in real-time. Our couriers keep your wraps insulated so they arrive
                                fresh, hot, and ready to enjoy.
                            </p>

                            {/* Feature bullets */}
                            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary"><Bike className="h-6 w-6" aria-hidden /></span>
                                    <div>
                                        <p className="font-semibold text-gray-900">Easy ordering & tracking</p>
                                        <p className="text-sm text-gray-600">Streamlined checkout and live courier updates.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary"><Timer className="h-6 w-6" aria-hidden /></span>
                                    <div>
                                        <p className="font-semibold text-gray-900">Very fast delivery</p>
                                        <p className="text-sm text-gray-600">Typical arrivals in 25–40 minutes depending on traffic.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary"><FlameKindling className="h-6 w-6" aria-hidden /></span>
                                    <div>
                                        <p className="font-semibold text-gray-900">Hot foods, well‑insulated</p>
                                        <p className="text-sm text-gray-600">Thermal bags keep wraps hot and salads crisp.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary"><MapPin className="h-6 w-6" aria-hidden /></span>
                                    <div>
                                        <p className="font-semibold text-gray-900">NYC coverage</p>
                                        <p className="text-sm text-gray-600">We serve select neighborhoods in Brooklyn & Queens.</p>
                                    </div>
                                </li>
                            </ul>

                            {/* Actions */}
                            <div className="mt-7 flex flex-wrap gap-3">
                                <Link
                                    href="/order"
                                    className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-secondary transition-colors"
                                >
                                    Order now
                                </Link>
                            </div>

                            {/* Service note */}
                            <div className="mt-6 rounded-xl bg-white/70 p-4 text-gray-700">
                                <p className="text-sm">
                                    Current coverage: Downtown Brooklyn, Park Slope, Williamsburg, Long Island City, Astoria. Delivery
                                    windows extend during peak hours. Fees vary by distance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative ring */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
                </div>
            </div>
        </section>
    );
}
