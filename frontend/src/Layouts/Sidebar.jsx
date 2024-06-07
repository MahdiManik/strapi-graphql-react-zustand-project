import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 bg-base-200 menu p-4 w-80 min-h-full">
      <NavLink
        className={({ isActive }) =>
          isActive ? "btn btn-md btn-primary" : "btn btn-ghost btn-md"
        }
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "btn btn-md btn-primary" : "btn btn-ghost btn-md"
        }
        to={"/contact"}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Sidebar;
