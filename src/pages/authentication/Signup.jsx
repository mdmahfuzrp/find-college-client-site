import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignin from "../../components/socialLogin/SocialSignin";
import Swal from "sweetalert2";
import useAuthContext from "../../hooks/useAuthContext";

const Signup = () => {

    const { createAccount, updateName } = useAuthContext()

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        const { name, email, password } = data
        createAccount(email, password)
            .then(() => {

                updateName(name)
                    .then(() => {
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully Create Account.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `<p href="" class="text-red">${error.code}</p>`
                })
            })
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-[90vh] relative">
            <Link to="/">
                <button className="absolute top-5 left-5 bg-blue px-5 py-2 text-white">Home</button>
            </Link>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                {...register("name", { required: true })}

                                className="block w-full border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                            />
                            {errors.name?.type === 'required' && <span className='text-red text-sm'>Name is required</span>}
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}

                                className="block w-full border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                            />
                            {errors.email?.type === 'required' && <span className='text-red text-sm'>Email is required</span>}
                            {errors.email?.type === 'pattern' && <span className='text-red text-sm '>Email address is not validated</span>}
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                {...register("password", { required: true, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/ })}
                                className="rounded-none block w-full border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                            />
                            {errors.password?.type === 'required' && <span className="text-red text-xs">Password is required</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red text-xs '>Password will be 8 character, 1 number, 1 Capital and 1 special character </span>}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 bg-blue text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <SocialSignin></SocialSignin>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already you are a member?{' '}
                    <Link to="/auth/signin" className="font-semibold leading-6 text-indigo-600 hover:text-blue">
                        Please Signin
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;