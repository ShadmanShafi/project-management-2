import React from 'react'
import { useUserContext } from '../ContextStore'

export default function Dashboard() {
  const { name, setName } = useUserContext();
  console.log(name)

  return (
    <div>Dashboard</div>
  )
}
