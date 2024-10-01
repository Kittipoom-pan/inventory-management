import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-gray-200">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
