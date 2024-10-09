import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useUserContext } from '../pages/context/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ requiredRole }) => {
  // const { user, loading } = useUserContext();
  const userCookie =
    Cookies.get('user') !== undefined ? Cookies.get('user') : null;
  const user = JSON.parse(userCookie);

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (!user) {
    return <Navigate to='/login' />; // Redirect to login if not authenticated
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to='/error' />; // Redirect if the role doesn't match
  }

  return <Outlet />; // If authorized, render the nested routes
};

export default ProtectedRoutes;
