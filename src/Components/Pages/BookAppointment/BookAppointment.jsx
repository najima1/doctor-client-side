import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Form_modal from "../Form_modal/Form_modal";
import Spinner from "../Spinner/Spinner";
import "./bookAppointment.css";

const BookAppointment = ({ timer }) => {
  const [modalData, setModalData] = useState(null);

  const {
    data: appointment = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointment", timer],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointment?date=${timer}`
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading) return <Spinner />;

  return (
    <div className=" container py-16">
      <div className="bookSingleCard">
        {appointment.map((time) => (
          <div key={time._id} className="md:shadow-xl p-4 py-11">
            <h1 className="text-center py-1 capitalize">
              <strong>{time.name}</strong>
              <strong className="block">Price : {time.price}</strong>
            </h1>
            <strong className="block text-center ">{time.slots[0]}</strong>
            <span className="text-center block py-1">
              {time.slots.length == 1
                ? time.slots.length + " SPACE AVAILABLE"
                : time.slots.length + " SPACES AVAILABLE"}
            </span>
            <label
              onClick={() => setModalData(time)}
              htmlFor="my-modal-3"
              className="block py-2 mt-3 w-full bg-teal-300 rounded-sm text-center"
            >
              Book Appointment
            </label>
            {modalData && (
              <Form_modal
                modalData={modalData}
                currentTime={time.slots[0]}
                timer={timer}
                setModalData={setModalData}
                refetch={refetch}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookAppointment;
