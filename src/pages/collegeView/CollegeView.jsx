import { useLoaderData } from "react-router-dom";

const CollegeView = () => {

    const college = useLoaderData()
    const { college_name, college_image, admission_date, events, research_history, sports, admission_proccess } = college

    return (
        <section className="max-w-screen-2xl lg:mx-auto lg:my-12">
            <img src={college_image} alt={college_name} className="lg:h-[500px] w-full" />
            <div className="mx-5 lg:mx-0">

                <h1 className="text-2xl lg:text-3xl font-semibold uppercase text-red my-5">{college_name}</h1>

                {/* Admisiion Proccess */}
                <div className="my-12">
                    <h3 className="text-xl font-semibold uppercase text-blue">Admisiion Proccess</h3>
                    <p className="italic text-sm lg:text-base ">(Upcomming Admintion date: <span className="text-red font-bold">{admission_date}</span>)</p><hr className="my-5" />
                    {
                        admission_proccess.map((proccess, idx) => <div
                            key={idx}
                            className=""
                        >
                            <p className="my-4 text-sm lg:text-base"><span className="font-bold text-blue uppercase">{idx + 1}. {proccess.element}: </span> {proccess.details}</p>
                        </div>)

                    }
                    <p className="italic bg-red bg-opacity-40 p-5 text-sm lg:text-base">Remember that the admission process for highly selective universities like {college_name} is highly competitive, and meeting the minimum requirements does not guarantee admission. Applicants are encouraged to showcase their unique qualities, achievements, and passions through their application materials. <br /> For the most accurate and up-to-date information on {college_name} admission process, visit the official Harvard admissions website.</p>
                </div>

                {/* Research History */}
                <div className="my-12">
                    <h3 className="text-xl font-semibold uppercase text-blue">Research History</h3>  <hr className="my-5" />
                    <div className="grid lg:grid-cols-3 gap-5">
                        {
                            research_history.map((research, idx) => <div
                                key={idx}
                                className="cursor-pointer"
                            >
                                <div className="overflow-hidden">
                                    <img src={research.image} alt={research.institute} className="hover:scale-150 duration-1000" />
                                </div>
                                <div className="py-5">
                                    <h4 className="text-xl font-semibold pb-2 uppercase text-red">{research.institute}</h4>
                                    <p>{research.details}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

                {/* Sports */}
                <div className="my-32">
                    <h3 className="text-xl font-semibold text-blue uppercase">Sports</h3> <hr className="my-5" />
                    <div className="grid lg:grid-cols-4 gap-5">
                        {
                            sports.map((sport, idx) => <div
                                key={idx}
                                className="relative group overflow-hidden cursor-pointer text-white"
                            >
                                <img src={sport.image} alt={sport.name} className="h-[210px] w-full duration-1000" />
                                <div className="absolute inset-0 bg-red bg-opacity-0 group-hover:bg-opacity-70 duration-300 flex justify-center items-center">
                                    <div className="hidden group-hover:block p-3">
                                        <h3 className="text-5xl">{sport.name}</h3>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

                {/* Event */}
                <div className="my-32">
                    <h3 className="text-xl font-semibold text-blue uppercase">Events</h3>  <hr className="my-5" />
                    {
                        events.map((event, idx) => <div
                            key={idx}
                            className="relative group overflow-hidden grid lg:grid-cols-4 gap-y-10 mb-5"
                        >
                            <div><h2 className="text-5xl font-extralight text-red text-center hidden lg:block"> {idx + 1}</h2></div>
                            <div>
                                <h2 className="text-5xl font-extralight text-red">{event.date}</h2>
                                <h4 className="text-xl lg:text-2xl mt-3 font-semibold">{event.event}</h4>
                            </div>
                            <div className="hidden lg:block"></div>
                            <img src={event.image} alt={event.name} className=" w-full duration-1000" />

                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CollegeView;