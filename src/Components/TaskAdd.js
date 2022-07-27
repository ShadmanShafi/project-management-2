import { useNavigate } from "react-router-dom";

export default function TaskAdd() {
  const navigate = useNavigate();

  function handleCancelClick() {
    navigate(-1);
  }

  return (
    <div className="task-add">
      <p className="dashboard-bold-text">Add task</p>
      <br />
      <br />
      <textarea
        className="task-add-name"
        placeholder="Enter Task Name"
      ></textarea>
      <p className="home-error-alert">*Task Name is required</p>
      <br />
      <br />
      <textarea
        className="task-add-detail"
        placeholder="Enter Task Details"
      ></textarea>
      <br />
      <br />
      <br />
      <div className="task-add-row">
        <p className="dashboard-bold-text">Assigned to: </p>
        <p className="dashboard-bold-text">dropdown</p>
      </div>
      <br />
      <br />
      <div className="task-add-btn">
        <button className="tasks-button" onClick={handleCancelClick}>Cancel</button>
        <button className="tasks-button">Submit</button>
      </div>
    </div>
  );
}
