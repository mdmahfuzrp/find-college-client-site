import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";

const AdmissionForm = () => {

    const { user } = useAuthContext()

    const location = useLocation()
    const navigate = useNavigate()

    const [getCollege, setGetCollege] = useState([])

    useEffect(() => {
        fetch(`https://find-college-server.vercel.app/submit-college-form?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setGetCollege(data))
    }, [user?.email])

    console.log(getCollege);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        if(getCollege.length > 0) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: `<p href="" class="text-red">You have already seleted one University.</p>`
            })
        }

        const { firstName, lastName, email, department, country, address, phone, image } = data

        const sendData = {
            firstName,
            lastName,
            email: user?.email || email,
            university: location?.state?.college,
            department,
            country,
            address,
            phone
        }

        fetch("https://find-college-server.vercel.app/admission-college", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(sendData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                if (result.insertedId) {

                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully Create Account.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/my-college')
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

        console.log(data);
        console.log(sendData);
    };


    return (
        <section className="my-16 mx-5 max-w-screen-lg lg:mx-auto">

            <h2 className="text-3xl">Application for "{location?.state?.college}"</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="" >
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* First Name */}
                            <div className="sm:col-span-3">
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        autoComplete="given-name"
                                        className="block w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 px-5"
                                        {...register("firstName", { required: true })}
                                    />
                                </div>
                            </div>

                            {/* Last Name */}
                            <div className="sm:col-span-3">
                                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        autoComplete="family-name"
                                        className="block w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 px-5"
                                        {...register("lastName", { required: true })}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={user?.email}
                                        disabled
                                        className="block w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 px-5"
                                    />
                                </div>
                            </div>

                            {/* Country Name */}
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue focus:ring-2 focus:ring-inset focus:ring-blue sm:max-w-xs sm:text-sm sm:leading-6 px-5"
                                        {...register("country", { required: true })}
                                    >
                                        <option>United States</option>
                                        <option>Bangladesh</option>
                                        <option>India</option>
                                    </select>
                                </div>
                            </div>

                            {/* Department Name */}
                            <div className="sm:col-span-3">
                                <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                                    Department
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="department"
                                        name="department"
                                        autoComplete="department-name"
                                        className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue focus:ring-2 focus:ring-inset focus:ring-blue sm:max-w-xs sm:text-sm sm:leading-6 px-5"
                                        {...register("department", { required: true })}
                                    >
                                        <option>CSE</option>
                                        <option>EEE</option>
                                        <option>BBA</option>
                                        <option>Political Science</option>
                                    </select>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="col-span-full">
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        autoComplete="street-address"
                                        className="block w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 px-5"
                                        {...register("address", { required: true })}
                                    />
                                </div>
                            </div>


                            {/* Phone Number */}
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        autoComplete="address-level2"
                                        className="block w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 px-5"
                                        {...register("phone", { required: true })}
                                    />
                                </div>
                            </div>

                            {/* Image */}
                            {/* <div className="sm:col-span-2">
                                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                    Photo / Image
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        className="block w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 px-5"
                                        {...register("image", { required: true })}
                                    />
                                </div>
                            </div> */}

                            {/* Date */}
                            {/* <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    Birth of Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 px-5"
                                    />
                                    <Datepicker
                                        value={value}
                                        onChange={handleValueChange}

                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link>
                        <button type="submit" className="text-sm font-semibold leading-6 text-gray-900">
                            Reset
                        </button>
                    </Link>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 bg-blue text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AdmissionForm;