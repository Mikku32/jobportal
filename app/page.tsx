import React from 'react'
import NavBar from './component/nav'
import Search from './component/search'
import JobCard from './component/jobcard'
import JobDetail from './component/jobdetail'

const HomePage = async () => {
  const jobs: Job[] = await fetch("https://job.kunjappu.online/api/portal-jobs").then((res) => res.json()
  );
  return (
    <div className='flex flex-col fixed '>

      <NavBar />
      <Search job={jobs[1]} />
      <div className='flex flex-row mt-5 justify-between px-2 h-screen'>
        <div className=' w-[35%] h-full overflow-y-scroll px-3 '>
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
