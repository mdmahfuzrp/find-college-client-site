import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleRegistration = async (data, e) => {
        e.preventDefault();
        setSuccess('');
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/allUsers', {
                fullname: data.fullName,
                role: data.role,
                phone: data.phone,
                email: data.email,
                password: data.password
            });

            // Handle successful registration (e.g., display a success message or redirect to login page)
            
            if(response.data.message){
                e.target.reset();
                setSuccess(response.data.message);
            }
        } catch (error) {
            // Handle registration error (e.g., display an error message)
            console.error('Error registering user:', error.response.data.message);
            setError(error.response.data.message)
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
                        <div className="mt-2">
                            <input {...register('password', { required: true })} type="password" placeholder="Password" className="input input-bordered w-full focus:outline-none" />
                            {errors.password && <p className='text-red-400 text-[15px]'>Enter Your Password!</p>}
                            {
                                error && <p className='text-red-400 text-[15px]'>Enter Your Password!</p>
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