import { NavLink } from "react-router-dom";
import { AiOutlineMenu} from 'react-icons/ai';
import { useState } from "react";
import {RxCross1} from 'react-icons/rx'
const Navbar = () => {
const [toggle,setToggle] = useState(false);


    return (
       <nav className="flex justify-between max-w-7xl mx-auto pt-2 pb-7 lg:px-0 px-2 md:static sticky top-0 bg-white z-10">
<div>
    <h1 className="text-4xl font-medium text-black">CareerHub</h1>
</div>
<ul className={`flex md:static  md:justify-between text-xl md:space-x-5 md:space-y-0 space-y-8 md:text-black md:blog md:flex-row flex-col fixed  top-10 md:bg-inherit bg-black md:shadow-none shadow-lg md:px-0 md:py-0 px-20 py-6 md:h-fit text-white h-full md:duration-0 duration-1000 z-10 ${toggle? 'right-0' : '-right-[200%]'}`}>
<NavLink to = '/' onClick={()=>{
    setToggle(false)
}}  className={({ isActive, isPending }) =>
isActive ? "text-blue-600" : ""
}>Home</NavLink>
<NavLink to = '/applied-job' onClick={()=>{
    setToggle(false)
}} className={({ isActive, isPending }) =>
isActive ? "text-blue-600" : ""
}>Application</NavLink>
<NavLink onClick={()=>{
    setToggle(false)
}} className={({ isActive, isPending }) =>
isActive ? "text-blue-600" : ""
} to= '/blog'>Blog</NavLink>
</ul>
<div>
    <button className="px-3 py-2 md:block hidden text-white  rounded bg-[#7E90FE]">Start Applying</button>
</div>
<div className = {`md:hidden text-black text-3xl `} onClick={()=>{
setToggle(!toggle)

}
}>
    {
        toggle? <RxCross1></RxCross1>:<AiOutlineMenu ></AiOutlineMenu>
    }
    

</div>

</nav>
    );
}

export default Navbar;
