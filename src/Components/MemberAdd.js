import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import addMember from "../Redux/Members/thunk/addMember";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";

export default function MemberAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.members.members);

  const initialValues = {
    member: "",
  };

  const validationSchema = Yup.object({
    member: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    dispatch(addMember(values.member, memberList));
    //Check if success or failure, then re-direct.
    navigate(-1); 
  };

  return (
    <div className="task-add">
      <p className="dashboard-bold-text">Add member</p>
      <br />
      <br />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div>
                <FormikControl
                  className="member-input"
                  control="input"
                  type="text"
                  name="member"
                  placeholder="Name of member"
                />
              </div>
              <div className="member-add-btn">
                <button
                  className="tasks-button"
                  type="button"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button className="tasks-button" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
