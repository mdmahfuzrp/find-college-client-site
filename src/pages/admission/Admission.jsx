import { Link } from "react-router-dom";
import useCollege from "../../hooks/useCollege";

const Admission = () => {

    const allcollege = useCollege()

    return (
        <section className="my-16 max-w-screen-lg mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th>#</th>
                            <th>Admission Date</th>
                            <th>College name</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allcollege.map((college, idx) => <tr
                                key={idx}
                            >
                                <th>{idx + 1}</th>
                                <td>{college.admission_date}</td>
                                <td>{college.college_name}</td>
                                <td className="text-center">
                                    <Link to={`/admission-form/${college._id}`} state={{college: college.college_name}}>
                                        <button className="bg-blue rounded-none px-2 py-1 text-white rounded">Admission</button>
                                    </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </section> 
    );
};

export default Admission;