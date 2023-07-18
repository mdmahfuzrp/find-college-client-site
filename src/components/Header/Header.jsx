
import './Header.css'
import { IoLocationOutline } from 'react-icons/io5'
import {TbChartAreaLine} from 'react-icons/tb'

const Header = () => {
    return (
        <div id='header' className="hero mt-3 rounded-lg overflow-hidden">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[800px] min-h-[400px] flex flex-col items-center justify-center">
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-between'>
                        <div className='bg-white flex items-center rounded-lg'>
                            <input type="number" placeholder="Price (BDT)" className="p-3 rounded-lg border-none border-0 outline-0 w-full max-w-xs text-[var(--primary-color)] text-[15px] font-medium" />
                        </div>

                        <div>
                            <select className="select select-bordered w-full max-w-xs text-[var(--primary-color)] text-[15px] font-medium">
                                <option disabled selected>Residential</option>
                                <option>Room</option>
                                <option>Apartment</option>
                                <option>Penthouse</option>
                                <option>Duplex</option>
                            </select>
                        </div>

                        <div className='bg-white flex items-center rounded-lg col-span-1 md:col-span-2'>
                            <input type="text" placeholder="Location" className="p-3 rounded-lg border-none border-0 outline-0 w-full text-[var(--primary-color)] text-[15px] font-medium" />
                            <span className='pr-2 text-[var(--primary-color)]'><IoLocationOutline size={20} /></span>
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-between pt-[8px]'>
                        <div>
                            <select className="select select-bordered w-full max-w-xs text-[var(--primary-color)] text-[15px] font-medium">
                                <option disabled selected>Bedrooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5+</option>
                            </select>
                        </div>
                        <div>
                            <select className="select select-bordered w-full max-w-xs text-[var(--primary-color)] text-[15px] font-medium">
                                <option disabled selected>Bathrooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5+</option>
                            </select>
                        </div>

                        <div className='bg-white flex items-center rounded-lg'>
                            <input type="text" placeholder="Size (sqft)" className="p-3 rounded-lg border-none border-0 outline-0 w-full text-[var(--primary-color)] text-[15px] font-medium" />
                            <span className='pr-2 text-[var(--primary-color)]'><TbChartAreaLine size={20} /></span>
                        </div>

                        <div className='bg-[var(--primary-color)] flex items-center justify-center text-[18px] rounded-lg text-white'>
                            <button>Find House</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;