import React from 'react'

const LoginPage = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-gray-700 h-screen'>
            <div className='flex flex-col gap-3 p-4 border-1 rounded-md mt-4 w-[40%] shadow-sm shadow-slate-50 bg-gray-900'>
                <form
                    className="flex flex-col gap-2 p-4"
                    id="login"
                //   onSubmit={async (e) => {
                //     e.preventDefault();
                //     const title = e.target.title.value;
                //     const content = e.target.content.value;
                //     const author = e.target.author.value;

                //     try {
                //       setIsloading(true)
                //       await fetch(`http://localhost:3001/Blog/${params.id}`, {
                //         method: "PATCH",
                //         headers: {
                //           "Content-Type": "application/json",
                //         },
                //         body: JSON.stringify({ title, content, author }),
                //       })
                //       setIsloading(false)
                //       await fetch("http://localhost:3001/Blog")
                //       router.push("/")

                //     } catch (error) {
                //       console.log(error);
                //     }

                //   }}
                >
                    <label className=" text-sm font-medium text-gray-500 font-serif">Username</label>
                    <input
                        className='w-full p-3 border-1 rounded-lg mb-6 font-mono'
                        aria-label='Username'
                        placeholder='Your Username'
                        id="title"
                        name="title"
                        defaultValue=""
                    />

                    <label className="  text-sm  text-gray-500 font-medium font-serif">Password</label>
                    <input
                        className='w-full p-3 border-1 rounded-lg  mb-6 font-mono'
                        aria-label='Password'
                        placeholder="your password....."
                        id="content"
                        name="content"
                        defaultValue=""
                    />


                </form>

                <div className='flex justify-around w-full px-[40px] mt-3 items-center'>


                    <button form="login" type="submit" className='w-[40px]   bg-white'>
                        Login
                    </button></div>
            </div>
        </div>
    )
}

export default LoginPage
