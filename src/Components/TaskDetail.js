import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteTask from "../Modals/DeleteTask";
import updateTask from "../Redux/Tasks/thunk/updateTask";

export default function TaskDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentTask = useSelector((state) => state.tasks.task);
  const memberList = useSelector((state) => state.members.members);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [form, setForm] = useState({
    id: "",
    title: "",
    description: "",
    member: "",
  });
  console.log(currentTask);

  useEffect(() => {
    if (currentTask) {
      setForm({
        id: currentTask.id,
        title: currentTask.title,
        description: currentTask.description,
        member: currentTask.member,
      });
    }
  }, currentTask);

  const onChangeFormValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formIsValid = form.title.trim().length > 0;

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleEditTaskClick = () => {
    setIsEditMode(true);
  };

  const handleUpdateTaskClick = (id, title, description, member) => {
    navigate(-1);
    dispatch(updateTask(id, title, description, member));
  };

  return (
    <div className="task-detail">
      {showModal && (
        <DeleteTask
          itemToDelete={"task"}
          id={id}
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
                  handleUpdateTaskClick(
                    id,
                    form.title,
                    form.description,
                    form.member
                  );
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
            placeholder="Enter Task Description"
            value={form.description}
            name="description"
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
                  value={item.name}
                  name="name"
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      {!isEditMode && (
        <div>
          <p className="tasks-bold-text">Task Name: {currentTask.title}</p>
          <br />
          <p className="tasks-bold-text">
            Task Details:{" "}
            {currentTask.description
              ? currentTask.description
              : "Not Available"}
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
