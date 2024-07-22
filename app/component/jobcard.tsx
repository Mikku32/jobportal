import React from 'react'
import glassdoor from '@/public/Glassdoor.png'
import Image from 'next/image'

import { IoIosStar } from 'react-icons/io'
import { IoBookmarkOutline } from 'react-icons/io5'

const JobCard = ({ job }: { job: Job }) => {
    return (
        <div className='w-full flex flex-col px-4 py-2 mb-3 border rounded-md'>
            <div className='flex flex-row justify-between '>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-8 h-8 contain-content rounded-full border-2 '>
                        <Image height={50} width={50} src={job.company.logo} alt='' />

                    </div>
                    <div className='font-mono text-sm flex gap-1 items-center'>{job.company.name} 4.1 <IoIosStar className='mb-1' size={12} /></div>


                </div>

                <IoBookmarkOutline size={25} />

            </div>

            <div className="mt-2 py-2">
                <h1 className='font-semibold text-xl'>{job.title}</h1>
                <h1 className='text-sm font-mono'>{job.location}</h1>
                <div className='flex justify-between font-mono text-sm'>
                    <h1>
                        Salary: {job.salary}
                    </h1>
                    <h1>30+d</h1>
                </div>
            </div>

        </div>
    )
}

export default JobCard


