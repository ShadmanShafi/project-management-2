import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { memberAdd } from "../Redux/Members/actions";
import FormikContainer from "../Formik/FormikContainer";

export default function MemberAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    member: "",
  });

  const onChangeFormValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formIsValid = form.member.trim().length > 0;

  const handleSubmitClick = () => {
    if (formIsValid) {
      navigate(-1);
      dispatch(memberAdd(form.member))
    }
  };

  const handleCancelClick = () => navigate(-1);

  return (
    <div className="task-add">
      <p className="dashboard-bold-text">Add member</p>
      <br />
      <br />
      <FormikContainer control='member-add' name='member' />
      {/* <textarea
        className="task-add-name"
        placeholder="Enter Member Name"
        value={form.member}
        name="member"
        onChange={onChangeFormValue}
      ></textarea> */}
      <br />
      {!formIsValid && (
        <p className="home-error-alert">*Member Name is required</p>
      )}
      <br />
      <br />

      <br />
      <div className="task-add-btn">
        <button className="tasks-button" onClick={handleCancelClick}>Cancel</button>
        <button className="tasks-button" onClick={handleSubmitClick}>Submit</button>
      </div>
    </div>
  )
}
