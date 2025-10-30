import Button from "@/components/Button";
import Image from "next/image";
import React from "react";


const HomeHero = () => {
    return (
        <div className="w-full mt-[80px]">
            <div className="wrapper">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 justify-between items-center">
                    {/* Image Section — comes first on mobile, second on lg+ */}
                    <div className="order-1 lg:order-2 lg:col-span-2 relative h-[400px] w-full rounded-2xl overflow-hidden">
                        <Image
                            src="https://ik.imagekit.io/awwybhhmo/satellite_images/indian/gray/hero/3.jpg?tr="
                            alt="hero"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Text Section — comes second on mobile, first on lg+ */}
                    <div className="order-2 lg:order-1 lg:col-span-3">
                        <h1 className="text-gray-800 text-4xl md:text-7xl font-semibold font-playfair">
                            Brooklyn’s Premier Indian Restaurant
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg font-semibold mt-6 text-justify">
                            At Indian Grill Wrap & Go, we serve flavorful Indian dishes like
                            Chicken Tikka Masala, Paneer Tikka Masala, and Cauliflower
                            Manchurian that keep customers coming back. We offer delivery and
                            takeout for lunch and dinner, delighting Prospect Heights, Clinton
                            Hill, and Fort Greene neighbors. Customers love our fresh spices,
                            generous portions, and quick service!
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <Button>
                                Order Online
                            </Button>

                            <Button variant="outline">
                                View Menu
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
