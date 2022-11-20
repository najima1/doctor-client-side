import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Authcontext/ContextProvider";

//password reset component
//===============================================
const Password_modal = () => {
  const { resetPassword } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const passwordHandler = (data) => {
    resetPassword(data.email)
      .then(() => {
        toast.success("Check your email..");
        reset();
      })
      .catch((e) => toast.error(e.message));
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
          <h3 className="text-lg font-bold">Reset password</h3>

          {/* reset password section */}
          <div className="">
            <form
              onSubmit={handleSubmit(passwordHandler)}
              className="w-full max-w-xl space-y-6 md:px-16  p-4 py-16"
            >
              {/* email */}
              <div className="relative ">
                <span className="absolute top-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
                  placeholder="Username"
                />
                {errors.email && (
                  <small className="text-red-400" role="alert">
                    {errors.email.message}
                  </small>
                )}
              </div>

              {/* submit button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-2 text-sm font-medium trackingWide textWhite capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password_modal;
