import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MyCollege = () => {

    const { user } = useAuthContext()


    // console.log(user, 'my');
    // const allcollege = useCollege()

    const [submitCollege, setSubmitCollege] = useState([])
    const [rating, setRating] = useState(1);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const review = {
            name: user?.displayName,
            details: data.feedback,
            rating,
            university: data.university
        }

        console.log(data);

        fetch('https://find-college-server.vercel.app/review', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset()
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Added Your Feedback, Thank You!',
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `<p href="" class="text-red">${error.code}</p>`
                })
            })
    }

    useEffect(() => {
        fetch(`https://find-college-server.vercel.app/submit-college-form?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSubmitCollege(data))
    }, [user?.email])




    return (
        <section className="my-16 max-w-screen-lg mx-5 lg:mx-auto">
            <div className="overflow-x-auto">
                {/* <table className="table">
                    <thead>
                        <tr className="uppercase">
                            <th>#</th>
                            <th>College name</th>
                            <th>Feedback</th>
                            <th>Reveiw</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            submitCollege.map((college, idx) => <tr
                                key={idx}
                            >
                                <th>{idx + 1}</th>
                                <td className="uppercase">{college.university}</td>
                                <textarea className="my-2 border border-blue" cols={50} rows={5}></textarea>
                                <td className="uppercase">{college.university}</td>
                                <td className="text-center">
                                    <Link to={`/admission-form/${college._id}`}>
                                        <button className="bg-blue px-2 py-1 rounded-none text-white">Submit</button>
                                    </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table> */}

                {
                    submitCollege.map((college, idx) => <form
                        key={idx}
                        className="mb-32"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input type="text"
                            {...register("university")}
                            value={college.university}
                            className="hidden"
                        />
                        <p className="text-2xl uppercase font-semibold">{idx + 1}. <span>{college.university}</span></p> <hr className="mb-5" />
                        <span>Feedback</span>
                        <textarea
                            className="my-2 border border-blue w-full p-5"
                            rows={5}
                            placeholder="Write Your feedback"
                            {...register("feedback", { required: true })}
                        ></textarea>

                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                            className="mb-5"
                            isRequired
                        />
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 bg-blue text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit
                            </button>
                        </div>

                    </form>)
                }

                {
                    submitCollege.length === 0 ?
                        <h3 className="text-center text-5xl my-32">You have not Selected Any College</h3> : ''
                }
            </div>
        </section>
    );
};

export default MyCollege;