import React, { use } from 'react';
import AuthContext from '../context/AuthContext';
import { Atom } from 'react-loading-indicators';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return (
      <div className=" text-center py-5">
        <Atom color="#32cd32" size="large" text="" textColor="" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={'/register'}/>;
};

export default PrivateRoute;