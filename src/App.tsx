import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/NavBar/Navbar";
import { navLinks } from "./data/Navbar.data";

function App() {
  return (
    <>
      <Navbar links={navLinks} title={"Sergio Riera"} />
      <Home />
    </>
  );
}

export default App;
