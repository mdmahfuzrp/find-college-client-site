import { Outlet } from "react-router-dom";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSideBar";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <DashboardSideBar></DashboardSideBar>
            <div className="p-5 h-screen overflow-y-scroll w-full">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;