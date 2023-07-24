
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/home/Home';
import CollegeView from '../pages/collegeView/CollegeView';
import College from '../pages/college/College';
import Admission from '../pages/admission/Admission';
import MyCollege from '../pages/myCollege/MyCollege';
import Signin from '../pages/authentication/Signin';
import Signup from '../pages/authentication/Signup';
import AdmissionForm from '../pages/admissionForm/AdmissionForm';
import PrivateRoute from './PrivateRoute';
import Error from '../pages/error/Error';
import Profile from '../pages/profile/Profile';
import ProfileEdit from '../pages/profile/ProfileEdit';

const Router = createBrowserRouter([
    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: `colleges/:_id`,
                element: <PrivateRoute><CollegeView></CollegeView></PrivateRoute>,
                loader: ({ params }) => fetch(`https://find-college-server.vercel.app/colleges/${params._id}`)
            },
            {
                path: 'college',
                element: <College></College>
            },
            {
                path: 'admission',
                element: <Admission></Admission>
            },
            {
                path: 'admission-form/:_id',
                element: <PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute>,
                loader: ({ params }) => fetch(`https://find-college-server.vercel.app/colleges/${params._id}`)
            },
            {
                path: 'my-college',
                element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: 'profile/edit',
                element: <PrivateRoute><ProfileEdit></ProfileEdit></PrivateRoute>
            }
        ],
    },
    {
        path: 'auth',
        children: [
            {
                path: 'signin',
                element: <Signin></Signin>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            }
        ]
    }
]);

export default Router;
