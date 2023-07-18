import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const isLoginPage = location.pathname.includes('register');
    return (
        <div className="w-full px-[15px] lg:px-0 lg:max-w-[1200px] mx-auto">
            {isLoginPage || <NavBar></NavBar>}
            <Outlet />
            {isLoginPage || <Footer></Footer>}
        </div>
    );
};

export default Main;