import { Field } from "formik";

export default function Textarea(props) {
  const { name, ...rest } = props;
  return (
    <div>
      <Field as="textarea" id={name} name={name} {...rest} />
    </div>
  );
}
