import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "./context";

const Modal = () => {

  const { isModalOpen, toggleModal } = useContext(AppContext)

  return (
    <div
      className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}
    >
      <div className="modal-container">
        <h2>Modal Content</h2>
        <button className="close-modal-btn" onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
