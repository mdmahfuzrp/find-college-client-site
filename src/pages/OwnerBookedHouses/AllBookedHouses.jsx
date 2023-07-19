import { BiBed } from 'react-icons/bi'
import { LiaBathSolid } from 'react-icons/lia'
import { IoLocationOutline } from 'react-icons/io5'
import { TbListDetails } from 'react-icons/tb'
import { Link } from 'react-router-dom'
const AllBookedHouses = ({ house }) => {
    return (
        <div className="card card-compact bg-base-100 border shadow-md">
            <figure><img src={house?.picture} className='h-[210px] object-cover w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title capitalize">{house?.title}</h2>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-[18px]'>
                        <mark className='p-[2px] px-2 rounded-xl bg-[var(--opacity-color)]'>
                            <small className='pr-[1px]'>BDT</small>{house?.price}<span className='text-[var(--primary-color)]'>K</span>
                        </mark>
                    </p>
                    <div className='flex items-center justify-center gap-1'>
                        <p className='text-[18px] text-center flex items-center justify-center gap-1 bg-[var(--opacity-color)] p-1 px-2 rounded-xl'><BiBed />{house?.bedrooms}</p>
                        <p className='text-[18px] text-center flex items-center justify-center gap-1 bg-[var(--opacity-color)] p-1 px-2 rounded-xl'><LiaBathSolid />{house?.bathrooms}</p>
                    </div>
                    <p className='text-[18px] text-right'><mark className='rounded-xl p-[2px] px-2 bg-[var(--opacity-color)]'>{house?.residential}</mark></p>
                </div>
                <div className='flex items-center mt-1 text-[var(--primary-color)]'><IoLocationOutline size={17} /> <p className='text-[16px] text-gray-600 ml-1'>{house?.location}</p></div>
                <div className='border-2 p-1 pb-3 rounded-lg'>
                    <p className='text-[var(--primary-color)] text-center mb-3 border-b-2 text-[18px]'>Renter Information:</p>
                    <p className='text-[18px] text-center mb-3'><mark className='rounded-xl p-[2px] px-2 bg-[var(--opacity-color)]'>{house.renterName}</mark></p>
                    <p className='text-[18px] text-center '><mark className='rounded-xl p-[2px] px-2 bg-[var(--opacity-color)]'>{house.renterEmail}</mark></p>
                </div>
                <Link to={`/dashboard/houseDetails/${house?._id}`} className='custom-btn mt-2 mx-auto'><TbListDetails />See House Details</Link>
            </div>
        </div>
    );
};

export default AllBookedHouses;