import { useUserContext } from "../ContextStore";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskDetail() {
  const { taskList, deleteTask, task } = useUserContext();
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const handleDeleteTaskClick = () => {
    deleteTask(task.id);
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
      <p className="tasks-bold-text">Task Name: {task.title}</p>
      <br />
      <p className="tasks-bold-text">Task Details: {task.details ? task.details : "Not Available"}</p>
      <br />
      <p className="tasks-bold-text">Member Assigned: {task.member}</p>
    </div>
  );
}
