import React, { useEffect, useState } from 'react';
import Category from './Category';

const CategoryList = () => {
    const [categories,setCategory] = useState([])
    useEffect(()=>{
 fetch('categories.json')
 .then(res=> res.json())
 .then(cate =>  setCategory(cate) )
    },[])
    return (
        
        <div className='max-w-7xl mx-auto py-10 lg:px-0 px-2'>
<div className='py-7 text-center space-y-3'>
    <h1 className="text-center text-4xl font-semibold  text-black">
Job Category List
</h1>
<p className='text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
</div>
           <div className=' grid lg:grid-cols-4  grid-cols-2  gap-5'>
           {
                categories.map(category=> <Category key={category.id} category = {category} ></Category>)
            }
           </div>
        </div>
    );
}

export default CategoryList;
