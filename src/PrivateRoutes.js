import React from 'react'
import {useUserContext} from "./ContextStore";
import { Navigate } from 'react-router-dom'

export default function PrivateRoutes({children}) {
  const {name} = useUserContext();

  return name ? children : <Navigate to="/" />;
}
