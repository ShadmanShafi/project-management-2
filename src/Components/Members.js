import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { memberGet } from "../Redux/Members/actions"; 

export default function Members() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.members.members);
  const taskList = useSelector((state) => state.tasks.tasks);

  const handleMemberAddClick = () => {
    navigate("/member-add");
  };

  const handleMemberItemClick = (id, name) => {
    navigate(`/member-detail-${id}`);
    dispatch(memberGet(id, name))
  };

  return (
    <div className="tasks">
      <p className="tasks-bold-text">All Members</p>
      <br />
      <br />
      <p className="tasks-text">You will find all members here.</p>
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
          {memberList.map((item, index) => (
            <li className="tasks-list-item" key={item.id}>
              <div className="task-item-left">
                <p className="tasks-list-item-children no-underline">
                  {index+1}.
                </p>
                <button
                  className="tasks-list-item-children tasks-list-item-children-hover"
                  onClick={() => handleMemberItemClick(item.id, item.name)}
                >
                  {item.name}
                </button>
              </div>
              <p className="tasks-list-item-children tasks-list-item-children-no-hover">
                {taskList.filter((task) => task.member === item.name).length} tasks
              </p>
            </li>
          ))}
        </ol>
      ) : (
        <h4 className="tasks-text">There are no members available.</h4>
      )}
    </div>
  );
}
