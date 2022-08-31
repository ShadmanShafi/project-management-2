import HomeInput from "./HomeInput";

export default function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "home-input":
      return <HomeInput {...rest} />;
    case "textarea":
    case "select":

    default:
      return null;
  }
  return <div>FormikControl</div>;
}
