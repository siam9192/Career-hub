
const Banner = () => {
    return (
        <div className="flex md:flex-row flex-col max-w-7xl mx-auto item-center lg:px-0 px-2 z-0">
            <div className="flex-1 py-10 space-y-6 ">
                <h1 className="text-6xl text-black font-semibold">One Step <br /> Closer To Yours <br /><span className="text-blue-600"> Dream Job</span></h1>
           <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
           <button className="px-4 py-3 bg-blue-600 rounded text-white">Get Started</button>
            </div>
            <div className="relative flex-1 z-0">
                <img src="user.png" alt="" className="w-[80%]  top-0 bottom-0 right-2"/>
            </div>
        </div>
    );
}

export default Banner;
