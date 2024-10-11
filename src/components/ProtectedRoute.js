import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
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

  if (requiredRole.length !== 0 && !requiredRole.includes(user.role)) {
    return <Navigate to='/error' />; // Redirect if the role doesn't match
  }

  return <Outlet />; // If authorized, render the nested routes
};

export default ProtectedRoutes;
