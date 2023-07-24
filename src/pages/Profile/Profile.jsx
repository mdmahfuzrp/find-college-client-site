import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {

    const { user } = useAuthContext()
    const [submitCollege, setSubmitCollege] = useState([])

    useEffect(() => {
        fetch(`https://find-college-server.vercel.app/submit-college-form?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSubmitCollege(data))
    }, [user?.email])


    return (
        <section className="max-w-screen-lg lg:mx-auto lg:my-32 mx-5">
            <div className="flex justify-between items-center">
                <h3 className="text-3xl mt-8 lg:mt-0">Profile Information</h3>

            </div>
            <hr />

            {
                submitCollege && submitCollege.map((profile, idx) => <div
                    key={idx}
                    className="lg:mx-12 grid lg:grid-cols-2 lg:gap-x-24 lg:mt-12 font-bold uppercase"
                >
                    <h3 className="my-5">First Name: <span className="font-normal ml-5">{profile.firstName}</span></h3>
                    <h3 className="my-5">Last Name: <span className="font-normal ml-5">{profile.lastName}</span></h3>
                    <h3 className="my-5">Email: <span className="font-normal ml-5">{profile.email}</span></h3>
                    <h3 className="my-5">University: <span className="font-normal ml-5">{profile.university}</span></h3>
                    <h3 className="my-5">Department: <span className="font-normal ml-5">{profile.department}</span></h3>
                    <h3 className="my-5">Country: <span className="font-normal ml-5">{profile.country}</span></h3>
                    <h3 className="my-5">Address: <span className="font-normal ml-5">{profile.address}</span></h3>
                    <h3 className="my-5">Phone: <span className="font-normal ml-5">{profile.phone}</span></h3>

                    <Link
                        to="/profile/edit"
                        state={profile}
                        className="flex items-center gap-2 text-center mt-12 ml-auto col-span-2">
                        <button >Edit</button>
                        <FaEdit></FaEdit>
                    </Link>
                </div>)
            }

        </section>
    );
};

export default Profile;