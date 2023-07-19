import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="bg-[var(--bg-color)] flex flex-col min-h-screen -mt-14 items-center justify-center">
                <h1 className="text-[30px] font-medium">Hello {user.fullname ? user.fullname : user.email}, Welcome to dashboard!</h1>
                <img className="w-[150px] h-[150px] object-cover rounded-full" src={user?.photoURL ? user?.photoURL : 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'} alt="" />
                <p className="uppercase -mt-3 mb-0 text-[18px] font-semibold text-[var(--primary-color)]">Your role: {user?.role}</p>
                <p className="capitalize mt-3 mb-0 text-[16px] font-medium text-[var(--primary-color)]">{user?.fullname}</p>
                <div>
                    <p className="text-[16px] font-medium text-[var(--primary-color)]">{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;