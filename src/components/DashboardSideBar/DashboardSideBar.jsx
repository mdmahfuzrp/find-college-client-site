import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const DashboardSideBar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () =>{
        logout();
    }

    const houseOwner = <>
        <Link to='/' className='w-full text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer'>Home</Link>
        <Link className='w-full text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer'>All Listed House</Link>
        <Link className='w-full text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer'>All Booked Houses</Link>
        <Link to='/dashboard/addNewHouse' className='w-full text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer'>Add New Houses</Link>
    </>

    const houseRenter = <>
        <Link to='/' className='w-full text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer'>Home</Link>
        <Link className='w-full text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer'>My Booked Houses</Link>
        <Link className='w-full text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer'>Manage Bookings</Link>
    </>

    return (
        <div className="w-[220px] md:h-screen overflow-hidden relative bg-[var(--primary-color)] py-5 px-2">
            <div className='flex items-center justify-between'>
                <Link to='/'>
                    <img className='w-[130px]' src={logo} alt="" />
                </Link>
                <div>x</div>
            </div>
            <div className='my-2 w-full h-[2px] bg-gray-300'></div>
            <div className='flex flex-col'>
                {
                    user.role === 'House Owner' ? houseOwner : houseRenter
                }
            </div>

            <div className='flex flex-col absolute w-[94%] left-[3%] bottom-10'>
                <div className='flex items-center'>
                    <img className='w-[30px] h-[30px] mb-2 rounded-full border-2 border-gray-300' src={logo} alt="" />
                    <p className='text-[#ffffffdd] text-[17px] -mt-1 ml-1'>{user.fullname}</p>
                </div>
                <Link className='w-full text-[#ffffffdd] bg-[#ffffff3f] py-[7px] px-3 rounded-md shadow-md' onClick={handleLogout}>Logout</Link>
            </div>
        </div>
    );
};

export default DashboardSideBar;