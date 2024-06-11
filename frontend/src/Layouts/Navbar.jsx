import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto font-poppins">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-3 ">
        <Link to={"/"} className="flex gap-1 justify-start items-center">
          <img className="w-14 h-14" src={logo} alt="" />
          <h3 className="text-3xl font-bold text-white py-3">
            <span className="text-[#00d8ba]">mahdi</span>Hasan.
          </h3>
        </Link>
      </div>
      <div className="flex-none hidden lg:block ">
        <div className="flex gap-8 text-white  ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn bg-orange-400  px-4 rounded-lg btn-sm"
                : " btn btn-ghost hover:bg-orange-400 px-4 rounded-lg btn-sm"
            }
            to={"/"}
          >
            home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn bg-orange-400  px-4 rounded-lg btn-sm font-bold"
                : "px-4 rounded-lg btn-sm font-bold btn btn-ghost hover:bg-orange-400"
            }
            to={"/about"}
          >
            About Me
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn bg-orange-400  px-4 rounded-lg btn-sm font-bold"
                : "px-4 rounded-lg btn-sm font-bold btn btn-ghost hover:bg-orange-400"
            }
            to={"/blog"}
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn bg-orange-400 px-4 rounded-lg btn-sm font-bold "
                : "px-4 rounded-lg btn-sm font-bold btn btn-ghost hover:bg-orange-400"
            }
            to={"/register"}
          >
            Sign Up
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn bg-orange-400 px-4 rounded-lg btn-sm font-bold "
                : "px-4 rounded-lg btn-sm font-bold btn btn-ghost hover:bg-orange-400"
            }
            to={"/login"}
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
