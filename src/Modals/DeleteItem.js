import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import deleteMember from "../Redux/Members/thunk/deleteMember";
import deleteTask from "../Redux/Tasks/thunk/deleteTask";

export default function DeleteItem({
  itemToDelete,
  userToken,
  id,
  hideModal,
  showModal,
}) {
  const navigate = useNavigate();

  const handleDeleteClick = (itemToDelete, userToken, id) => {
    if (itemToDelete === "member") {
      deleteMember(userToken, id);
    } else if (itemToDelete === "task") {
      deleteTask(userToken, id);
    }
    navigate(-1);
  };

  return (
    <ReactModal isOpen={showModal} ariaHideApp={false}>
      <div className="modal-delete">
        <text className="modal-text">Do you want to delete this item?</text>
        <div className="modal-row">
          <button
            className="modal-button"
            onClick={() => handleDeleteClick(itemToDelete, userToken, id)}
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
