"use client"

import Image from 'next/image'

import { IoIosStar } from 'react-icons/io'
import { IoBookmarkOutline, IoMenu } from 'react-icons/io5'
import { BsThreeDots } from 'react-icons/bs'
import { ImPower } from 'react-icons/im'
import { useState } from 'react'
const JobDetail = ({ job }: { job: Job }) => {

    const [isExpanded, setisExpanded] = useState(false)

    const toggleChange = () => {
        setisExpanded(!isExpanded)
    }
    const truncateText = (text: string, limit: number) => {
        if (text.length <= limit) return text;
        return text.substring(0, limit);
    };
    return (
        <div className='w-[65%] p-4 px-8 border-2 rounded-md ml-3 overflow-y-scroll'>
            <div className='flex flex-row justify-between '>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-11 h-11 contain-content items-center justify-center rounded-full border-2 '>
                        <Image height={50} width={50} src={job.company.logo} alt='' />

                    </div>
                    <div className=' text-xl font-semibold flex gap-1 items-center'>
                        {job.company.name} 4.1
                        <IoIosStar className='mb-1' size={12} />
                    </div>


                </div>



            </div>

            <div className="mt-2 py-3 ">
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='font-bold text-3xl'>{job.title}</h1>
                    <div className='flex gap-2 items-center'>
                        <div className='rounded-lg bg-slate-100  text-black  p-2 ' ><BsThreeDots /></div>
                        <div className='rounded-lg bg-slate-100  text-black  p-2 '><IoBookmarkOutline /></div>
                        <div className='rounded-lg bg-green-400 font-semibold   p-2 text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-black '>
                            <ImPower size={15} color='yellow' />
                            Easy Apply
                        </div>
                    </div>
                </div>
                <h1 className=' font-mono mt-2'>{job.location}</h1>

                <div className='flex flex-col border-b-2 mt-12'>
                    <h1 className='font-semibold text-xl'>{job.title}</h1>
                    <h1 className=' py-3 mb-9 font-sans'> {isExpanded ? job.description : truncateText(job.description, 200)}
                        <span> {job.description.length > 200 && (
                            <button
                                className='text-green-600 font-semibold underline'
                                onClick={toggleChange}
                            >
                                {isExpanded ? 'See less ' : '...See more '}
                            </button>
                        )}</span>
                    </h1>
                </div>
                <div className='flex flex-col  mt-3 py-3 border-b-2'>
                    <h1 className='font-semibold text-lg mb-5'>Company Overview</h1>

                    <div className='flex w-full'>
                        <div className='flex w-1/2 gap-24'><h1 className='font-semibold'>Size</h1><h1>1 - 50 Employees</h1></div>
                        <div className='flex w-1/2 gap-24'><h1 className='font-semibold'>Founded</h1><h1>---</h1></div>
                    </div>
                    <div className='flex w-full'>
                        <div className='flex w-1/2 gap-24'><h1 className='font-semibold'>Type</h1><h1>onsite</h1></div>
                        <div className='flex w-1/2 gap-24'><h1 className='font-semibold'>Revenue</h1><h1>---</h1></div>

                    </div>
                    <div className='flex w-full'>
                        <div className='flex w-1/2 gap-24'><h1 className='font-semibold'>Sector</h1><h1>---</h1></div>
                        <div className='flex w-1/2 gap-24'><h1 className='font-semibold'>Industry</h1><h1>---</h1></div>
                    </div>


                </div>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis laborum iusto corporis, quod eos maxime nihil alias ab voluptatibus dolores explicabo nisi tempore nesciunt inventore ratione quam dignissimos asperiores reprehenderit.</h1>
            </div>

        </div>
    )
}

export default JobDetail
