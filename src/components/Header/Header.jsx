
import { useEffect, useState } from 'react';
import './Header.css'
import { IoLocationOutline } from 'react-icons/io5'
import { TbChartAreaLine } from 'react-icons/tb'
import SearchHouse from '../SearchHouse/SearchHouse';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {

    const [searchHouse, setSearchHouse] = useState([]);

    const handleSearchHouse = async (event) => {

        event.preventDefault();

        const form = event.target;
        const bathrooms = form.bathrooms.value;
        const bedrooms = form.bedrooms.value;
        const location = form.location.value;
        const residential = form.residential.value;
        const price = form.price.value;
        const area = form.area.value;

        const formData = { bathrooms, location, bedrooms, residential, price, area };

        try {
            // Send the search parameters to the backend API using fetch
            const response = await fetch('http://localhost:5000/searchHouses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Handle the response from the backend (e.g., display the search results)
            const data = await response.json();
            setSearchHouse(data);
        } catch (error) {
            // Handle any errors that occur during the search
            console.error('Error searching houses:', error);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])

    return (
        <div>
            <div id='header' className="hero mt-3 rounded-lg overflow-hidden">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <form onSubmit={handleSearchHouse} className="max-w-[800px] min-h-[400px] flex flex-col items-center justify-center">
                        <h1 className='text-[30px] text-white font-medium mb-1'>Search with multiple option, as your need!</h1>
                        <p className=" text-2xl flex flex-col md:flex-row">
                            <span className="bg-[var(--primary-color)] px-3 py-0 text-[20px] rounded-full font-medium shadow-md mb-5">
                                <TypeAnimation
                                    sequence={[
                                        'Choose your affordable price.', // Types 'One'
                                        1000, // Waits 1s
                                        'Need your room, apartment etc.', // Deletes 'One' and types 'Two'
                                        1000, // Waits 2s
                                        'Go your comfortable location.', // Types 'Three' without deleting 'Two'
                                        1000,
                                        'Enjoy you bedroom with partner.', // Types 'Three' without deleting 'Two'
                                        1000,
                                        'Choice your healthy bathrooms.', // Types 'Three' without deleting 'Two'
                                        1000,
                                        'See your own room or home size.', // Types 'Three' without deleting 'Two'
                                        1000,
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ fontSize: '1em', display: 'inline-block' }}
                                />
                            </span>
                        </p>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-between'>
                            <div className='bg-white flex items-center rounded-lg'>
                                <input type="number" name='price' placeholder="Price (BDT)" className="p-3 rounded-lg border-none border-0 outline-0 w-full max-w-xs text-[var(--primary-color)] text-[15px] font-medium" />
                            </div>

                            <div>
                                <select name='residential' className="select select-bordered w-full max-w-xs text-[var(--primary-color)] text-[15px] font-medium">
                                    <option disabled selected>Residential</option>
                                    <option>Room</option>
                                    <option>Apartment</option>
                                    <option>Penthouse</option>
                                    <option>Duplex</option>
                                </select>
                            </div>

                            <div className='bg-white flex items-center rounded-lg col-span-1 md:col-span-2'>
                                <input name='location' type="text" placeholder="Location" className="p-3 rounded-lg border-none border-0 outline-0 w-full text-[var(--primary-color)] text-[15px] font-medium" />
                                <span className='pr-2 text-[var(--primary-color)]'><IoLocationOutline size={20} /></span>
                            </div>
                        </div>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-between pt-[8px]'>
                            <div>
                                <select name='bedrooms' className="select select-bordered w-full max-w-xs text-[var(--primary-color)] text-[15px] font-medium">
                                    <option disabled selected>Bedrooms</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5+</option>
                                </select>
                            </div>
                            <div>
                                <select name='bathrooms' className="select select-bordered w-full max-w-xs text-[var(--primary-color)] text-[15px] font-medium">
                                    <option disabled selected>Bathrooms</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5+</option>
                                </select>
                            </div>

                            <div className='bg-white flex items-center rounded-lg'>
                                <input name='area' type="text" placeholder="Size (sqft)" className="p-3 rounded-lg border-none border-0 outline-0 w-full text-[var(--primary-color)] text-[15px] font-medium" />
                                <span className='pr-2 text-[var(--primary-color)]'><TbChartAreaLine size={20} /></span>
                            </div>

                            <button type='submit' className='bg-[var(--primary-color)] flex items-center justify-center text-[18px] rounded-lg text-white'>
                                Find House
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {
                searchHouse.length > 0 && <>
                    <div className='my-5' data-aos="fade-up">
                        <h1 className='mb-3 text-[30px] font-semibold text-[var(--primary-color)] text-center border-b-[3px] w-fit mx-auto'>Your Current Search: </h1>
                        <div className='grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                searchHouse.map((house) => <SearchHouse
                                    key={house._id}
                                    house={house}
                                ></SearchHouse>)
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Header;