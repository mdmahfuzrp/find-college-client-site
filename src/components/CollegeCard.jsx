import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {

    const { _id, college_name, college_image, admission_date, events, research_history, sports } = college

    return (
        <div className="h-full">
            <div className="relative group overflow-hidden cursor-pointer text-white ">
                <img src={college_image} alt={college_name} className="lg:h-[260px] w-full" />
                <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-bl from-red/90 to-blue/90 group-hover:h-full transition-height duration-700 flex justify-center items-center">
                    <div className="hidden group-hover:block p-3">
                        {/* <p className="font-bold uppercase">Admission Date: <span className="normal-case font-normal">{admission_date}</span></p> */}
                        {/* <p className="font-bold uppercase">Events: <span className="normal-case font-normal">{events.length}</span></p> */}
                        {/* <p className="font-bold uppercase">Research History: <span className="normal-case font-normal">{research_history.length}</span></p> */}
                        <p className="font-bold uppercase lg:mx-32">Sports:  {sports.map(sport => <span key={sport.name} className="font-normal normal-case bg-[#149AC3] mx-[1px] px-1">{sport.name} </span>)}</p>
                    </div>
                </div>
            </div>

            <div className="p-5 relative bg-gradient-to-bl from-red/40 to-blue/40 text-">
                <h2 className="text-2xl font-semibold uppercase">{college_name} </h2>
                <div className="mt-5">
                    <p className="font-bold uppercase">Admission Date: <span className="normal-case font-normal">{admission_date}</span></p>
                    <p className="font-bold uppercase">Events: <span className="normal-case font-normal">{events.length}</span></p>
                    <p className="font-bold uppercase">Research History: <span className="normal-case font-normal">{research_history.length}</span></p>
                    {/* <p className="font-bold uppercase">Sports: {sports.map(sport => <span key={sport.name} className="text-xs font-normal normal-case bg-blue text-white mx-[1px] px-1">{sport.name} </span>)}</p> */}
                </div>
                <Link to={`/colleges/${_id}`}>
                    <button className="t font-medium absolute bottom-3 right-5">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default CollegeCard;