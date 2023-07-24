import Lottie from "lottie-react";
import Error404 from './Error404.json'
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="grid grid-cols-5 h-[100vh]">
                <div>
                    <Link to="/">
                        <button className="bg-blue py-1 lg:py-3 px-3 lg:px-8 lg:text-xl text-white m-12">Home</button>
                    </Link>
                </div>
                <Lottie animationData={Error404} loop={true} className="col-span-3"></Lottie>
            </div>
        </>

    );
};

export default Error;