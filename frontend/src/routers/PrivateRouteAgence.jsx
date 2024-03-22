import React from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRouteAgence = ({children}) => {
  const user = localStorage.getItem("User");
    if (!user) {
        return <Navigate to="/login" />;
    }
  return children

}

export default PrivateRouteAgence