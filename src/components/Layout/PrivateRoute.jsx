import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthState from './../../hooks/useAuthState';
import Spinner from './Spinner';

function PrivateRoute() {

    const {loggedIn,checkState} = useAuthState(); 

    if(checkState){
        return <Spinner />
    }
  return loggedIn ? <Outlet /> : <Navigate to={'/signin'} />
}

export default PrivateRoute;
