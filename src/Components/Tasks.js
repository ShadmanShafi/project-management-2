import { useNavigate } from "react-router-dom";
// import { useUserContext } from "../ContextStore";
import { useSelector } from "react-redux";

export default function Tasks() {
  const navigate = useNavigate();
  // const { taskList, memberList } = useUserContext();
  const memberList = useSelector((state) => state.members);
  const taskList = useSelector((state) => state.tasks);

  const handleTaskAddClick = () => {
    navigate("/task-add");
  };

  const handleTaskItemClick = (id) => {
    navigate(`/task-detail-${id}`);
  };

  const handleMemberItemClick = (member) => {
    memberList.map((item) => {
      if (item.name === member) navigate(`/member-detail-${item.id}`);
    });
  };

  return (
    <div className="tasks">
      <p className="tasks-bold-text">All Tasks</p>
      <br />
      <br />
      <p className="tasks-text">You will find all tasks here.</p>
      <br />
      <br />
      <br />
      <br />
      <div className="tasks-row">
        <p className="tasks-bold-text">Here are all tasks:</p>
        <button className="tasks-button" onClick={handleTaskAddClick}>
          Add new
        </button>
      </div>
      <br />
      <br />
      <br />
      {taskList.length > 0 ? (
        <ol type="1" className="tasks-list">
          {taskList.map((item, index) => (
            <li className="tasks-list-item" key={item.id}>
              <div className="task-item-left">
                <p className="tasks-list-item-children no-underline">
                  {index + 1}.
                </p>
                <button
                  className="tasks-list-item-children tasks-list-item-children-hover"
                  onClick={() => handleTaskItemClick(item.id)}
                >
                  {item.title}
                </button>
              </div>
              <button
                className="tasks-list-item-children tasks-list-item-children-hover"
                onClick={() => handleMemberItemClick(item.member)}
              >
                {item.member}
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
