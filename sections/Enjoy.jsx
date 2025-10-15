import React from 'react'
import Button from '../components/Button'

const Enjoy = () => {
    return (
        <div className='w-full h-auto relative'>
            <div
                className="absolute inset-0 bg-center bg-cover bg-fixed"
                style={{ backgroundImage: "url('/enjoyBg.jpg')" }}
            />

            {/* Dark fade around center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_1%,rgba(0,0,0,0.8)_60%)]" />

            <div className='wrapper'>
                <div className='grid md:grid-cols-2 gap-14'>
                    <div>
                        <p className='heading3'>
                            Refresh your taste buds ——
                        </p>
                        <h2 className='text-4xl md:text-7xl font-semibold font-playfair text-white'>
                            Enjoy An Exceptional Journey of Taste
                        </h2>
                        <p className='text-white bg-black/50 p-4 rounded-2xl text-base md:text-lg font-semibold text-justify my-[30px]'>
                            Every dish is thoughtfully crafted with love and care, using the
                            freshest ingredients and authentic spices to bring the true
                            flavors of India straight to your table. From our signature
                            Chicken Tikka Masala to Paneer Tikka and vibrant
                            vegetarian delights, each meal is designed to delight your senses.
                        </p>
                        <Button>
                            Discover More
                        </Button>

                        <img
                            src="/enjoy1.jpg"
                            alt='Enjoy 1'
                            className='rounded-2xl object-cover mt-24'
                        />
                    </div>

                    <div className='w-full h-full flex flex-col justify-end'>
                        <img
                            src='/enjoy2.jpg'
                            alt='Enjoy 2'
                            className='rounded-2xl object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enjoy