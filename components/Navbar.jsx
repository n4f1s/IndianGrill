import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <header className="relative z-50">
            <nav className="fixed top-0 bg-white/80 backdrop-blur shadow scroll-smooth w-full">
                <div className="sm:px-16 px-4 max-w-[1490px] w-full mx-auto">
                    <div className="flex items-center justify-between h-[80px]">
                        {/* Logo */}
                        <div className='flex items-center'>
                            <img
                                src='logo.svg'
                                alt='Logo'
                                className='size-10 object-contain'
                            />
                            <a href="#home" className="text-xl font-bold ml-4">
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