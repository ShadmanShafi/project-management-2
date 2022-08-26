import React from "react";
import { useSelector } from "react-redux";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Layout(props) {
  const name = useSelector((state) => state.user.name)

  return (
    <div>
      {name && <Header />}
      {props.children}
      {name && <Footer />}
    </div>
  );
}
