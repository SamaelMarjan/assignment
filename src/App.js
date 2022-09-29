import React from "react";
import Footer from "./compopnents/Footer";
import Logo from "./compopnents/Logo";

import Navbar from "./compopnents/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <div className="relative">
      <Navbar />
      <Home />
      <About />
      <Logo />
      <Footer />
    </div>
    </>
  );
}

export default App;
