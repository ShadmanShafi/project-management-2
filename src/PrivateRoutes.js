import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

export default function PrivateRoutes({children}) {
  const name = useSelector((state) => state.user.name)

  return name ? children : <Navigate to="/" />;
}
