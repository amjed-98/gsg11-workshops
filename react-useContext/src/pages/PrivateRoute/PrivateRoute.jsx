import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to='/' replace={true} state/>;
  }

  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
