import DashboardMain from "../../components/DashboardMain/DashboardMain";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSideBar";

const DashboardHome = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <DashboardSideBar></DashboardSideBar>
            <DashboardMain></DashboardMain>
        </div>
    );
};

export default DashboardHome;