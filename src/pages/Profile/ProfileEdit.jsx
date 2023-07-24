import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

const ProfileEdit = () => {

    const location = useLocation()
    const profile = location?.state

    const {
        firstName,
        lastName,
        email,
        university,
        country,
        address,
        phone,
        _id
    } = profile

    console.log(profile);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        const {
            firstName,
            lastName,
            email,
            university,
            address
        } = data

        const updateData = {
            firstName,
            lastName,
            email,
            university,
            address
        }

        fetch('https://find-college-server.vercel.app/update-form', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify('updateData')
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }


    return (
        <section className="max-w-screen-lg lg:mx-auto mx-5 my-12">

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
                                        defaultValue={firstName}
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
                                        defaultValue={lastName}
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
                                        className="block w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 px-5"
                                        defaultValue={email}
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
                                        disabled
                                        className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue focus:ring-2 focus:ring-inset focus:ring-blue sm:max-w-xs sm:text-sm sm:leading-6 px-5"
                                        {...register("country", { required: true })}
                                        defaultValue={country}
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
                                    University
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="university"
                                        name="university"
                                        autoComplete="university"
                                        className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue focus:ring-2 focus:ring-inset focus:ring-blue sm:max-w-xs sm:text-sm sm:leading-6 px-5"
                                        {...register("university", { required: true })}
                                        defaultValue={university}
                                    >
                                        <option>Harvard University</option>
                                        <option>Stanford university</option>
                                        <option>Massachusetts Institute of Technology</option>
                                        <option>University of Cambridge</option>
                                        <option>California Institute of Technology</option>
                                        <option>University of Oxford</option>
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
                                        defaultValue={address}
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
                                        defaultValue={phone}
                                        disabled
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 bg-blue text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ProfileEdit;