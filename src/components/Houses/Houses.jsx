import { useEffect, useState } from 'react'
import House from './House'
const Houses = () => {
    const [houses, setHouses] = useState([]);
    const [totalHouse, setTotalHouse] = useState(0);
    console.log(houses);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalHouse / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    useEffect(()=>{
        fetch('http://localhost:5000/totalHouses')
        .then(res => res.json())
        .then(data => setTotalHouse(data.totalHouses))
    })

    useEffect(() => {
        fetch(`http://localhost:5000/houses?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setHouses(data));
    }, [currentPage]);


    const handleSetCurrentPage = (page) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <div className='w-[200px] mx-auto mt-7'>
                <img className='w-[200px]' src="https://i.ibb.co/cCPf9f7/houses.png" alt="" />
            </div>

            <div className='grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    houses.map((house, index) => <House
                        key={house._id}
                        house={house}
                        digit={index + 1}
                    ></House>)
                }
            </div>

            <div className='w-full bg-white'>
                {/* Pagination */}
                <div className='pagination p-5 w-fit ms-auto'>
                    {
                        pageNumbers.map(number => <button
                            key={number}
                            className={`w-14 h-9 text-lg border ${currentPage === number ? 'bg-[var(--primary-color)]' : ''}`}
                            onClick={() => handleSetCurrentPage(number)}
                        >
                            {number}
                        </button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Houses;