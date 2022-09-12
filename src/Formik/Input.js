import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

export default function Input(props) {
  const { name, ...rest } = props;
  return (
    <div>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
