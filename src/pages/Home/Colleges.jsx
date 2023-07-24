import CollegeCard from "../../components/CollegeCard";

const Colleges = ({allcollege}) => {

    return (
        <section className="mb-32 mx-5 lg:mx-0">
            <h3 className="text-2xl uppercase font-semibold">Recomanded for you</h3>
            <hr />

            <div className="grid lg:grid-cols-3 lg:gap-x-5 gap-y-5 my-5 lg:my-8">
                {
                    allcollege.slice(0,3).map(college => <CollegeCard
                        key={college.college_name}
                        college={college}
                    ></CollegeCard>)
                }
            </div>
        </section>
    );
};

export default Colleges;