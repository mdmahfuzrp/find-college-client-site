import useCollege from '../../hooks/useCollege';
import CollegeCard from '../../components/CollegeCard';

const College = () => {
    const allcollege = useCollege()

    return (
        <div className="max-w-screen-2xl lg:mx-auto grid lg:grid-cols-3 lg:gap-x-5 gap-y-5 my-5 lg:my-8 mx-5">
            {
                allcollege.map(college => <CollegeCard
                    key={college.college_name}
                    college={college}
                ></CollegeCard>)
            }
        </div>
    );
};

export default College;