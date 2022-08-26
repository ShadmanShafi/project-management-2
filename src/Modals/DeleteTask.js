import React from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { memberDelete } from "../Redux/Members/actions";
import { taskDelete } from "../Redux/Tasks/actions";

export default function DeleteTask({ itemToDelete, id, hideModal, showModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteClick = (itemToDelete, id) => {
    navigate(-1);
    if (itemToDelete === "member") {
      dispatch(memberDelete(id));
    } else if (itemToDelete === "task") {
      dispatch(taskDelete(id));
    }
  };

  return (
    <ReactModal isOpen={showModal}>
      <div className="modal-delete">
        <text className="modal-text">Do you want to delete this item?</text>
        <div className="modal-row">
          <button
            className="modal-button"
            onClick={() => handleDeleteClick(itemToDelete, id)}
          >
            Yes
          </button>
          <button className="modal-button" onClick={hideModal}>
            No
          </button>
        </div>
      </div>
    </ReactModal>
  );
}
