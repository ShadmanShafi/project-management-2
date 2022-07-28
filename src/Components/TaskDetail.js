import { useUserContext } from "../ContextStore";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import DeleteTask from "../Modals/DeleteTask";

export default function TaskDetail() {
  const { taskList, deleteTask, task, setTask, setTaskList , editTask} = useUserContext();
  const {id} = useParams();
  const [showModal, setShowModal] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [form, setForm] = useState(task)
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const currentTitle = taskList.find(
    (item) => parseInt(item.uid) === parseInt(id)
  );

  const currentDetails = taskList.find(
    (item) => parseInt(item.uid) === parseInt(id)
  );

  const handleDeleteTaskClick = () => {
    deleteTask(task);
    navigate(-1);
  } 

  const handleEditTaskClick = () => {
    setIsEditMode(true)
  }
  const onChangeFormValue = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
  }
  return (
    <div className="task-detail">
      {showModal && <DeleteTask handleDelete = {handleDeleteTaskClick} hideModal = {() => {setShowModal(false)}} showModal={showModal}/>}
      <div className="task-detail-buttons">
        <button className="back-btn" onClick={handleBackClick}>
        ← Back
        </button>
        {
          isEditMode ? <div>
          <button className="task-detail-right-btns" onClick={() => {editTask(form)
            setIsEditMode(false)
            
          }}>Yes</button>
          <button className="task-detail-right-btns" onClick={() => {setForm(task) 
          setIsEditMode(false)
          }}>No</button>
        </div> :
        <div>
        <button className="task-detail-right-btns" onClick={handleEditTaskClick}>Edit</button>
        <button className="task-detail-right-btns" onClick={() => {setShowModal(true)}}>Delete</button>
      </div>
        }
      </div>
      <br />
      <br />
      <br />
      {isEditMode && 
      <div>
        <textarea
        className="task-add-name"
        placeholder="Enter Task Name"
        value={form.title}
        name="title"
        onChange={onChangeFormValue}
      ></textarea>
      <br />
      <br />
      <textarea
        className="task-add-detail"
        placeholder="Enter Task Details"
        value={form.details}
        name="details"
        onChange={onChangeFormValue}
      ></textarea>
        </div>}
      {!isEditMode && <div><p className="tasks-bold-text">Task Name: {currentTitle.title}</p>
      <br />
      <p className="tasks-bold-text">Task Details: {currentDetails.details ? task.details : "Not Available"}</p>
      <br />
      <p className="tasks-bold-text">Member Assigned: {currentDetails.member}</p></div>}
    </div>
  );
}
