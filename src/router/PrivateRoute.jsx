import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuthContext()

    const location = useLocation()

    if(loading) {
        return <h1>Loading...</h1>
    }

    if (user) {
        return children
    }

    return <Navigate to="/auth/signin" state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;