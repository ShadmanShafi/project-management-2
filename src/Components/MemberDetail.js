import { useUserContext } from "../ContextStore";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberDetail() {
  const { taskList, memberList, deleteMember, member } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();
  let listId = 0;

  const currentMember = memberList.find(
    (item) => parseInt(item.uid) === parseInt(id)
  );

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleTaskItemClick = (id) => {
    navigate(`/task-detail-${id}`);
  };

  const handleDeleteMemberClick = () => {
    // console.log(currentMember)
    deleteMember(currentMember);
    navigate(-1);
  }

  const handleEditMemberClick = () => {

  }

  return (
    <div className="task-detail">
      <div className="task-detail-buttons">
        <button className="back-btn" onClick={handleBackClick}>
        ← Back
        </button>
        <div>
          <button className="task-detail-right-btns" onClick={handleEditMemberClick}>Edit</button>
          <button className="task-detail-right-btns" onClick={handleDeleteMemberClick}>Delete</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className="tasks-bold-text">{currentMember.member}</p>
      <br />
      <br />
      <p className="tasks-text">List of tasks assigned:</p>
      <br />
      <br />
      <ol type="1" className="tasks-list">
        {taskList.map((item) => {
          if (item.member === currentMember.member) {
            {
              listId++;
            }
            return (
              <li className="tasks-list-item" key={item.uid}>
                <div className="task-item-left">
                  <p className="tasks-list-item-children no-underline">
                    {listId}.
                  </p>
                  <button
                    className="tasks-list-item-children tasks-list-item-children-hover"
                    onClick={() => handleTaskItemClick(item.uid)}
                  >
                    {item.title}
                  </button>
                </div>
              </li>
            );
          }
        })}
        <h4 className="tasks-text">
          {listId === 0 ? "No tasks assigned as of yet" : ""}
        </h4>
      </ol>
    </div>
  );
}
