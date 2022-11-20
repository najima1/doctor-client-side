import React from "react";

const ConfarmationModal = ({ closeModal, successAction, data }) => {
  return (
    <div>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <a href="#" onClick={() => successAction(data)} className="btn">
              Yay!
            </a>
            <button onClick={closeModal} className="btn">
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfarmationModal;
