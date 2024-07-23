import Image from 'next/image'
import React from 'react'


import logo from "@/public/Glassdoor.png"
import { IoIosStar } from 'react-icons/io'
import { IoBookmarkOutline, IoMenu } from 'react-icons/io5'
import { BsThreeDots } from 'react-icons/bs'
import { ImPower } from 'react-icons/im'
const JobDetail = ({ job }: { job: Job }) => {
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

            <div className="mt-2 py-2">
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='font-bold text-3xl'>{job.title}</h1>
                    <div className='flex gap-2 items-center'>
                        <div className='rounded-lg bg-slate-100  text-black  p-2 ' ><BsThreeDots /></div>
                        <div className='rounded-lg bg-slate-100  text-black  p-2 '><IoBookmarkOutline /></div>
                        <div className='rounded-lg bg-green-400 font-semibold   p-2 text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-black '>
                            <ImPower size={15} />
                            Easy Apply
                        </div>
                    </div>
                </div>
                <h1 className=' font-mono mt-2'>{job.location}</h1>

                <div className='flex flex-col mt-12'>
                    <h1 className='font-semibold text-xl'>{job.title}</h1>
                    <h1 className=' py-3 mb-9 font-sans'>{job.description}</h1>
                    <hr />
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, omnis ad porro aliquam voluptatum repellat amet animi molestiae ipsum aliquid hic dolores neque iste laborum at, repudiandae soluta sint?</h1>

                </div>

            </div>
        </div>
    )
}

export default JobDetail
