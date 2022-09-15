import { Field } from "formik";

export default function Select(props) {
  const { name, options, ...rest } = props;
  return (
    <div>
      <Field as="select" id={name} name={name} {...rest}>
        <option defaultValue="" >Select a member</option>
        {options.map((opt) => {
          return (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          );
        })}
      </Field>
    </div>
  );
}
