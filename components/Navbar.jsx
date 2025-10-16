import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Navbar = () => {
    return (
        <header className="relative z-50">
            <nav className="fixed top-0 bg-white/80 backdrop-blur shadow scroll-smooth w-full">
                <div className="sm:px-16 px-4 max-w-[1490px] w-full mx-auto">
                    <div className="flex items-center justify-between h-[80px] gap-4">
                        {/* Logo */}
                        <div className='flex items-center'>
                            <Image
                                src='logo.svg'
                                alt='Logo'
                                width={40}
                                height={40}
                                priority
                                fetchPriority="high"
                            />
                            <a href="#home" className="text-sm sm:text-xl font-bold ml-4">
                                Indian Grill Wrap & Go
                            </a>
                        </div>

                        <Button>
                            Order online
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar