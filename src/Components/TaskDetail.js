import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../ContextStore";
import DeleteTask from "../Modals/DeleteTask";

export default function TaskDetail() {
  const navigate = useNavigate();
  const { memberList, getTaskInfo, editTask, deleteTask } = useUserContext();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const currentTask = useMemo(() => getTaskInfo(id), [id]);
  const [form, setForm] = useState({
    uid: "",
    title: "",
    details: "",
    member: "",
  });

  useEffect(() => {
    if (currentTask) {
      setForm({
        uid: currentTask.uid,
        title: currentTask.title,
        details: currentTask.details,
        member: currentTask.member,
      });
    }
  }, currentTask);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleEditTaskClick = () => {
    setIsEditMode(true);
  };

  const handleDeleteTaskClick = () => {
    deleteTask(currentTask);
    navigate(-1);
  };

  const onChangeFormValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formIsValid = form.title.trim().length > 0;
  const MemberSelected = form.member.trim().length > 0;

  return (
    <div className="task-detail">
      {showModal && (
        <DeleteTask
          handleDelete={handleDeleteTaskClick}
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
                  editTask(form);
                  setIsEditMode(false);
                  setForm(form);
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
              onClick={handleEditTaskClick}
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
            placeholder="Enter Task Name"
            value={form.title}
            name="title"
            onChange={onChangeFormValue}
          ></textarea>
          {!formIsValid && (
            <p className="home-error-alert">*Task Name is required</p>
          )}
          <br />
          <br />
          <textarea
            className="task-add-detail"
            placeholder="Enter Task Details"
            value={form.details}
            name="details"
            onChange={onChangeFormValue}
          ></textarea>
          <br />
          <br />
          <br />
          <div className="task-add-row">
            <p className="dashboard-bold-text">Assigned to: </p>
            <select
              className="dropdown"
              name="member"
              value={form.member}
              onChange={onChangeFormValue}
            >
              <option selected hidden>
                Please Select a member
              </option>
              {memberList.map((item, key) => (
                <option
                  className="dropdown"
                  key={key}
                  value={item.member}
                  name="member"
                >
                  {item.member}
                </option>
              ))}
            </select>
          </div>
          {!MemberSelected && (
            <p className="home-error-alert">*Please select a Member</p>
          )}
        </div>
      )}
      {!isEditMode && (
        <div>
          <p className="tasks-bold-text">Task Name: {currentTask.title}</p>
          <br />
          <p className="tasks-bold-text">
            Task Details:{" "}
            {currentTask.details ? currentTask.details : "Not Available"}
          </p>
          <br />
          <p className="tasks-bold-text">
            Member Assigned: {currentTask.member}
          </p>
        </div>
      )}
    </div>
  );
}
