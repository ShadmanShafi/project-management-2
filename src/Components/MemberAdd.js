import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import addMember from "../Redux/Members/thunk/addMember";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";

export default function MemberAdd() {
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.user.token);

  const initialValues = {
    member: "",
  };

  const validationSchema = Yup.object({
    member: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    await addMember(navigate, userToken, values.member);
  };

  return (
    <div className="task-add">
      <p className="dashboard-bold-text">Add Member</p>
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
