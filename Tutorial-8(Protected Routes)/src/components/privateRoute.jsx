import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRoute =  () => {
    const user = useSelector((state) => state.userInfo.user);
    
    if (!user) {
        return <Navigate to="/login"/>
    }
    return <Outlet></Outlet>
}

export default PrivateRoute;