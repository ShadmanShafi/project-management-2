import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../ContextStore";

export default function Members() {
  const navigate = useNavigate();
  const { taskList, memberList } = useUserContext();

  const handleMemberAddClick = () => {
    navigate("/member-add");
  };

  const handleMemberItemClick = (id) => {
    navigate(`/member-detail-${id}`);
  };

  return (
    <div className="tasks">
      <p className="tasks-bold-text">All members</p>
      <br />
      <br />
      <br />
      <br />
      <div className="tasks-row">
        <p className="tasks-bold-text">Here are all members:</p>
        <button className="tasks-button" onClick={handleMemberAddClick}>
          Add new
        </button>
      </div>
      <br />
      <br />
      <br />
      {memberList.length > 0 ? (
        <ol type="1" className="tasks-list">
          {memberList.map((item) => (
            <li className="tasks-list-item" key={item.uid}>
              <div className="task-item-left">
                <p className="tasks-list-item-children no-underline">
                  {item.uid}.
                </p>
                <button
                  className="tasks-list-item-children tasks-list-item-children-hover"
                  onClick={() => handleMemberItemClick(item.uid)}
                >
                  {item.member}
                </button>
              </div>
              <button className="tasks-list-item-children tasks-list-item-children-hover">
                {taskList.filter((task) => task.member === item.member).length} tasks
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <h4 className="tasks-text">There are no tasks available.</h4>
      )}
    </div>
  );
}
