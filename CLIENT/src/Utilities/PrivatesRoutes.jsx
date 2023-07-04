import { Navigate, Outlet } from "react-router-dom";
import React from 'react'

const PrivatesRoutes = () => {

const auth = {'token': false, 'password': false};

return (

    auth.token ? <Outlet></Outlet> : <Navigate to='/login' replace></Navigate>

)
}

export default PrivatesRoutes