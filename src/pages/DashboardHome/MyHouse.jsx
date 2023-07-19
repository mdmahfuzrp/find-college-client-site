import { Link } from 'react-router-dom';

const MyHouse = ({ myHouse, digit, handleDeleteHouse }) => {
    const { _id, title, location, price, availability, houseOwner, ownerEmail, picture } = myHouse;

    return (
        <tr>
            <th>
                <label className=''>
                    <p className='px-5 text-error text-xl font-medium'>{digit}</p>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="House" />
                        </div>
                    </div>
                    <div>
                        <div className="font-normal text-lg capitalize">{title}</div>
                        <div className="text-md font-normal text-error"> <span className='text-gray-500'>{location}</span></div>
                    </div>
                </div>
            </td>
            <td>
                <span className="block">{houseOwner}</span>
                <span className="badge badge-error text-white font-[300] p-1 badge-md">{ownerEmail}</span>
            </td>
            <td className='text-lg'><span className='text-error'><small>BDT</small></span>{price}K</td>
            <td className='text-lg'><span className='text-error'>{availability}</span></td>
            <th>

                <Link to={`/dashboard/editHouse/${_id}`} className="btn btn-sm px-2 shadow-md btn-success mr-1.5 text-white font-normal capitalize text-[18px]">Edit</Link>
                <Link onClick={() => handleDeleteHouse(_id)} className="btn btn-sm px-2 shadow-md btn-error text-white font-normal capitalize text-[18px]">Delete</Link>
            </th>

        </tr>
    );
};

export default MyHouse;