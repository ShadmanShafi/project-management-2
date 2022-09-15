import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";
import loginUser from "../Redux/User/thunk/loginUser";
import { logout } from "../Redux/User/actions";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("*Name is required."),
    password: Yup.string()
      .required("*Password is required.")
  });

  const onClickRegister = () => {
    navigate("/register");
  };

  const onSubmit = async (values) => {
    await loginUser(dispatch, values.email, values.password);
    navigate("/dashboard");
  };

  dispatch(logout());

  return (
    <div className="home">
      <img
        src={process.env.PUBLIC_URL + "logo.png"}
        className="home-logo"
        alt="logo"
      />
      <h2 className="home-title">Task Management</h2>
      <br />
      <br />
      <h3 className="home-subtitle">Login to your existing account</h3>
      <br />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="home">
                <FormikControl
                  className="home-input"
                  control="input"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
                <FormikControl
                  className="home-input-password"
                  control="input"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
                <button
                  className="home-btn"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <h3 className="home-text-underline">
        Don't have an account? Click her to{" "}
        <span className="home-text-underline-span" onClick={onClickRegister}>
          Sign Up!
        </span>
      </h3>
    </div>
  );
}
