import houses from '../../assets/houses.png'
import banner from '../../assets/banner.jpg'
import { BiBed } from 'react-icons/bi'
import { LiaBathSolid } from 'react-icons/lia'
import {IoLocationOutline} from 'react-icons/io5'
import {BsFillBookmarkPlusFill} from 'react-icons/bs'
const Houses = () => {
    return (
        <div>
            <div className='w-[200px] mx-auto mt-7'>
                <img className='w-[200px]' src={houses} alt="" />
            </div>

            <div className='grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card card-compact w-96 bg-base-100 border shadow-md">
                    <figure><img src={banner} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">House name</h2>
                        <p>House description</p>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-[18px]'>
                                <mark className='p-[2px] px-2 rounded-xl bg-[var(--opacity-color)]'>
                                    <small className='pr-[1px]'>BDT</small>8.5<span className='text-[var(--primary-color)]'>K</span>
                                </mark>
                            </p>
                            <div className='flex items-center justify-center gap-1'>
                                <p className='text-[18px] text-center flex items-center justify-center gap-1 bg-[var(--opacity-color)] p-1 px-2 rounded-xl'><BiBed />4</p>
                                <p className='text-[18px] text-center flex items-center justify-center gap-1 bg-[var(--opacity-color)] p-1 px-2 rounded-xl'><LiaBathSolid />2</p>
                            </div>
                            <p className='text-[18px] text-right'><mark className='rounded-xl p-[2px] px-2 bg-[var(--opacity-color)]'>Room</mark></p>
                        </div>
                        <div className='flex items-center mt-1 text-[var(--primary-color)]'><IoLocationOutline size={17}/> <p className='text-[16px] text-gray-600 ml-1'>Dhanmondi 32, Dhaka, Bangladesh</p></div>

                        <button className='custom-btn mt-1'><BsFillBookmarkPlusFill /> Book House</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Houses;