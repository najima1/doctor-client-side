import React, { createContext, useState } from "react";
import logo from "../../image/image-1.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import BookAppointment from "../BookAppointment/BookAppointment";

const Appointment = () => {
  const [selected, setSelectedDate] = useState(new Date());
  const timer = format(selected, "PP");

  return (
    <div>
      <section className="">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-2xl font-bold leading-none">
              <p>You picked {timer}</p>
            </h1>

            {/* day picker */}
            <div className="mx-auto">
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelectedDate}
              />
            </div>
          </div>

          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={logo}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      {/* book appointment */}
      <BookAppointment timer={timer} />
    </div>
  );
};

export default Appointment;
