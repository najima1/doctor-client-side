import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const data = useLoaderData();
  const userInfo = data.data;
  console.log(data.data);
  return (
    <div>
      <h1>
        Payment for <span className="text-teal-400">{userInfo.treatment}</span>
      </h1>
    </div>
  );
};

export default Payment;
