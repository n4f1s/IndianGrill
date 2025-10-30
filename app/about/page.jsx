import AboutHero from '@/sections/About/AboutHero'
import AboutStory from '@/sections/About/AboutStory'
import OurChef from '@/sections/About/OurChef'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <>
            <AboutHero />
            <AboutStory />
            <OurChef />
        </>
    )
}

export default page