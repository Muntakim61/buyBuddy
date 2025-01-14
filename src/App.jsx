import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <div>
        <NavItems />
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
