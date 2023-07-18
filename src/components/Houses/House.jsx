import { BiBed } from 'react-icons/bi'
import { LiaBathSolid } from 'react-icons/lia'
import { IoLocationOutline } from 'react-icons/io5'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
const House = ({ house }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 border shadow-md">
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
                <div className='flex items-center justify-between'>
                    <p className='text-[18px] text-left'><mark className='rounded-xl p-[2px] px-2 bg-[var(--opacity-color)]'>TO: {house?.availability}</mark></p>
                    <button className='custom-btn mt-1'><BsFillBookmarkPlusFill /> Book House</button>
                </div>
            </div>
        </div>
    );
};

export default House;