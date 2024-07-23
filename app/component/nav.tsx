import React from 'react'
import glassdoor from '@/public/Glassdoor.png'
import Image from 'next/image'
import { MdNotifications, MdSearch } from 'react-icons/md'
import { FaCircleUser, FaRegCircleUser } from 'react-icons/fa6'
import { IoMdNotificationsOutline } from 'react-icons/io'

const NavBar = () => {
    return (
        <div className='flex flex-row w-full justify-between items-center h-16 border border-b-1 px-7 py-4'>
            <Image src={glassdoor} alt='' className='h-20 w-28' />
            <div className='flex flex-row gap-4'>
                <div className='py-3 font-semibold border-b-4 border-b-white hover:font-bold hover:border-green-500'>Community</div>
                <div className='py-3 font-semibold border-b-4 border-b-white hover:font-bold hover:border-green-500'>Jobs</div>
                <div className='py-3 font-semibold border-b-4 border-b-white hover:font-bold hover:border-green-500'>Companies</div>
                <div className='py-3 font-semibold border-b-4 border-b-white hover:font-bold hover:border-green-500'>Salary</div>

            </div>

            <div className='flex gap-4 items-center'>
                <div className='flex flex-row items-center font-semibold gap-2 p-1 rounded-xl  text-sm hover:bg-slate-100'><MdSearch /> Search</div>
                <div className='p-2 rounded-xl font-semibold text-lg hover:bg-slate-100'><IoMdNotificationsOutline /></div>
                <div className='p-2 rounded-xl  text-lg font-semibold  hover:bg-slate-100'><FaRegCircleUser size={15} /></div>
            </div>
        </div>
    )
}

export default NavBar
