import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authcontext/ContextProvider";

const Addmin_appointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/booking?email=${user?.email}`;

  const { data: booking = [] } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.data;
    },
  });
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="md:text-xl">Appointment</h1>
        <span className="border rounded py-2 px-6 capitalize">may 12 00</span>
      </div>

      {/* table */}
      <div>
        <div className="overflow-x-auto mt-3">
          <table className="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Month</th>
                <th>Time</th>
                <th>Pyament</th>
              </tr>
            </thead>
            <tbody className="h-[30%] overflow-hidden ">
              {/* <!-- row 1 --> */}
              {booking.map((list, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{list.name}</th>
                  <th>{list.month}</th>
                  <th>{list.hours}</th>
                  <th>
                    {list.price && (
                      <Link to={`/deshboard/payment/${list._id}`}>
                        {" "}
                        <button className="btn">Pay</button>
                      </Link>
                    )}
                    {list.price && list.paid && <button>Paid</button>}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Addmin_appointment;
