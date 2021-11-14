import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = ({ isShowingModal, showModal }) => {
  return (
    <div
      className={isShowingModal ? "modal-overlay show-modal" : "modal-overlay"}
    >
      <div className="modal-container">
        <h2>Modal Content</h2>
        <button className="close-modal-btn" onClick={() => showModal()}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
