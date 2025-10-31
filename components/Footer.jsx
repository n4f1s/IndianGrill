import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Ticket } from 'lucide-react';
import { MessageCircle } from 'lucide-react';


export default function Footer() {

    return (
        <footer className="bg-white border-t border-gray-200 text-gray-700">
            <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                        <h2 className="text-xl font-semibold">Indian Grill Wrap & Go</h2>
                    </div>
                    <p className="text-sm text-gray-600">
                        Experience the authentic taste of India — fresh, flavorful, and crafted with passion.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/menu" className="hover:text-primary transition">Menu</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
                        <li><Link href="/careers" className="hover:text-primary transition">Careers</Link></li>
                    </ul>
                </div>

                {/* Policies */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Information</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/terms" className="hover:text-primary transition">Terms & Conditions</Link></li>
                        <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
                        <li><Link href="/cookies" className="hover:text-primary transition">Cookies Policy</Link></li>
                        <li><Link href="/accessibility" className="hover:text-primary transition">Accessibility</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2"><MapPin size={16} /> 123 Brooklyn Ave, NY 11201</li>
                        <li className="flex items-center gap-2"><Phone size={16} /> (212) 555-7890</li>
                        <li className="flex items-center gap-2"><Mail size={16} /> info@indiangrill.com</li>
                    </ul>

                    <div className="mt-4 flex items-center gap-3">
                        <a
                            href="https://www.facebook.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:bg-primary transition"
                        >
                            <Facebook size={18} />
                        </a>

                        <a
                            href="https://www.instagram.com/yourhandle"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:bg-primary transition"
                        >
                            <Instagram size={18} />
                        </a>

                        <a
                            href="https://wa.me/12125557890"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:bg-primary transition"
                            title="WhatsApp"
                        >
                            {/* Lucide has no WhatsApp brand; MessageCircle is a clean fallback */}
                            <MessageCircle size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-200 mt-6">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2025 Indian Grill Wrap & Go. All rights reserved.</p>
                    <p>Made with ❤️ in Brooklyn</p>
                </div>
            </div>
        </footer>
    );
}
