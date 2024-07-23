import React from 'react'
import { ImPower } from 'react-icons/im'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'
import { MdSearch } from 'react-icons/md'

const Search = ({ job }: { job: Job }) => {
    return (
        <div className='flex flex-col border border-b-1 items-center  w-full h-[180px] px-7 py-4'>
            <div className='flex gap-1 items-center w-[50%]'>
                <div className='bg-slate-100 rounded-l-3xl py-2 px-4  gap-2 flex items-center w-2/3 font-sans '>
                    <MdSearch size={15} />

                    <input
                        className='w-full bg-slate-100 focus:outline-none'
                        defaultValue={job.title}
                    />
                </div>
                <div className="bg-slate-100 rounded-r-3xl py-2 px-4  gap-2 flex items-center w-1/3 font-sans ">
                    <IoLocationOutline size={15} />
                    <input
                        className='w-full bg-slate-100 focus:outline-none'
                        defaultValue={job.location}
                    />
                </div>
            </div>
            <div className="flex flex-row font-semibold text-sm items-center text-green-600 mt-7 gap-2">
                <ImPower size={15} />
                Upload your CV-Let Employers find you
            </div>
            <div className='flex flex-row relative w-full justify-center items-center '>

                <div className='flex flex-row gap-4 mt-5 '>
                    <div className='py-3 font-semibold hover:font-bold border-b-4 border-b-white hover:border-green-500 flex'> For you</div>
                    <div className='py-3 font-semibold hover:font-bold border-b-4 border-b-white hover:border-green-500'>Search</div>
                    <div className='py-3 font-semibold hover:font-bold border-b-4 border-b-white hover:border-green-500'>Your activity</div>

                </div>
                <div className='absolute right-0 bottom-2 font-semibold p-3 flex items-center gap-2 mr-3 rounded-full hover:bg-slate-100'>
                    <IoMdNotificationsOutline />
                    Create job alert
                </div>
            </div>
        </div>
    )
}

export default Search
