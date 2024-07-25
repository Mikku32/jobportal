"use client"

import { useRouter } from 'next/navigation'
import React from 'react'


const LoginPage = () => {

    const router = useRouter()
    return (
        <div className='flex flex-col justify-center items-center bg-gray-700 h-screen'>
            <div className='flex flex-col gap-3 p-4 border-1 rounded-md mt-4 w-[40%] shadow-sm shadow-slate-50 bg-gray-900'>
                <form
                    className="flex flex-col gap-2 p-4"
                    id="login"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const email = e.target.email.value;
                        const password = e.target.password.value;


                        try {

                            const res = await fetch(`https://job.kunjappu.online/api/login/`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ email, password }),
                            })
                            if (res.ok) {
                                router.push("/")
                            }
                            else {
                                alert('Invalid')
                            }

                        } catch (error) {
                            console.log(error);
                        }

                    }}
                >
                    <label className=" text-sm font-medium text-gray-500 font-serif">Username</label>
                    <input
                        className='w-full p-3 border-1 rounded-lg mb-6 font-mono'
                        aria-label='Username'
                        placeholder='Your Username'
                        id="email"
                        name="email"
                        defaultValue=""
                    />

                    <label className="  text-sm  text-gray-500 font-medium font-serif">Password</label>
                    <input
                        className='w-full p-3 border-1 rounded-lg  mb-6 font-mono'
                        aria-label='Password'
                        placeholder="your password....."
                        id="password"
                        name="password"
                        defaultValue=""

                    />


                </form>

                <div className='flex justify-around w-[50%] px-[40px] bg-slate-300 rounded-md  mt-3 items-center'>


                    <button form="login" type="submit" >
                        Login
                    </button>

                </div>
            </div>
        </div>
    )
}

export default LoginPage
