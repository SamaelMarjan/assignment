import React from "react";
import Logo from "./compopnents/Logo";

import Navbar from "./compopnents/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <div className="relative">
      <Navbar />
      <Home />
      <Logo />
    </div>
    </>
  );
}

export default App;
