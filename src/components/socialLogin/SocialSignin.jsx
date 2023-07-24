import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialSignin = () => {

    const { signinWithGoogle } = useContext(AuthContext)

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const googleSigninHandler = () => {

        signinWithGoogle()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Signin with Google.',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            })
    }

    return (
        <div className="flex justify-center items-center mt-10">
            <FaGoogle onClick={googleSigninHandler} className="cursor-pointer text-red text-2xl"></FaGoogle>
        </div>
    );
};

export default SocialSignin;