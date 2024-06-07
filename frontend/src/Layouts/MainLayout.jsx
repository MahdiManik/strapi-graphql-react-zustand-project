import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "../components/ui/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-fixed bg-black">
            <Navbar />
          </div>
          {/* Page content here */}
          <div className="w-full max-w-[1200px] mx-auto px-8">{children}</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar here */}
          <Sidebar />
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
