import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import getUserType from '../utils/auth';

const AuthLayout = () => {

    const userType = getUserType();
    if(!userType){

        return <Navigate to='/' />;
    }
  return <Outlet />
};

export default AuthLayout
