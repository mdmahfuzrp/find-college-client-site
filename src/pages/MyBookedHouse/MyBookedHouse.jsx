import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "react-query";
import BookedHouse from "../../components/BookedHouse/BookedHouse";
import { MagnifyingGlass } from "react-loader-spinner";
import Swal from "sweetalert2";

const MyBookedHouse = () => {
    const { user } = useContext(AuthContext);
    const { data: myBookings = [], refetch, isLoading } = useQuery(['allBookings'], async () => {
        const res = await fetch(`http://localhost:5000/allBookings/email?email=${user?.email}`);
        return res.json();
    })

    const handleDeleteBooking = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn m-1 btn-[var(--primary-color)] text-[16px]',
                cancelButton: 'btn btn-success m-1 text-[16px]'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "This bokking don't have undo options",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                // Here Are Delete Operation Start
                fetch(`http://localhost:5000/allBookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch();
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
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
        <div>
            <h1 className="text-[19px] mt-0 pt-0 text-[var(--primary-color)] font-medium">My Booked Houses:</h1>
            <p className="text-[15px] text-gray-500 border-b pb-2 mb-3">You can booked 2 house at a time, if you need add book more you need to delete some bookings</p>
            {
                !isLoading ? <>
                    {
                        myBookings.length > 0 ? <>
                            <div className='grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-2 xl:gap-5'>
                                {
                                    myBookings.map((house, index) => <BookedHouse
                                        key={house._id}
                                        house={house}
                                        digit={index + 1}
                                        handleDeleteBooking={handleDeleteBooking}
                                    ></BookedHouse>)
                                }
                            </div>
                        </> : <p className='text-gray-400'>You {"don't"} have any booked house</p>
                    }
                </> : <div className='w-fit mx-auto flex flex-col items-center justify-center mt-12'>
                    <MagnifyingGlass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperClass="MagnifyingGlass-wrapper"
                        glassColor='#8961b33e'
                        color='#8861b3'
                    />
                    <p className='text-gray-400'>Wait for loading please..</p>
                </div>
            }

        </div >
    );
};

export default MyBookedHouse;