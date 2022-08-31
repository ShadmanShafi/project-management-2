import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { userAdd } from "../Redux/User/actions";

export default function FormikContainer() {
  const dropdownOptions = [
    {key: 'Select an option', value: ''},
    {key: 'Option 1', value: 'option1'},
    {key: 'Option 2', value: 'option2'},
    {key: 'Option 3', value: 'option3'},  
  ]
  // console.log(props)
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const initialValues = {
    name: "",
    member: "",
    title: "",
    description: "",
    selectOption: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    member: Yup.string().required("Required"),
    title: Yup.string().required("Required"),
  });

  const onSubmit = (values) => console.log("Form data", values);
  // dispatch(userAdd(values.name));
  // navigate("/dashboard");
  // console.log("Saved data", JSON.parse(JSON.stringify(values)));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="home">
          <FormikControl control="input" type="text" label="Name" name="name" />
          <FormikControl control="textarea" label='Description' name="description" />
          <FormikControl control="select" label='Select a member' name="selectOption" options={dropdownOptions} />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}
