import React, { useEffect } from 'react';
import Swal from 'sweetalert2'
import { json, useLoaderData, useParams } from 'react-router-dom';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { CiLocationOn } from 'react-icons/ci';
import {BsTelephone}  from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {AiOutlineCalendar} from 'react-icons/ai'
import { getApplication,saveApplication } from "../Saveapplication/SaveApplication";
const JobDetails = () => {
    const jobs = useLoaderData();
    const jobId = useParams()
    const findJob = jobs.find(job => job.id == jobId.id);

    console.log(findJob)
    const {id,logo,job_title,company_name,remote_or_onsite,job_type,location,salary,contact_information,educational_requirements, experiences,job_description,job_responsibility,} = findJob;
useEffect(()=>{
window.scroll(0,0);
},[])

const handleSavedApplication = (id)=>{
const storageApplication = getApplication();
const duplicate = storageApplication.find(application => application === id);
if(!duplicate){
    Swal.fire(
        'Good job!',
        'Applied successful!',
        'success'
      )
    storageApplication.push(id);
saveApplication(JSON.stringify(storageApplication));
}
else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Already applied!',
      })
}

}


    return (
     <section className='max-w-7xl mx-auto lg:px-0 px-2 min-h-[80h]'>
        <h1 className="text-center text-black text-4xl ">Job Details</h1>
    <div className='grid md:grid-cols-4 grid-cols-1 gap-5  py-10'>
<div className='md:col-span-3'>
<div className='space-y-7'>
    <p><span className=' text-black font-medium'>Job Description:</span> {job_description}</p>
    <p><span className=' text-black font-medium'>Job Responsibility:</span> {job_responsibility}</p>
    <p><span className=' text-black font-medium'>Educational Requirements:</span> <br /> {educational_requirements}</p>
    <p><span className=' text-black font-medium'>Experiences:</span> <br />{experiences}</p>
</div>
</div>
<div className='border-[2px] border-fray-200 bg-gray-300 p-5 rounded'>
    <h1 className=' font-medium py-3 border-b-[2px] border-gray-500 text-xl'>Job Details</h1>

    <div className='py-2 space-y-3'>
      <div className='flex items-center'>
        <RiMoneyDollarCircleLine className='text-2xl pr-1 text-blue-600'></RiMoneyDollarCircleLine>
      <p className=' text-gray-700'><span className=' text-black font-medium'>Salary :</span> {salary}</p>
      </div>
      <div className="flex items-center">
      <AiOutlineCalendar className='text-2xl pr-1 text-blue-600'></AiOutlineCalendar> <p className=' text-gray-700'><span className=' text-black font-medium'>Job Title :</span> {job_title}</p>
      </div>
    </div>
    <div>
        <h1 className=' font-medium py-3 border-b-[2px] border-gray-500 text-xl'>Contact Information</h1>
        <div className="flex items-center my-2">
      <BsTelephone className='text-2xl pr-1 text-blue-600'></BsTelephone> <p className=' text-gray-700'><span className=' text-black font-medium'>Phone :</span> {contact_information.phone}</p>
      
      </div>
      <div className="flex items-center my-2">
      <HiOutlineMail className='text-2xl pr-1 text-blue-600'></HiOutlineMail> <p className=' text-gray-700'><span className=' text-black font-medium'>Email :</span> {contact_information.email}</p>
      
      </div>
      <div className="flex items-center my-2">
      <CiLocationOn className='text-2xl pr-1 text-blue-600'></CiLocationOn> <p className=' text-gray-700'><span className=' text-black font-medium'>Address :</span> {location}</p>
      
      </div>
    </div>
   <div>
   <button className='w-full text-center bg-blue-600 py-3 text-medium text-white rounded-lg' onClick={()=>handleSavedApplication(id)}>Apply Now</button>
   </div>
</div>
    </div>
     </section>
    );
}

export default JobDetails;
