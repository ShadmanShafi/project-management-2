import React from "react";
import { useUserContext } from "./ContextStore";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Layout(props) {
  const {name} = useUserContext();

  return (
    <div>
      {name && <Header />}
      {props.children}
      {name && <Footer />}
    </div>
  );
}
