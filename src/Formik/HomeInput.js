import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

export default function HomeInput(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="home">
      <Field
        className="home-input"
        id={name}
        name={name}
        {...rest}
        placeholder="Enter name"
      />
      <ErrorMessage name={name} component={TextError} />
      <button className="home-btn" type="submit">
        Submit
      </button>
    </div>
  );
}
