import { BiBed } from 'react-icons/bi'
import { LiaBathSolid } from 'react-icons/lia'
import { IoLocationOutline } from 'react-icons/io5'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useQuery } from 'react-query';
const House = ({ house }) => {
    const { user } = useContext(AuthContext);
    const { data: allBookings = [], refetch } = useQuery(['allBookings'], async () => {
        const res = await fetch(`http://localhost:5000/allBookings/email?email=${user?.email}`);
        return res.json();
    })

    const handleAddBookings = (bookedHouse) => {
        let exist = allBookings.find(booking => booking.mainId == house._id);
        if (allBookings.length >= 2) {
            Swal.fire({
                title: `You have 2 booking limit`,
                text: 'Free up space or delete some and then try again!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return;
        }
        if (exist) {
            Swal.fire({
                title: `Not Added`,
                text: 'Bookings already added!',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
            return;
        }

        const bookedHouseInfo = {
            mainId: house._id,
            residential: bookedHouse.residential,
            location: bookedHouse.location,
            area: bookedHouse.area,
            title: bookedHouse.title,
            bedrooms: bookedHouse.bedrooms,
            bathrooms: bookedHouse.bathrooms,
            description: bookedHouse.description,
            picture: bookedHouse.picture,
            price: bookedHouse.price,
            availability: bookedHouse.availability,
            houseOwner: bookedHouse.houseOwner,
            ownerPhone: bookedHouse.ownerPhone,
            ownerEmail: bookedHouse.ownerEmail,
            renterEmail: user.email,
            renterName: user.fullname
        }

        fetch('http://localhost:5000/allBookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookedHouseInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    refetch();
                    Swal.fire({
                        title: `Successful`,
                        text: 'Bookings added successful',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
            })
    }
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
                <div className='flex items-center justify-between'>
                    <p className='text-[18px] text-left'><mark className='rounded-xl p-[2px] px-2 bg-[var(--opacity-color)]'>TO: {house.availability ? house.availability : <span className='text-[12px]'>No date found</span>}</mark></p>
                    <button onClick={() => handleAddBookings(house)} className='custom-btn mt-1'><BsFillBookmarkPlusFill /> Book House</button>
                </div>
            </div>
        </div>
    );
};

export default House;