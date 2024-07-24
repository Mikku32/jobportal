import React from 'react'
import NavBar from './component/nav'
import Search from './component/search'
import JobCard from './component/jobcard'
import JobDetail from './component/jobdetail'

const HomePage = async () => {
  const jobs: Job[] = await fetch("https://job.kunjappu.online/api/portal-jobs").then((res) => res.json()
  );
  return (
    <div className='flex flex-col min-h-screen  overflow-hidden h-[100vh] w-[100vw]'>

      <NavBar />
      <Search job={jobs[1]} />
      <div className='flex flex-row mt-5 justify-between px-2 h-full w-full pb-2 overflow-hidden'>
        <div className=' w-[35%] h-screen overflow-y-scroll px-3 pb-[110px] '>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <JobDetail job={jobs[1]} />
      </div>
    </div>
  )
}

export default HomePage
