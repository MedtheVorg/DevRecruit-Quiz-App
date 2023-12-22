import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100  justify-between lg:px-16 lg:py-0 border-b-[1px] border-b-lightgray transition-all duration-300 ease-in-out ">
      {/*  logo */}
      <div className="navbar-start">
        <Link
          to={"/"}
          className="btn btn-ghost text-xl gap-0 hover:bg-transparent"
        >
          <Logo />
        </Link>
      </div>
      {/* desktop nav */}
      <div className="navbar-center hidden lg:flex h-full">
        <ul className="menu menu-horizontal px-1 gap-x-4 py-0 h-full">
          <li className="h-full">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-yellowish rounded-none hover:bg-[#ecece8a9] py-0 h-full inline-flex"
                  : "rounded-none border-b-2 border-transparent hover:border-b-yellowish hover:bg-[#ecece8a9] py-0 h-full inline-flex"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="h-full ">
            <NavLink
              to={"/info"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-yellowish rounded-none hover:bg-[#ecece8a9] py-0 h-full inline-flex"
                  : "rounded-none border-b-2 border-transparent hover:border-b-yellowish hover:bg-[#ecece8a9] py-0 h-full inline-flex"
              }
            >
              How it Works?
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-yellowish rounded-none hover:bg-[#ecece8a9] py-0 h-full inline-flex"
                  : "rounded-none border-b-2 border-transparent hover:border-b-yellowish hover:bg-[#ecece8a9] py-0 h-full inline-flex"
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      {/* mobile nav */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            //
            className=" menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 left-[-160px] visible opacity-100 "
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellowish/50 text-[#fff] rounded-none  py-2  transition-colors duration-300 ease-in-out"
                    : "hover:bg-yellowish/50 hover:text-[#fff] rounded-none  py-2  transition-colors duration-300 ease-in-out"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/info"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellowish/50 text-[#fff] rounded-none  py-2  transition-colors duration-300 ease-in-out"
                    : "hover:bg-yellowish/50 hover:text-[#fff] rounded-none  py-2  transition-colors duration-300 ease-in-out"
                }
              >
                How it Works?
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellowish/50 text-[#fff] rounded-none  py-2  transition-colors duration-300 ease-in-out"
                    : "hover:bg-yellowish/50 hover:text-[#fff] rounded-none  py-2  transition-colors duration-300 ease-in-out"
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
