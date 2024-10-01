import React from 'react';
import { useUserContext } from '../pages/context/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ requiredRole }) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to='/login' />; // Redirect to login if not authenticated
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to='/error' />; // Redirect if the role doesn't match
  }

  return <Outlet />; // If authorized, render the nested routes
};

export default ProtectedRoutes;
