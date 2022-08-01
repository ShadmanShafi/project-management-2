import React from "react";
import ReactModal from "react-modal";

export default function DeleteTask({ handleDelete, hideModal, showModal }) {
  return (
    <ReactModal isOpen={showModal}>
      <div className="modal-delete">
        <text className="modal-text">Do you want to delete this item?</text>
        <div className="modal-row">
          <button className="modal-button" onClick={handleDelete}>Yes</button>
          <button className="modal-button" onClick={hideModal}>no</button>
        </div>
      </div>
    </ReactModal>
  );
}
