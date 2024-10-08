import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Transition } from "@headlessui/react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const gotoBtn = () => {
    window.scrollTo({ top: 2000, left: 0, behavior: "smooth" });
  };

  const active =
    "text-white mx-1 font-medium border-b-2 border-white-900 pb-1 bg-blue-900  transition     hover:bg-opacity-40  shadow-md rounded-md px-2  lg:text-white    ";

  const normal =
    "  mx-1 text-white-600 font-medium font-bold focus:text-white p-0 lg:text-blue-800   ";
  const dropactive =
    "text-white mx-1 font-medium border-b-2 border-white-900 pb-1 bg-white  transition     hover:bg-opacity-40  shadow-md rounded-md px-2  lg:text-blue-800    ";

  const dropnormal =
    "  mx-1 text-white-600 font-medium font-bold   p-0 lg:text-white   ";
  const navItem = (
    <>
      <li className="nav-item p-2 list-none 	">
        <NavLink
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/home"
        >
          HOME
        </NavLink>
      </li>

      <li className="dropdown dropdown-hover hover:border-none   nav-item p-2 list-none  text-white    ">
        <NavLink
          className="mx-1 text-white-600   font-bold   p-0 lg:text-blue-800"
          onClick={gotoBtn}
          to="/home"
        >
          SERVICES
        </NavLink>
      </li>

      {/* <li className="nav-item p-2 	list-none">
        <NavLink
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? `${active}` : `${normal} `)}
          to="/destination"
        >
          DESTINATION
        </NavLink>
      </li> */}
      <li className="dropdown dropdown-hover hover:border-none   nav-item p-2 list-none  text-white    ">
        <NavLink className="mx-1 text-white-600   font-bold   p-0 lg:text-blue-800">
          DESTINATION
        </NavLink>

        <ul
          tabIndex={0}
          className="z-50 w-52 dropdown-content menu p-2 shadow  rounded-box lg:w-52 bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D] bg-opacity-50     "
          // style={{ backgroundColor: "#3E84DC" }}
        >
          <li className="nav-item p-2">
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? `${dropactive}` : `${dropnormal}`
              }
              to="/uk"
            >
              UK
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? `${dropactive}` : `${dropnormal}`
              }
              to="/australia"
            >
              AUSTRALIA
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? `${dropactive}` : `${dropnormal}`
              }
              to="/usa"
            >
              USA
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? `${dropactive}` : `${dropnormal}`
              }
              to="/canada"
            >
              CANADA
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? `${dropactive}` : `${dropnormal}`
              }
              to="/dubai"
            >
              DUBAI{" "}
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? `${dropactive}` : `${dropnormal}`
              }
              to="/ireland"
            > 
              IRELAND
            </NavLink>
          </li>
          {/* <li className="nav-item p-2">
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? `${dropactive}` : `${dropnormal}`
              }
              to="/cyprus"
            > 
              CYPRUS
            </NavLink>
          </li> */}
          {/* <li className="nav-item p-2">
            <NavLink onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? `${dropactive}` : `${dropnormal}`
              }
              to="/rbg"
            >
              ROMANIA
            </NavLink>
          </li> */}
        </ul>
      </li>
      {/* <li className="nav-item p-2 	list-none">
        <NavLink
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? `${active}` : `${normal} `)}
          to="/blog"
        >
          BLOG
        </NavLink>
      </li> */}

      <li className="nav-item p-2 list-none	">
        <NavLink
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/about"
        >
          ABOUT US
        </NavLink>
      </li>

      <li className="nav-item p-2  	list-none">
        <NavLink
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/contact"
        >
          CONTACTS
        </NavLink>
      </li>
      {/* <li className="nav-item p-2  	list-none">
        <NavLink
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/faq"
        >
          FAQ
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div>
      <div className="sticky top-0 z-50 header">
      {/* ////////////////new nav  */}

      <nav className="lg:bg-gray-100 shadow-lg border-l-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold text-xl">
            <img src={logo} className="w-24 rounded-lg" alt="" />
            {/* <p className="text-black">LOGO</p> */}
          </div>
          <div className="hidden md:flex space-x-4">
            {/* Add other sections here */}
            {navItem}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Dropdown */}
        <Transition
          show={isOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="md:hidden absolute top-0 left-0 w-full h-screen  bg-gradient-to-r from-[#575be8] via-[#160a2c] to-[#38235D] z-50">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-black text-xl font-bold bg-white rounded-full  p-2  focus:outline-none"
              >
                X
              </button>
            </div>
            <div className="flex flex-col items-center  mt-2  text-white">
              {navItem}
            </div>
          </div>
        </Transition>
      </nav>
    </div>
    </div>
  );
};

export default Nav;
