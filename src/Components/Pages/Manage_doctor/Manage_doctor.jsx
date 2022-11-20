import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfarmationModal from "../ConfarmationModal/ConfarmationModal";

const Manage_doctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const url = `http://localhost:5000/doctors`;
      const res = await fetch(url);
      const data = await res.json();
      return data.data;
    },
  });

  const successAction = (data) => {
    fetch(`http://localhost:5000/doctors/${data._id}`, {
      method: "DELETE",
    })
      .then((e) => e.json())
      .then((data) => {
        toast.success("doctor deleted" + data.name);
        refetch();
      });
  };

  return (
    <div>
      <h1 className="text-center py-4">Manage doctor</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {doctors.map((doctor, i) => (
                <tr key={doctor._id}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      className="w-6 h-6 rounded-full"
                      src={doctor.image}
                      alt=""
                    />
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.catagory}</td>
                  <td>
                    <a
                      onClick={() => setDeletingDoctor(doctor)}
                      className="text-red-400 btn"
                      href="#my-modal-2"
                    >
                      delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingDoctor && (
        <ConfarmationModal
          successAction={successAction}
          closeModal={closeModal}
          data={deletingDoctor}
        />
      )}
    </div>
  );
};

export default Manage_doctor;
