import { format } from "date-fns";
import React, { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Authcontext/ContextProvider";

const Form_modal = ({
  modalData,
  currentTime,
  timer,
  setModalData,
  refetch,
}) => {
  const slotsTime = modalData.slots;
  const { user } = useContext(AuthContext);
  const month = useRef();
  const hours = useRef();
  const name = useRef();
  const phone = useRef();
  const email = useRef();
  const dises = useRef();

  const modalHandler = (e) => {
    e.preventDefault();
    const validMonth = month.current.value;
    const validHours = hours.current.value;
    const validname = name.current.value;
    const validPhone = phone.current.value;
    const validEmail = email.current.value;
    const validDises = dises.current.value;

    const userInfo = {
      month: validMonth,
      hours: validHours,
      name: validname,
      phone: validPhone,
      email: validEmail,
      treatment: validDises,
    };

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Booking time successfull");
        e.target.reset();
        setModalData(null);
        refetch();
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <input
            type="text"
            ref={dises}
            disabled
            defaultValue={modalData.name}
            className="text-lg font-bold py-2"
          />

          {/* modal form */}
          <form onSubmit={(e) => modalHandler(e)}>
            <div className="text-sm space-y-5">
              <input
                type="text"
                name="time"
                id="time"
                placeholder="time"
                disabled
                value={timer}
                ref={month}
                className="w-full px-4 py-3 rounded-md bg-gray-100"
              />

              <select className="w-full px-4 py-3 rounded-md bg-gray-100">
                {slotsTime.map((time, index) => (
                  <option ref={hours} value={time} key={index}>
                    {time}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                ref={name}
                defaultValue={user?.displayName}
                disabled
                className="w-full px-4 py-3 rounded-md bg-gray-100 outline-none block"
              />

              <input
                type="text"
                name="email"
                id="email"
                ref={email}
                defaultValue={user?.email}
                disabled
                placeholder="enter email"
                className="w-full px-4 py-3 rounded-md bg-gray-100 outline-none block"
              />
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="enter phone"
                ref={phone}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-100 outline-none block"
              />
              <button
                type="submit"
                className="w-[40%] mx-auto bg-teal-400 py-2 rounded-sm text-center mt-10 text-white block"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form_modal;
