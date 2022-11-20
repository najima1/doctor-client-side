import React from "react";
import "./department.css";

const Departments = () => {
  return (
    <div className="container my-24">
      <h1 className="text-center text-4xl lg:text-5xl py-7 text-[#182C61]">
        Our Departments
      </h1>
      <div className="department_box py-6">
        <div className="shadow-xl text-center py-4 rounded">
          <span className="text-6xl flex items-center justify-center bg-[#fd79a8] text-white  rounded-full w-24 h-24 mx-auto">
            <i className="fas fa-tooth"></i>
          </span>
          <h1 className="py-5 text-[#a4b0be]">Dental Care</h1>
        </div>
        <div className="shadow-xl text-center py-4 rounded">
          <span className="text-6xl flex items-center justify-center bg-[#fd79a8] text-white  rounded-full w-24 h-24 mx-auto">
            <i className="fas fa-heartbeat"></i>
          </span>
          <h1 className="py-5 text-[#a4b0be]">Heart Caring</h1>
        </div>
        <div className="shadow-xl text-center py-4 rounded">
          <span className="text-6xl flex items-center justify-center bg-[#fd79a8] text-white  rounded-full w-24 h-24 mx-auto">
            <i className="fas fa-virus-slash"></i>
          </span>
          <h1 className="py-5 text-[#a4b0be]">Covid - 19 Test</h1>
        </div>
        <div className="shadow-xl text-center py-4 rounded">
          <span className="text-6xl flex items-center justify-center bg-[#fd79a8] text-white  rounded-full w-24 h-24 mx-auto">
            <i className="fab fa-researchgate"></i>
          </span>
          <h1 className="py-5 text-[#a4b0be]">Research & Test</h1>
        </div>
      </div>
    </div>
  );
};

export default Departments;
