import { useUserContext } from "../ContextStore";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskDetail() {
  const { taskList, deleteTask } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const currentTitle = taskList.find(
    (item) => parseInt(item.uid) === parseInt(id)
  );

  const currentDetails = taskList.find(
    (item) => parseInt(item.uid) === parseInt(id)
  );

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleDeleteTaskClick = () => {
    deleteTask(id);
    navigate(-1);
  } 

  const handleEditTaskClick = () => {

  }

  return (
    <div className="task-detail">
      <div className="task-detail-buttons">
        <button className="back-btn" onClick={handleBackClick}>
        ← Back
        </button>
        <div>
          <button className="task-detail-right-btns" onClick={handleEditTaskClick}>Edit</button>
          <button className="task-detail-right-btns" onClick={handleDeleteTaskClick}>Delete</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className="tasks-bold-text">Task Name: {currentTitle.title}</p>
      <br />
      <p className="tasks-text">Task Details: {currentDetails.details ? currentDetails.details : "Not Available"}</p>
    </div>
  );
}
