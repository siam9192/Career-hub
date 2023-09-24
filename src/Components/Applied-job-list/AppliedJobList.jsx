import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getApplication, saveApplication } from '../Saveapplication/SaveApplication';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { CiLocationOn } from 'react-icons/ci';
const AppliedJobList = () => {
const [sort,setSort] = useState("All")
    const jobs = useLoaderData();
const getLocalApplication = getApplication();
const applicationList = [];
jobs.forEach(job => {
const application = getLocalApplication.find(item => item == job.id);
if(application){
applicationList.push(job);
}
    
});
 let sortedApplication = [];
if(sort === 'All'){
sortedApplication = applicationList;

}
else if(sort){

sortedApplication = applicationList.filter(item=>item.remote_or_onsite === sort )
}
  return (
        
        <section className='max-w-7xl mx-auto py-24 min-h-[80vh] lg:px-0 px-2'>
<h1 className='text-4xl text-black font-semibold text-center'>
Applied Jobs
</h1>
<div className='space-y-5 py-10'>
    <div className="flex justify-between">
        <h1 className='text-xl text-black'>Total Applied: {applicationList.length}</h1>
<select name="" id="" className='w-52  py-3 border-[2px] bg-gray-200 rounded border-blue-600 text-xl' onChange={(e)=>{
setSort(e.target.value)
    }}>
    <option value="All">All</option>
<option value="Onsite">Onsite</option>
    <option value="Remote">Remote</option>
</select>
    </div>
  {
    sortedApplication.map(application =>{
        return(
            <div className='p-5 md:flex justify-between border-[2px] border-gray-300 items-center lg:space-y-0 '>
                <div className='md:flex gap-5 lg:space-y-0 space-y-2'>
  <div className='p-14 bg-gray-300 flex w-72 rounded-md '><img src={application.logo} alt="" /></div>
    <div className='space-y-5'>
        <h1 className='text-black text-2xl font-medium'>{application.job_title}</h1>
        <p className="text-xl">{application.company_name}</p>
        <div className='flex gap-5'>
        <button className='border-blue-600 border-[2px] px-4 py-2 text-blue-600 rounded-md'>{application.remote_or_onsite}</button><button className='border-blue-600 border-[2px] px-4 py-2 text-blue-600 rounded-md'>{application.job_type}</button>

        </div>
        <div className=' md:flex gap-7'>
            <p className='text-xl flex items-center gap-2'><CiLocationOn></CiLocationOn> {application.location}</p>
            <p className='text-xl flex items-center gap-2'><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine> {application.salary}</p>
        </div>
    </div>
  
</div>
  <div>
<Link to = {`/job-details/${application.id}`}>
<button className='px-8 py-3 bg-blue-500 rounded text-white lg:my-0 my-2'>Show Details</button>
</Link>
  </div>
  </div>
        )
    })
  }
</div>
        </section>
    );
}

export default AppliedJobList;
