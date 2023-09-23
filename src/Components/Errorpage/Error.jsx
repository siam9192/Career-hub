import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="  min-h-[100vh] my-52 text-black">
            <h1 className="text-4xl text-center">!!Opps {error.status} {error.statusText}</h1>
         <div>
       <div className="text-xl text-center my-20">
     <Link to='/'>
     <button className="text-green-500">Go to Home</button>
     </Link>
       </div>
         </div>
        </div>
    );
}

export default Error;
