import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_-]{8,}$/;

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [showPass, setShowPass] = useState(false);

    const handleRegistration = async (data, e) => {
        e.preventDefault();
        setSuccess('');
        setError('');

        if (!data.phone.startsWith("01")) {
            setError('Start with 01 (BD phone number only allowed)')
            return;
        }
        if (data.phone.length !== 11) {
            setError('Give 11 digit Bangladeshi mobile number')
            return;
        }
        if (!/^\d+$/.test(data.phone)) {
            setError('Only digit allowed!')
            return;
        }

        if (!strongPasswordRegex.test(data.password)) {
            setError(
                'Password should be 8 characters long and include at least one digit, one uppercase, one lowercase, one special character!'
            );
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/allUsers', {
                fullname: data.fullName,
                role: data.role,
                phone: data.phone,
                email: data.email,
                password: data.password
            });

            // Handle successful registration (e.g., display a success message or redirect to login page)

            if (response.data.message) {
                e.target.reset();
                navigate('/login');
                Swal.fire({
                    title: `Registration complete`,
                    text: 'Registration successful, you can login now!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        } catch (error) {
            // Handle registration error (e.g., display an error message)
            console.error('Error registering user:', error.response.data.message);
            setError(error.response.data.message)
            Swal.fire({
                title: `Error`,
                text: 'Something went wrong, please try again!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }
    return (
        <div>
            <div className="min-h-screen w-full flex flex-col items-center justify-center">
                <div className="bg-white pt-5 rounded-xl">
                    <img className="w-[165px] mx-auto" src={logo} alt="" />
                    <h1 className="mt-1 text-2xl font-semibold text-slate-700">Register and get house updates!</h1>
                    <p className="text-slate-500">House hunter with 14 million+ people connected.</p>

                    <form className="mt-2 border  p-5 rounded-lg" onSubmit={handleSubmit(handleRegistration)}>
                        <div className="">
                            <input {...register('fullName', { required: true })} type="text" placeholder="Full name" className="input input-bordered w-full focus:outline-none" />
                            {errors.fullName && <p className='text-red-400 text-[15px]'>Enter Full Name!</p>}
                        </div>
                        <div className="mt-2">
                            <select {...register('role', { required: true })} className="select select-bordered w-full  text-[var(--primary-color)] text-[15px] font-medium">
                                <option disabled selected>Role</option>
                                <option>House Owner</option>
                                <option>House Renter</option>
                            </select>
                            {errors.role && <p className='text-red-400 text-[15px]'>Enter Your Role!</p>}
                        </div>
                        <div className="mt-2">
                            <input {...register('email', { required: true })} type="email" placeholder="Enter email" className="input input-bordered w-full focus:outline-none" />
                            {errors.email && <p className='text-red-400 text-[15px]'>Enter Your Email!</p>}

                        </div>
                        <div className="mt-2">
                            <input {...register('phone', { required: true })} type="number" placeholder="Phone (BD-Only)" className="input input-bordered w-full focus:outline-none" />
                            {errors.phone && <p className='text-red-400 text-[15px]'>Enter Your Phone!</p>}

                        </div>
                        <div className="mt-2 relative">
                            <input {...register('password', { required: true })} type={showPass ? 'text' : 'password'} placeholder='Password' className="input input-bordered w-full focus:outline-none" />
                            {
                                showPass ? <div onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer text-[var(--primary-color)] top-[15px] right-2"><FaEye size={18} /></div>
                                    : <div onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer text-gray-400 top-[15px] right-2"><FaEyeSlash size={18} /></div>
                            }
                            {errors.password && <p className='text-red-400 text-[15px]'>Enter Your Password!</p>}
                            {
                                error && <p className='text-red-400 text-justify text-[15px] w-[400px]'>{error}</p>
                            }
                            {
                                success && <p className='text-green-500 text-[15px] py-3'>Registration Complete You can <Link to='/login' className=' text-blue-500 underline font-medium'>Login Here</Link></p>
                            }
                        </div>
                        <input type="submit" className="btn btn-block hover:bg-[var(--primary-color)] hover:bg-opacity-50 bg-[var(--hover-color)] bg-opacity-60 text-white font-medium text-lg mt-2" value="Register Now" />
                        <p className='mt-2 text-[15px]'>Already have an account? <Link to='/login' className='underline text-blue-500'>Login now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;