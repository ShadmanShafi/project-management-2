import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAdd } from "../Redux/User/actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    dispatch(userAdd(values.name));
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
                  type="text"
                  name="name"
                  placeholder="Enter username"
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
    </div>
  );
}
