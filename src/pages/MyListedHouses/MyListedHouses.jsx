import { useContext } from "react";
import { ProgressBar } from "react-loader-spinner";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
import MyHouse from "./MyHouse";
import MyBookedHouse from "../MyBookedHouse/MyBookedHouse";

const MyListedHouses = () => {
    const { user } = useContext(AuthContext);
    const { data: houses = [], refetch, isLoading } = useQuery(['houses'], async () => {
        const res = await fetch(`http://localhost:5000/houses/email?email=${user?.email}`);
        return res.json();
    })


    const handleDeleteHouse = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn m-1 btn-[var(--primary-color)] text-[16px]',
                cancelButton: 'btn btn-success m-1 text-[16px]'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "This house don't have undo options",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                // Here Are Delete Operation Start
                fetch(`http://localhost:5000/houses/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch();
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your house has been deleted.',
                                'success'
                            )
                        }
                        else {
                            swalWithBootstrapButtons.fire(
                                'Cancelled',
                                'Something wrong, please try again',
                                'error'
                            )
                        }
                    })
                // -----------------------------------
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Cancelled Successful',
                    'error'
                )
            }
        })
    }

    return (
        <>
            {
                user.role === 'House Owner' ? <>

                    <div className="flex flex-col">
                        <h1 className="text-[19px] mt-0 pt-0 mb-1 text-[var(--primary-color)] font-medium">My Houses:</h1>
                        <div className="">
                            {
                                !isLoading ? <>

                                    <div className="overflow-x-auto mx-auto">
                                        {
                                            houses.length > 0 ? <>
                                                <table className="table table-zebra w-full border rounded-none">
                                                    {/* head */}
                                                    <thead>
                                                        <tr>
                                                            <th className='rounded-none'></th>
                                                            <th className='text-[16px] font-semibold'>Name & Location</th>
                                                            <th className='text-[16px] font-semibold'>Owner Information</th>
                                                            <th className='text-[16px] font-semibold'>Price</th>
                                                            <th className='text-[16px] font-semibold'>availability</th>
                                                            <th className='rounded-none'></th>
                                                        </tr>
                                                    </thead>

                                                    {/* All Toy Here with another component but same page */}
                                                    <tbody>
                                                        {
                                                            houses.map((myHouse, index) => <MyHouse
                                                                key={myHouse._id}
                                                                myHouse={myHouse}
                                                                digit={index + 1}
                                                                handleDeleteHouse={handleDeleteHouse}
                                                            ></MyHouse>)
                                                        }
                                                    </tbody>

                                                    {/* foot */}
                                                    <tfoot>
                                                        <tr>
                                                            <th className='rounded-none'></th>
                                                            <th className='text-[16px] font-semibold'>Name & Location</th>
                                                            <th className='text-[16px] font-semibold'>Owner Information</th>
                                                            <th className='text-[16px] font-semibold'>Price</th>
                                                            <th className='text-[16px] font-semibold'>availability</th>
                                                            <th className='rounded-none'></th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </> : <p className='text-gray-400'>You {"don't"} have any house</p>
                                        }
                                    </div>

                                </> : <ProgressBar
                                    height="80"
                                    width="80"
                                    ariaLabel="progress-bar-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="progress-bar-wrapper"
                                    borderColor='#696c70'
                                    barColor='#9833f9'
                                />
                            }
                        </div >
                    </div>
                </> : <MyBookedHouse></MyBookedHouse>
            }
        </>
    );
};

export default MyListedHouses;