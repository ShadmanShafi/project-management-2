import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteTask from "../Modals/DeleteTask";
import updateMember from "../Redux/Members/thunk/updateMember";
import { taskGet } from "../Redux/Tasks/actions";
import updateTaskMember from "../Redux/Tasks/thunk/updateTaskMember";

export default function MemberDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentMember = useSelector((state) => state.members.member);
  const taskList = useSelector((state) => state.tasks.tasks);
  const userToken = useSelector((state) => state.user.token);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [form, setForm] = useState({
    id: "",
    name: "",
  });

  useEffect(() => {
    if (currentMember) {
      setForm({
        id: currentMember.id,
        name: currentMember.name,
      });
    }
  }, currentMember);

  let listId = 0;

  const onChangeFormValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formIsValid = form?.name?.trim().length > 0;

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleTaskItemClick = (item) => {
    navigate(`/task-detail-${item.id}`);
    dispatch(taskGet(item.id, item.title, item.description, item?.Member.name));
  };

  const handleEditMemberClick = () => {
    setIsEditMode(true);
  };

  const handleUpdateMemberClick = (userToken, id, newName) => {
    dispatch(updateMember(navigate, userToken, id, newName));
  };

  return (
    <div className="task-detail">
      {showModal && (
        <DeleteTask
          itemToDelete={"member"}
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
                  handleUpdateMemberClick(
                    userToken,
                    currentMember.id,
                    form.name
                  );
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
            value={form.name}
            name="name"
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
          <p className="tasks-bold-text">{currentMember.name}</p>
          <br />
          <br />
          <p className="tasks-text">List of tasks assigned:</p>
          <br />
          <br />
          <ol type="1" className="tasks-list">
            {taskList.map((item) => {
              if (item.memberId === currentMember.id) {
                {
                  listId++;
                }
                return (
                  <li className="tasks-list-item" key={item.id}>
                    <div className="task-item-left">
                      <p className="tasks-list-item-children no-underline">
                        {listId}.
                      </p>
                      <button
                        className="tasks-list-item-children tasks-list-item-children-hover"
                        onClick={() => handleTaskItemClick(item)}
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
