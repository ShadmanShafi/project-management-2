import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { userAdd } from "../Redux/User/actions";

export default function FormikContainer() {
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="home">
          <FormikControl control="home-input" type="text" name="name" />
        </Form>
      )}
    </Formik>
  );
}
