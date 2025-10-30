import Image from 'next/image'
import React from 'react'

function OurChef() {
    return (
        <div className='bg-white'>
            <div className='wrapper'>
                <div className='w-full h-auto bg-tertiary rounded-xl'>
                    <div className='md:grid md:grid-cols-5 gap-8 md:items-end w-full'>
                        <div className='col-span-3 p-4 sm:p-10 w-full'>
                            <div>
                                <p className='heading3'>
                                    TASTY AND HEALTHY
                                </p>
                                <h1 className='heading1'>
                                    Our chef
                                </h1>
                                <p className='heading2 mt-8'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nam velit, soluta quisquam qui libero accusantium vitae quae facere illum eligendi ducimus aliquid aspernatur, reprehenderit necessitatibus nesciunt beatae et dignissimos.
                                </p>
                            </div>
                        </div>

                        <div className='col-span-2 flex justify-center'>
                            <Image
                                src="/about/ourChef.png"
                                alt='chef image'
                                width={800}
                                height={500}
                                className='object-contain'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurChef