import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../ContextStore";
import DeleteTask from "../Modals/DeleteTask";

export default function MemberDetail() {
  const navigate = useNavigate();
  const { taskList, getMemberInfo, editMember, deleteMember } =
    useUserContext();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const currentMember = useMemo(() => getMemberInfo(id),[]);
  const [form, setForm] = useState({
    uid: "",
    member: "",
  });

  useEffect(() => {
    if(currentMember) {
      setForm({
        uid: currentMember.uid,
        member: currentMember.member,
      });
    }
  }, currentMember);

  let listId = 0;

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleTaskItemClick = (id) => {
    navigate(`/task-detail-${id}`);
  };

  const handleEditMemberClick = () => {
    setIsEditMode(true);
  };

  const handleDeleteMemberClick = () => {
    deleteMember(currentMember);
    navigate(-1);
  };

  const onChangeFormValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formIsValid = form.member.trim().length > 0;

  return (
    <div className="task-detail">
      {showModal && (
        <DeleteTask
          handleDelete={handleDeleteMemberClick}
          hideModal={() => {
            setShowModal(false);
          }}
          showModal={showModal}
        />
      )}
      <div className="task-detail-buttons">
        <button className="back-btn" onClick={handleBackClick}>
          ← Back
        </button>
        {isEditMode ? (
          <div>
            <button
              className="task-detail-right-btns"
              onClick={() => {
                if (formIsValid) {
                  editMember(form);
                  setIsEditMode(false);
                }
              }}
            >
              Yes
            </button>
            <button
              className="task-detail-right-btns"
              onClick={() => {
                setIsEditMode(false);
              }}
            >
              No
            </button>
          </div>
        ) : (
          <div>
            <button
              className="task-detail-right-btns"
              onClick={handleEditMemberClick}
            >
              Edit
            </button>
            <button
              className="task-detail-right-btns"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      {isEditMode && (
        <div>
          <textarea
            className="task-add-name"
            placeholder="Enter Member Name"
            value={form.member}
            name="member"
            onChange={onChangeFormValue}
          ></textarea>
          {!formIsValid && (
            <p className="home-error-alert">*Member Name is required</p>
          )}
          <br />
          <br />
          <br />
        </div>
      )}
      {!isEditMode && (
        <div>
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
      )}
    </div>
  );
}
