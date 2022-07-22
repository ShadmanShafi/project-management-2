import React from "react";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/task-add");
  };

  return (
    <div className="tasks">
      <p className="tasks-bold-text">All task</p>
      <br />
      <br />
      <p className="tasks-text">You will find all tasks here.</p>
      <br />
      <br />
      <br />
      <br />
      <div className="tasks-row">
        <p className="tasks-bold-text">Here is all tasks:</p>
        <button className="tasks-button" onClick={handleAddClick}>
          Add new
        </button>
      </div>
      <br />
      <br />
      <br />
      <ul>
        <li className="tasks-row tasks-list">Conditional Rendering of a list</li>
        <li className="tasks-row tasks-list">Conditional Rendering of a list</li>
      </ul>
    </div>
  );
}
