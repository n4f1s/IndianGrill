'use client';


import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';

// Swiper core styles + modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Ayesha K.',
        role: 'Food Blogger',
        quote:
            'The chicken tikka wrap was perfectly spiced and so fresh. Easily my new go-to lunch spot!',
        avatar: '/testimonials/testimonial1.jpg',
    },
    {
        name: 'Rahul S.',
        role: 'Local Guide',
        quote:
            'Super clean kitchen and fast service. The paneer wrap had incredible texture and flavor.',
        avatar: '/testimonials/testimonial2.jpg',
    },
    {
        name: 'Maya L.',
        role: 'Regular',
        quote:
            'Crisp veggies, warm bread, and generous fillings. Consistently great every visit.',
        avatar: '/testimonials/testimonial3.jpg',
    },
    {
        name: 'James H.',
        role: 'Food Blogger',
        quote:
            'The chicken tikka wrap was perfectly spiced and so fresh. Easily my new go-to lunch spot!',
        avatar: '/testimonials/testimonial1.jpg',
    },
    {
        name: 'Sarah P.',
        role: 'Local Guide',
        quote:
            'Super clean kitchen and fast service. The paneer wrap had incredible texture and flavor.',
        avatar: '/testimonials/testimonial3.jpg',
    },
    {
        name: 'Rachel K.',
        role: 'Regular',
        quote:
            'Crisp veggies, warm bread, and generous fillings. Consistently great every visit.',
        avatar: '/testimonials/testimonial1.jpg',
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white">
            <div className="wrapper">
                <header className="mb-10 text-center">
                    <p className="heading3">
                        What guests say ——
                    </p>
                    <h2 className="heading1">
                        Loved by food lovers
                    </h2>
                </header>

                <Swiper
                    modules={[Pagination, Autoplay, A11y]}
                    slidesPerView={1}
                    spaceBetween={24}
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 24 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    className="!pb-12"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <article className="h-[250px] rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md relative">
                                <div className="flex items-center gap-4">
                                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                        <Image
                                            src={t.avatar}
                                            alt={t.name}
                                            fill
                                            sizes="48px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold color-primary">{t.name}</h3>
                                        <p className="text-sm text-gray-600">{t.role}</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-800 leading-relaxed">
                                    “{t.quote}”
                                </p>

                                <div className="absolute bottom-2 flex gap-1" aria-hidden>
                                    {[...Array(5)].map((_, i) => (
                                        <Star fill='#FFD700' key={i} />
                                    ))}
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Local Swiper theming via CSS vars */}
            <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--color-primary);
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: var(--color-secondary);
        }
        .swiper-pagination-bullet {
          background: color-mix(in oklab, var(--color-primary) 60%, white);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: var(--color-primary);
        }
      `}</style>
        </section>
    );
}
