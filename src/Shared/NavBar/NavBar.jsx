import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
// import './NavBar.css';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const NavBar = () => {
    const { logout, user } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    // NavBar List Items
    const listItems = <>
        <Link to='/'>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        {
            user ? <Link to='/dashboard'>Dashboard</Link> : ''
        }
    </>

    return (
        <div className=''>
            <div className="navbar mx-auto p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {listItems}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <Link to='/' className=' text-2xl uppercase font-semibold text-gray-700'><img className='w-[180px]' src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6 text-[17px] text-[var(--primary-color)]">
                        {listItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        {
                            user ? <>

                                <div id='parent-user-profile' className='flex items-center gap-x-1'>

                                    <Link to='/dashboard' className='badge bg-[var(--primary-color)] text-white -mb-1 cursor-pointer w-full font-normal p-4 text-[17px]'>{user?.fullname}</Link>
                                    <label id='user-pic' tabIndex={0} className=" btn btn-ghost btn-circle avatar flex-row-reverse">
                                        <div className="w-12 rounded-full">
                                            <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg' />
                                        </div>
                                    </label>
                                </div>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to='/dashboard' className="justify-between">
                                            Dashboard
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link onClick={handleLogout}>Logout</Link></li>
                                </ul>
                            </> : <Link to='/login' className='custom-btn'>Login Now</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;