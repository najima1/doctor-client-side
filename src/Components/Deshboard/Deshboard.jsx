import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from ".././Pages/Header/Header";
import { AuthContext } from "../Authcontext/ContextProvider";

const Deshboard = () => {
  return (
    <div>
      <Header />

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content py-2 px-5">
          {/* <!-- Page content here --> */}
          {/* deshboard outlet content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#FFFFFF] text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/deshboard/addminappointment">Appointment</Link>
            </li>
            <li>
              <Link to="/deshboard/adddoctors">Add doctor</Link>
            </li>
            <li>
              <Link to="/deshboard/manage_doctor">Manage doctor</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Deshboard;
