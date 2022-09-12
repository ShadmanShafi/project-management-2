import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import registerUser from "../Redux/User/thunk/registerUser";
import { userAdd } from "../Redux/User/actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("*Name is required."),
    password: Yup.string()
      .required("*Password is required.")
      .min(6, "*Password is too short."),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "*Passwords do not match"
    ),
  });

  const onClickLogin = () => {
    navigate("/");
  };

  const onSubmit = async (values) => {
    await registerUser(dispatch, values.email, values.password, values.passwordConfirmation)
    navigate("/dashboard");
  };

  return (
    <div className="home">
      <img
        src={process.env.PUBLIC_URL + "logo.png"}
        className="home-logo"
        alt="logo"
      />
      <h2 className="home-title">Task management</h2>
      <br />
      <h3 className="home-title">Register</h3>
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
                  placeholder="Enter Email"
                />
                <FormikControl
                  className="home-input-password"
                  control="input"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
                <FormikControl
                  className="home-input-password"
                  control="input"
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm password"
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
        Already have an account? Click her to{" "}
        <span className="home-text-underline-span" onClick={onClickLogin}>
          Login Up!
        </span>
      </h3>
    </div>
  );
}
