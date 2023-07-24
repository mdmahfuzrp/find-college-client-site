import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignin from "../../components/socialLogin/SocialSignin";
import Swal from "sweetalert2";
import './Authentication.css'
import useAuthContext from "../../hooks/useAuthContext";
import { useRef, useState } from "react";

const Signin = () => {

    const { Signin, user, forgetPassword } = useAuthContext()

    const [Email, setEmail] = useState('')
    // const emailRef = useRef()

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const handlerEmail = event => {

        const email = event.target.value
        setEmail(email)
    }


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        const { email, password } = data
        console.log(data);
        Signin(email, password)
            .then(() => {
                reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Signin.',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `<p href="" class="text-red font-bold">${error.code}</p>`
                })
            })
    };

    const handlerForotPassword = () => {


        if (!Email) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Assign your email address',
            })
        }

        forgetPassword(Email)
            .then(() => {
                return Swal.fire({
                    icon: 'success',
                    // title: 'Oops...',
                    text: 'Please check your email address',
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `<p href="" class="text-red font-bold">${error.code}</p>`
                })
            })
    }
    // console.log(email);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-[90vh] relative">
            <Link to="/">
                <button className="absolute top-5 left-5 bg-blue px-5 py-2 text-white">Home</button>
            </Link>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
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
                                {...register("email", { required: true })}
                                onBlur={handlerEmail}
                                // ref={emailRef}
                                className="block w-full border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                            />
                            {errors.email?.type === 'required' && <span className='text-red text-sm'>Email is required</span>}
                            {errors.email?.type === 'pattern' && <span className='text-red text-sm '>Email address is not validated</span>}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <Link onClick={handlerForotPassword} className="font-semibold text-indigo-600 hover:text-blue">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                {...register("password", { required: true })}
                                className="rounded-none block w-full border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                            />
                            {errors.password?.type === 'required' && <span className="text-red text-xs">Password is required</span>}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 bg-blue text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <SocialSignin></SocialSignin>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already you are a member?{' '}
                    <Link to="/auth/signup" state={location.state} className="font-semibold leading-6 text-indigo-600 hover:text-blue">
                        Please Signup
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;