import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";

const Nabvar = () => {

    const { user, logout } = useAuthContext()
    console.log(user);

    const handlerSignout = () => {

        logout()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Signout',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const nabList = <>
        <li><Link className="hover:text-blue" to="/">Home</Link></li>
        <li><Link className="hover:text-blue" to="/college">Colleges</Link></li>
        <li><Link className="hover:text-blue" to='/admission'>Admission</Link></li>
        <li><Link className="hover:text-blue" to="my-college">My College</Link></li>
        {
            user ?
                <li>
                    <Link to='/auth/signin' className="hover:text-blue" onClick={handlerSignout}>Signout</Link>
                </li>
                : ''
        }
    </>

    return (
        <nav className="bg-[#e3e2e2] text-red font-medium border-b-2 border-blue">
            <div className="navbar max-w-screen-2xl mx-auto	">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue w-80">
                            {nabList}
                        </ul>
                    </div>
                    <Link to="/" className="normal-case lg:text-2xl"><img className="w-[200px]" src="https://i.ibb.co/Mk58q1N/logo.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nabList}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user ?
                            <Link to='/auth/signin'>Signin | Register</Link> :
                            <Link to="/profile"><span className="mx-2">{user.displayName} </span></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Nabvar;