import React from 'react';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';


const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
    return (
        <div className='p-5 border-gray-200 border-[2px] rounded space-y-3'>
            <img src={logo} alt=""  className='h-1/6'/>
            <h3 className='text-2xl text-black font-medium'>{job_title}</h3>
            <p className='text-xl'>{company_name}</p>
            <div className='flex gap-5'> <button className='border-blue-600 border-[2px] px-4 py-2 text-blue-600 rounded-md'>{remote_or_onsite}</button><button className='border-blue-600 border-[2px] px-4 py-2 text-blue-600 rounded-md'>{job_type}</button></div>
           <div className='flex justify-between'><p className='flex items-center text-xl'><CiLocationOn></CiLocationOn> {location}</p> <p className='flex items-center text-xl'><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine> {salary}</p></div>
         <Link to = {`/job-details/${id}`}>
           <button className='px-4 py-2 rounded bg-blue-600  text-white'>View Details</button> </Link>
        </div>
    );
}

export default Job;
