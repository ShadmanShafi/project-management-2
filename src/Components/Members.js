import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { memberGet } from "../Redux/Members/actions";
import { useEffect } from "react";
import fetchMembers from "../Redux/Members/thunk/fetchMembers";

export default function Members() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.tasks);
  const memberList = useSelector((state) => state.members.members);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchMembers);
    }, 500);
  }, [dispatch]);

  const handleMemberAddClick = () => {
    navigate("/member-add");
  };

  const handleMemberItemClick = (id, name) => {
    navigate(`/member-detail-${id}`);
    dispatch(memberGet(id, name));
  };

  return (
    <div className="tasks">
      <p className="tasks-bold-text">All Members</p>
      <br />
      <br />
      <p className="tasks-text">You'll find all the Members, listed below.</p>
      <br />
      <br />
      <br />
      <br />
      <div className="tasks-row">
        <p className="tasks-bold-text">Here is the list of all the Members:</p>
        <button className="tasks-button" onClick={handleMemberAddClick}>
          Add new
        </button>
      </div>
      <br />
      <br />
      <br />
      {memberList.length > 0 ? (
        <ol type="1" className="tasks-list">
          {memberList.map((item, index) => (
            <li className="tasks-list-item" key={item.id}>
              <div className="task-item-left">
                <p className="tasks-list-item-children no-underline">
                  {index + 1}.
                </p>
                <button
                  className="tasks-list-item-children tasks-list-item-children-hover"
                  onClick={() => handleMemberItemClick(item.id, item.name)}
                >
                  {item.name}
                </button>
              </div>
              <p className="tasks-list-item-children tasks-list-item-children-no-hover">
                {taskList.filter((task) => task.member === item.name).length}{" "}
                tasks
              </p>
            </li>
          ))}
        </ol>
      ) : (
        <h4 className="tasks-text">No Members have been added yet.</h4>
      )}
    </div>
  );
}
