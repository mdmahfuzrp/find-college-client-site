import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <div>hello</div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;