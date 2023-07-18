import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard/Dashboard";
import DashboardHome from "../pages/DashboardHome/DashboardHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])
export default router;


// ,
//     {
//         path: 'dashboard',
//         element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
//         children: [
//             {
//                 path: 'mydashboard',
//                 element: <MyDashboard></MyDashboard>
//             },
//             {
//                 path: 'myselectedclass',
//                 element: <MySelectedClass></MySelectedClass>
//             },
//             {
//                 path: 'myenrolledclass',
//                 element: <MyEnrolledClass></MyEnrolledClass>
//             },
//             {
//                 path: 'allusers',
//                 element: <AllUsers></AllUsers>
//             },
//             {
//                 path: 'addClass',
//                 element: <AddClass></AddClass>
//             },
//             {
//                 path: 'manageClasses',
//                 element: <ManageClasses></ManageClasses>
//             },
//             {
//                 path: 'myClasses',
//                 element: <MyClasses></MyClasses>
//             },
//             {
//                 path: 'feedback/:id',
//                 element: <Feedback></Feedback>
//             },
//             {
//                 path: 'payment',
//                 element: <Payment></Payment>
//             }
//         ]
//     },