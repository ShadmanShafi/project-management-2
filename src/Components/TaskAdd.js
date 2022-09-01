import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { taskAdd } from "../Redux/Tasks/actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";

export default function TaskAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.members.members);

  const dropdownOptions = memberList.filter((member, key) => {
    const obj = {
      key: {key},
      value: {member},
    };
    return obj;
  });

  const initialValues = {
    title: "",
    description: "",
    member: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    dispatch(taskAdd(values.title, values.description, values.member));
    navigate(-1);
  };

  return (
    <div className="task-add">
      <p className="dashboard-bold-text">Add task</p>
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
                  name="title"
                  placeholder="Enter task title"
                />
                <br />
                <br />
                <FormikControl
                  className="task-description-input"
                  control="textarea"
                  type="text"
                  name="description"
                  placeholder="Enter description"
                />
              </div>
              <br />
              <div className="task-add-row">
                <p className="dashboard-bold-text">Assigned to: </p>
                <FormikControl
                  control="select"
                  type="text"
                  name="member"
                  options={dropdownOptions}
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
