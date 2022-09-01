import { Field } from "formik";

export default function Select(props) {
  const { name, options, ...rest } = props;
  return (
    <div>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((opt) => {
          console.log(opt);
          return (
            <option key={opt.id} value={opt.name}>
              {opt.name}
            </option>
          );
        })}
      </Field>
    </div>
  );
}
