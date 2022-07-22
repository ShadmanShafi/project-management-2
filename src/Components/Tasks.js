import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../ContextStore";

export default function Tasks() {
  const navigate = useNavigate();
  const { taskList } = useUserContext();
  console.log(taskList);

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
      {taskList.length > 0 ? (
      <ol type="1" className="tasks-list">
        {taskList.map((item) => (
          <li className="tasks-list-item" key={item.uid}>
            <div className="task-item-left">
              <p className="tasks-list-item-children no-underline">{item.uid}.</p>
              <button className="tasks-list-item-children">{item.title}</button>
            </div>
            <button className="tasks-list-item-children">{item.member}</button>
          </li>
        ))}
      </ol> ) : (<h4 className="tasks-text">There are no tasks available.</h4>)}
    </div>
  );
}
