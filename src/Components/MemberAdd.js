import { useNavigate } from "react-router-dom";

export default function MemberAdd() {
  const navigate = useNavigate();

  function handleCancelClick() {
    navigate(-1);
  }

  return (
    <div className="task-add">
      <p className="dashboard-bold-text">Add member</p>
      <br />
      <br />
      <textarea
        className="task-add-name"
        placeholder="Enter Member Name"
      ></textarea>
      <br />
      <p className="home-error-alert">*Member Name is required</p>
      <br />
      <br />

      <br />
      <div className="task-add-btn">
        <button className="tasks-button" onClick={handleCancelClick}>Cancel</button>
        <button className="tasks-button">Submit</button>
      </div>
    </div>
  )
}
