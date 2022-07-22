import React from "react";
import { useUserContext } from "../ContextStore";
import Header from "./Header";
import Footer from "./Footer";

export default function Dashboard() {
  const { name, setName } = useUserContext();
  console.log(name);

  return (
    <div className="dashboard">
      <div>Dashboard</div>
    </div>
  );
}
