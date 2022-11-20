import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authcontext/ContextProvider";
import logo from "../../image/Logo.svg";
import "./header.css";

const Header = () => {
  const [navToggle, setNavtoggle] = useState(false);
  const { user, loadin, log_out_user } = useContext(AuthContext);
  const navigate = useNavigate();

  //logout handler
  const logoutHandler = () => {
    log_out_user()
      .then(() => {
        toast.success("User log out successfull");
        navigate("/home");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="header-banner">
      <nav className="relative bgWhite shadow">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link
                className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:textWhite lg:text-3xl hover: dark:hover:text-gray-300"
                to="#"
              >
                <img src={logo} alt="" />
              </Link>
            </div>

            {/* <!-- Mobile menu button x-cloak @click="isOpen = !isOpen" --> */}
            <div className="flex lg:hidden gap-x-3">
              <button
                onClick={() => setNavtoggle(!navToggle)}
                type="button"
                className=" hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {navToggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>

              {/* drowyer nav */}
              <div>
                <label htmlFor="my-drawer-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> x-cloak :className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" */}
          <div
            className={
              navToggle
                ? "opacity-0 -translate-x-full hidden"
                : "translate-x-0 opacity-100 transition-opacity block" +
                  "absolute inset-x-0 z-20 w-full px-1 py-4 transition-all duration-300 ease-in-out bgWhite md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
            }
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                className="py-2  md:py-2 px-1 transition-colors duration-300 transform  hover:bg-gray-200 md:px-3 md:my-0"
                to="/home"
              >
                Home
              </Link>

              <Link
                className="py-2 md:py-2 px-1 transition-colors duration-300 transform  hover:bg-gray-200 md:px-3 md:my-0"
                to="#"
              >
                About
              </Link>
              <Link
                to="/appointment"
                className="py-2 md:py-2 px-1 transition-colors duration-300 transform  hover:bg-gray-200 md:px-3 md:my-0"
              >
                Appointment
              </Link>
              <Link
                className="py-2 md:py-2 px-1 transition-colors duration-300 transform  hover:bg-gray-200 md:px-3 md:my-0"
                to="#"
              >
                Reviews
              </Link>
              <Link
                className="py-2 md:py-2 px-1 transition-colors duration-300 transform  hover:bg-gray-200 md:px-3 md:my-0"
                to="/deshboard"
              >
                Deshboard
              </Link>
              {user?.uid ? (
                <button
                  onClick={() => logoutHandler()}
                  type="button"
                  className="my-0 py-1 text-center mb-2 md:mb-0 md:py-2  inline-block transition-colors duration-300 transform  hover:bg-gray-200 md:px-5 rounded md:my-0 bg-orange-400"
                >
                  Log out
                </button>
              ) : (
                <Link
                  to="/signup"
                  className="my-0 py-1 text-center mb-2 md:mb-0 md:py-2  inline-block transition-colors duration-300 transform  hover:bg-gray-200 md:px-5 rounded md:my-0 bg-teal-400"
                >
                  Sign up
                </Link>
              )}
            </div>

            <div className="md:block">
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  {user?.uid ? (
                    <img
                      src={user?.photoURL}
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  )}
                </div>

                <h3 className="mx-2 text-gray-700 dark:text-gray-600 lg:hidden">
                  {user?.uid ? `${user?.displayName}` : ""}
                </h3>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
