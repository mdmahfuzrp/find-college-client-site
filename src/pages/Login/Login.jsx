import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {
    const { setIsLoggedIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (data, e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: data.email,
                password: data.password
            });

            // Handle successful login (e.g., save user data, redirect, etc.)
            const userData = response.data.user;
            if (userData) {
                axios.post('http://localhost:5000/jwt', { email: userData.email })
                    .then(response => {
                        localStorage.setItem('access-token', response.data.token);
                        localStorage.setItem('user-data', JSON.stringify(userData));
                        setIsLoggedIn(true);
                        navigate(from, { replace: true });
                    })
            }
            else {
                localStorage.removeItem('access-token', 'user-data');

            }
        } catch (error) {
            // Handle login error (e.g., display an error message)
            console.error('Error during login:', error.response.data.message);
        }
    }


    return (
        <div>
            <div className="min-h-screen w-full flex flex-col items-center justify-center">
                <div className="bg-white p-10 py-14 rounded-xl">
                    <Link to='/'> <img className="w-[165px] mx-auto" src={logo} alt="" /></Link>
                    <h1 className="mt-5 text-2xl font-semibold text-slate-700">Login and get house updates!</h1>
                    <p className="text-slate-500">House hunter with 14 million+ people connected.</p>

                    <form className="mt-7 border  p-5 rounded-lg" onSubmit={handleSubmit(handleLogin)}>
                        <div className="">
                            <input {...register('email', { required: true })} type="email" name="email" placeholder="Enter email" required className="input input-bordered w-full focus:outline-none" />
                            {errors.email && <p className='text-red-400 text-[15px]'>Invalid email address!!</p>}
                        </div>
                        <div className="mt-2">
                            <input {...register('password', { required: true })} type="password" name="password" placeholder="Password" required className="input input-bordered w-full focus:outline-none" />
                            {errors.password && <p className='text-red-400 text-[15px]'>Password {"doesn't"} matched!!</p>}
                        </div>
                        <input type="submit" className="btn btn-block hover:bg-[var(--primary-color)] hover:bg-opacity-50 bg-[var(--hover-color)] bg-opacity-60 text-white font-medium text-lg mt-2" value="Login now" />
                        <p className='mt-2 text-[15px]'>Do not have any account ? <Link to='/register' className='underline text-blue-500'>Register now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;