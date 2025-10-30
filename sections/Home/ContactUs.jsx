'use client';

import Button from "@/components/Button";
import { MapPin, Mail, Clock, Phone } from "lucide-react";



export default function ContactUs() {
    return (
        <section className="bg-white">
            <div className="wrapper">
                <header className="mb-10 text-center">
                    <p className="heading3">
                        Get in touch ——
                    </p>
                    <h2 className="heading1">
                        How can we help?
                    </h2>
                    <p className="my-3 text-gray-600 text-base md:text-lg font-semibold text-center">
                        Questions about orders, catering, or promotions? Send a message and the team will reply shortly.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact details */}
                    <aside className="rounded-2xl border border-gray-200 p-6 sm:p-8 bg-tertiary">
                        <h3 className="heading3">Restaurant info</h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-start gap-4">
                                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center text-primary">
                                    <MapPin className="h-6 w-6" aria-hidden />
                                </span>
                                <div>
                                    <p className="text-sm sm:text-xl font-semibold text-gray-800">Address</p>
                                    <p className="text-gray-600">123 Spice Ave, City Center, YourTown</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center text-primary">
                                    <Phone className="h-6 w-6" aria-hidden />
                                </span>
                                <div>
                                    <p className="text-sm sm:text-xl font-semibold text-gray-800">Phone</p>
                                    <a className="text-gray-700 hover:underline" href="tel:+11234567890">
                                        +1 (123) 456-7890
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center text-primary">
                                    <Mail className="h-6 w-6" aria-hidden />
                                </span>
                                <div>
                                    <p className="text-sm sm:text-xl font-semibold text-gray-800">Email</p>
                                    <a className="text-gray-700 hover:underline" href="mailto:hello@indiangrillwrapgo.com">
                                        hello@indiangrillwrapgo.com
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center text-primary">
                                    <Clock className="h-6 w-6" aria-hidden />
                                </span>
                                <div>
                                    <p className="text-sm sm:text-xl font-semibold text-gray-800">Hours</p>
                                    <p className="text-gray-600">Mon–Sun: 11:00 AM – 10:00 PM</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <a
                                href="https://maps.google.com/?q=123+Spice+Ave"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button>
                                    View on Google Maps
                                </Button>
                            </a>
                        </div>
                    </aside>

                    {/* Contact form */}
                    <form className="rounded-2xl border border-gray-200 p-6 sm:p-8 bg-white" action="/api/contact" method="POST">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    placeholder="e.g., Ayesha Khan"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-800">Phone</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="e.g., +1 555 123 4567"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="e.g., you@example.com"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-800">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="What is your message about?"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-800">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Share details about your order, catering request, or feedback (max 500 characters)"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                                <input type="checkbox" name="newsletter" className="h-4 w-4 rounded border-gray-300" />
                                Subscribe to updates
                            </label>

                            <button
                                type="submit"
                                className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-secondary transition-colors"
                            >
                                Send message
                            </button>
                        </div>

                        <p className="mt-3 text-xs text-gray-500">
                            By submitting, you agree to be contacted about your inquiry. We respect your privacy.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
