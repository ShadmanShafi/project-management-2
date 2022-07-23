import { useLayoutEffect } from "react";
import { useUserContext } from "../ContextStore";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskDetail() {
  const { taskList } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const currentTitle = taskList.find(
    (item) => parseInt(item.uid) === parseInt(id)
  );
  const currentDetails = taskList.find(
    (item) => parseInt(item.uid) === parseInt(id)
  );

  const handleBackClick = () => {
    navigate("/tasks");
  };

  return (
    <div className="task-detail">
      <div className="task-detail-buttons">
        <button className="back-btn" onClick={handleBackClick}>
          Back
        </button>
        <div>
          <button className="task-detail-right-btns">Edit</button>
          <button className="task-detail-right-btns">Delete</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className="tasks-bold-text">{currentTitle.title}</p>
      <br />
      <p className="tasks-text">{currentDetails.details}</p>
    </div>
  );
}
