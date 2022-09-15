import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { taskGet } from "../Redux/Tasks/actions";
import { memberGet } from "../Redux/Members/actions";
import { useEffect } from "react";
import fetchTasks from "../Redux/Tasks/thunk/fetchTasks";
import getSingleMember from "../Redux/Members/thunk/getSingleMember";
import getSingleTask from "../Redux/Tasks/thunk/getSingleTask";

export default function Tasks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.tasks);
  const userToken = useSelector((state) => state.user.token);


  useEffect(() => {
    setTimeout(() => {
      fetchTasks(dispatch, userToken);
    }, 500);
  }, [dispatch]);

  const handleTaskAddClick = () => {
    navigate("/task-add");
  };

  const handleTaskItemClick = (item) => {
    // dispatch(taskGet(item.id, item.title, item.description, item?.Member.name));
    getSingleTask(dispatch, userToken, item.id)
    navigate(`/task-detail-${item.id}`);
  };

  const handleMemberItemClick = (member) => {
    // console.log(member.Member.name);
    //   memberList.map((item) => {
    //     if (item.name === member) {
    getSingleMember(dispatch, userToken, member.Member.id);
    navigate(`/member-detail-${member.Member.id}`);
    // dispatch(memberGet(member.Member.id, member.Member.name));
    //     }
    //   });
  };

  return (
    <div className="tasks">
      <p className="tasks-bold-text">All Tasks</p>
      <br />
      <br />
      <p className="tasks-text">You'll find all the Tasks, listed below.</p>
      <br />
      <br />
      <br />
      <br />
      <div className="tasks-row">
        <p className="tasks-bold-text">Here is the list of all the Tasks:</p>
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
                  onClick={() => handleTaskItemClick(item)}
                >
                  {item.title}
                </button>
              </div>
              <button
                className="tasks-list-item-children tasks-list-item-children-hover"
                onClick={() => handleMemberItemClick(item)}
              >
                {item?.Member?.name}
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <h4 className="tasks-text">No Tasks have been added yet.</h4>
      )}
    </div>
  );
}
