import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

function SiteLayout() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <main>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SiteLayout;
