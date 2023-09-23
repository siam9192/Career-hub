import { useState } from "react";
import Job from "./job";

const Jobs = () => {
    const [jobs,setJobs] = useState([])
    useState(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data))
    },[])
    console.log(jobs)
    return (
        <div className="max-w-7xl mx-auto py-10 lg:px-0 px-2">
            <div className="text-center space-y-3">
                <h1 className="text-black text-4xl font-medium">Featured Jobs</h1>
                <p className="text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 py-10">
{
jobs.map(job => <Job  job = {job}></Job>)
}
            </div>
            <div className="text-center">
            <button className='px-4 py-2 rounded bg-blue-600  text-white'>Show All Jobs</button> 
            </div>
        </div>
    );
}

export default Jobs;
