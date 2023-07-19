import { useContext } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const EditHouse = () => {
    const { user } = useContext(AuthContext);
    const house = useLoaderData();
    console.log('house', house);

    const handleEditHouse = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const picture = form.picture.value;
        const price = form.price.value;
        const availability = form.availability.value;
        const houseOwner = form.houseOwner.value;
        const ownerEmail = form.ownerEmail.value;
        const ownerPhone = form.ownerPhone.value;
        const residential = form.residential.value;
        const location = form.location.value;
        const area = form.area.value;


        const updatedHouseInfo = { ownerPhone, residential, location, area, title, bedrooms, bathrooms, description, picture, price, availability, houseOwner, ownerEmail }

        fetch(`http://localhost:5000/houses/${house._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedHouseInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: `Successful`,
                        text: 'House Information updated',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
                else {
                    Swal.fire({
                        title: `Failed`,
                        text: 'House update failed',
                        icon: 'error',
                        confirmButtonText: 'Continue'
                    })
                }
            })
    }

    return (
        <div className='px-5'>
            <div className='sm:w-11/12 md:w-9/12 my-7 mx-auto'>
                <form onSubmit={handleEditHouse}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className=" text-2xl font-medium leading-7 text-gray-900">Add a <span className='text-[var(--primary-color)]'>House</span></h2>
                            <p className="mt-1 text-md leading-6 text-gray-600">
                                Fill up the all information and post a house as a owner
                            </p>

                            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor='title' className="block text-md font-medium leading-6 text-gray-900">
                                        Title
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[var(--primary-color)] sm:max-w-md">
                                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-md">Title/</span>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                autoComplete="title"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 rounded-r-md ring-inset focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] sm:text-md sm:leading-6 outline-none"
                                                placeholder="2 Bed Rooms"
                                                required
                                                defaultValue={house.title}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="bedrooms" className="block text-md font-medium leading-6 text-gray-900">
                                        bedrooms
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="bedrooms"
                                            name="bedrooms"
                                            autoComplete="bedrooms"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] sm:max-w-xs sm:text-md sm:leading-6 outline-none"
                                            required
                                            defaultValue={house.bedrooms}
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="bathrooms" className="block text-md font-medium leading-6 text-gray-900">
                                        Bathrooms
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="bathrooms"
                                            name="bathrooms"
                                            autoComplete="bathrooms"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] sm:max-w-xs sm:text-md sm:leading-6 outline-none"
                                            required
                                            defaultValue={house.bathrooms}
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="residential" className="block text-md font-medium leading-6 text-gray-900">
                                        Residential
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="residential"
                                            name="residential"
                                            autoComplete="residential"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] sm:max-w-xs sm:text-md sm:leading-6 outline-none"
                                            required
                                            defaultValue={house.residential}
                                        >
                                            <option>Room</option>
                                            <option>Apartment</option>
                                            <option>Penthouse</option>
                                            <option>Duplex</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="area" className="block text-md font-medium leading-6 text-gray-900">
                                        Area
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="area"
                                            id="area"
                                            autoComplete="area"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] placeholder:text-gray-400  sm:text-md sm:leading-6 outline-none"
                                            placeholder='Area (sqft)'
                                            required
                                            defaultValue={house.area}
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-md font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] placeholder:text-gray-400 outline-0 sm:text-md sm:leading-6"
                                            defaultValue={house.description}
                                            placeholder='Description'
                                            required
                                        />
                                    </div>
                                    <p className="mt-3 text-md leading-6 text-gray-600">Write a few sentences description.</p>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="toy-photo" className="block text-md font-medium leading-6 text-gray-900">
                                        House photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center w-full md:w-10/12">
                                            <FaPhotoVideo className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex text-md leading-6 text-gray-600">
                                                <input id="toy-photo" name="picture" type="text" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] placeholder:text-gray-400 outline-0 sm:text-md sm:leading-6" placeholder='PhotoURL' required defaultValue={house.picture} />
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">Choose only http or https house photo link</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="price" className="block text-md font-medium leading-6 text-gray-900">
                                        Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            autoComplete="price"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] placeholder:text-gray-400 sm:text-md sm:leading-6 outline-none"
                                            placeholder='Price (only thousand)'
                                            required
                                            defaultValue={house.price}
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="availability" className="block text-md font-medium leading-6 text-gray-900">
                                        Availability
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            name="availability"
                                            id="availability"
                                            autoComplete="availability"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] placeholder:text-gray-400  sm:text-md sm:leading-6 outline-none"
                                            placeholder='Availability'
                                            required
                                            defaultValue={house.availability}
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="location" className="block text-md font-medium leading-6 text-gray-900">
                                        Location
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            autoComplete="location"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] placeholder:text-gray-400  sm:text-md sm:leading-6 outline-none"
                                            placeholder='location'
                                            required
                                            defaultValue={house.location}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-md leading-6 text-gray-600">Please provide valid information for submit a house</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-2">
                                    <label htmlFor="houseOwner" className="block text-md font-medium leading-6 text-gray-900">
                                        Owner name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="houseOwner"
                                            id="houseOwner"
                                            autoComplete="houseOwner"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] placeholder:text-gray-400  sm:text-md sm:leading-6 outline-none"
                                            placeholder='Owner name'
                                            defaultValue={user?.fullname}
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="ownerEmail" className="block text-md font-medium leading-6 text-gray-900">
                                        Owner email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="ownerEmail"
                                            id="ownerEmail"
                                            autoComplete="ownerEmail"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] placeholder:text-gray-400  sm:text-md sm:leading-6 outline-none"
                                            placeholder='Owner email'
                                            defaultValue={user?.email}
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="ownerPhone" className="block text-md font-medium leading-6 text-gray-900">
                                        Owner email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="ownerPhone"
                                            id="ownerPhone"
                                            autoComplete="ownerPhone"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] placeholder:text-gray-400  sm:text-md sm:leading-6 outline-none"
                                            placeholder='Owner phone'
                                            defaultValue={user?.phone}
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to='/dashboard' type="button" className="text-md font-semibold leading-6 text-gray-900">
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="rounded-md bg-error px-3 py-2 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditHouse;