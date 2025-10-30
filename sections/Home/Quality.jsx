import Image from "next/image";

const Quality = () => {
    return (
        <section className="bg-tertiary relative overflow-hidden w-full h-auto">
            <div className="sm:px-16 px-4 py-10 sm:py-16 max-w-[1490px] w-full h-full mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-14 items-center w-full h-full">
                    {/* Text Content */}
                    <div className="flex flex-col text-center lg:text-left order-1 lg:order-2">
                        <h4 className="heading3">NUTRITION AND TASTE ——</h4>
                        <h2 className="heading1">QUALITY & BALANCED FOOD</h2>
                        <p className="heading2 my-8">
                            We serve food, harmony, and laughter. Making delicious food and
                            providing a wonderful eating experience since 2002.
                        </p>
                        <img
                            src="/foods/combo.webp"
                            alt=""
                            className="rounded-2xl w-full h-[300px] object-cover"
                        />
                    </div>

                    {/* Image Stack */}
                    <div className="hidden lg:block w-full h-full">
                        <div className="flex-1 flex w-full h-full justify-center lg:justify-start items-center relative">
                            {/* Front Image */}
                            <div className="relative w-72 h-80 z-10">
                                <Image
                                    src="/quality2.jpg"
                                    alt="Burger with wedges"
                                    fill
                                    sizes="(max-width: 1024px) 0px, 288px"
                                    className="object-cover rounded-xl shadow-lg"
                                />
                            </div>

                            {/* Back Image (Layered) */}
                            <div className="absolute top-16 left-[250px] 
                            w-72 h-80 z-0">
                                <Image
                                    src="/quality1.jpg"
                                    alt="Pizza slice"
                                    fill
                                    sizes="(max-width: 1024px) 0px, 288px"
                                    className="object-cover rounded-xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;
