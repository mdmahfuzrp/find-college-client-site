import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiBed, BiPhone } from 'react-icons/bi';
import { LiaBathSolid } from 'react-icons/lia';
import { IoLocationOutline } from 'react-icons/io5';


const HouseDetails = () => {
    const house = useLoaderData();
    const { ownerPhone, residential, location, area, title, bedrooms, bathrooms, description, picture, price, availability, houseOwner, ownerEmail } = house;


    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])

    return (
        <div className='mx-auto overflow-x-hidden'>
            <div className='flex flex-row gap-x-1'>
                <p className='text-lg font-normal text-gray-500'>Houses</p>
                <p className='text-lg font-normal text-gray-500'>/ {title}</p>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-10 my-5'>
                <div data-aos="fade-right" className='md:w-[400px] rounded-lg shadow-md'>
                    <img src={picture} className='border md:w-[400px] rounded-lg' alt="" />
                    <div className='flex items-center justify-between gap-1 p-2'>
                        <p className='text-[18px] text-center h-[40px] bg-[var(--opacity-color)] flex items-center justify-center gap-1  p-1 px-3 '><BiBed />{bedrooms}</p>
                        <p className='text-[18px] h-[40px] bg-[var(--opacity-color)] flex items-center text-center justify-center gap-1  p-1 px-3 '><LiaBathSolid />{bathrooms}</p>
                        <p className='text-[18px] h-[40px] bg-[var(--opacity-color)] flex items-center'>
                            <mark className='p-[2px] px-3 rounded-full bg-transparent'>
                                <small className='pr-[1px]'>BDT</small>{house?.price}<span className='text-[var(--primary-color)]'>K</span>
                            </mark>
                        </p>
                        <p className='h-[40px] bg-[var(--opacity-color)] flex items-center text-[18px] text-right'><mark className='px-3 rounded-full p-[2px] bg-transparent'>{house?.residential}</mark></p>
                    </div>
                    <div className=''>
                        <p className='h-[40px] bg-[var(--opacity-color)] flex items-center text-[18px] text-right'><mark className='px-3 flex items-center gap-1 rounded-full p-[2px] bg-transparent'><span><IoLocationOutline size={17} /></span>{location}</mark></p>
                        <p className='h-[40px] bg-[var(--opacity-color)] flex items-center text-[18px] text-right rounded-b-lg mt-2'><mark className='px-3 p-[2px] bg-transparent '><span className='capitalize font-medium text-[var(--primary-color)]'>Available Only For:</span> {availability}</mark></p>
                    </div>
                </div>
                <div data-aos="fade-left" className='md:w-1/2 h-full flex flex-col'>
                    <div>

                        <h1 className='text-left text-2xl sm:text-3xl font-medium text-[var(--primary-color)] mb-2'>{title}</h1>
                        {
                            description && <p className='text-gray-500 text-justify'><span className='text-[var(--primary-color)] font-medium'>Description:</span> {description}</p>
                        }
                    </div>
                    <div className="stats stats-vertical lg:stats-horizontal shadow my-4">

                        <div className="stat lg:w-[150px] flex flex-col items-center">
                            <div className="stat-title">Price</div>
                            <div className="stat-value text-[25px] text-[var(--primary-color)]"><small>BDT</small> {price}K</div>
                            <div className="stat-desc">Limited price only</div>
                        </div>

                        <div className="stat lg:w-[150px] flex flex-col items-center">
                            <div className="stat-title">Residential</div>
                            <div className="stat-value text-[25px] text-[var(--primary-color)]" >{residential}</div>
                            <div className="stat-desc">High quality ever</div>
                        </div>

                        <div className="stat lg:w-[150px] flex flex-col items-center">
                            <div className="stat-title">Area</div>
                            <div className="stat-value text-[25px] text-[var(--primary-color)]">{area}</div>
                            <div className="stat-desc">In square feet</div>
                        </div>
                    </div>
                    <div className='text-left w-full border-t pt-2 mt-2'>
                        <span className='text-[var(--primary-color)] text-xl font-semibold'>Owner Information:</span>
                        <div className='mt-1 leading-5'>
                            {
                                houseOwner && <p className='text-gray-700 font-medium text-[17px]'>{houseOwner}(contact with this owner)</p>
                            }
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3 mt-2'>
                        <div className='bg-[var(--primary-color)] flex sm:w-fit items-center justify-center text-white text-lg font-normal py-1 px-4'><span className='mr-1'><BiPhone size={20} /></span>+88{ownerPhone}</div>
                        <div className='bg-[var(--primary-color)]  flex sm:w-fit items-center justify-center text-white text-lg py-1 px-4'>
                            <span className='mr-1'><FaShoppingBasket size={18} /></span>
                            {ownerEmail} </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseDetails;