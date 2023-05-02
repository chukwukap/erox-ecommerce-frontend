import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  return (
    <div className="wrapper">
      <Header mobileMenuState={{ isMobileMenuActive, setIsMobileMenuActive }} />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
