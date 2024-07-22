import React from 'react'
import glassdoor from '@/public/Glassdoor.png'
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className='flex flex-row w-full h-16 border border-b-1 px-7 py-4'>
            <Image src={glassdoor} alt='' className='h-10 w-16' />
        </div>
    )
}

export default NavBar
