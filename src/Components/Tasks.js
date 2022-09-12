import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { taskGet } from "../Redux/Tasks/actions";
import { memberGet } from "../Redux/Members/actions";
import { useEffect } from "react";
import fetchTasks from "../Redux/Tasks/thunk/fetchTasks";

export default function Tasks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.members.members);
  const taskList = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchTasks);
    }, 500);
  }, [dispatch]);

  const handleTaskAddClick = () => {
    navigate("/task-add");
  };

  const handleTaskItemClick = (id, title, description, member) => {
    navigate(`/task-detail-${id}`);
    dispatch(taskGet(id, title, description, member));
  };

  const handleMemberItemClick = (member) => {
    memberList.map((item) => {
      if (item.name === member) {
        navigate(`/member-detail-${item.id}`);
        dispatch(memberGet(item.id, item.name));
      }
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
            <li className="tasks-list-item" key={index}>
              <div className="task-item-left">
                <p className="tasks-list-item-children no-underline">
                  {index + 1}.
                </p>
                <button
                  className="tasks-list-item-children tasks-list-item-children-hover"
                  onClick={() =>
                    handleTaskItemClick(
                      item.id,
                      item.title,
                      item.description,
                      item.member
                    )
                  }
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
