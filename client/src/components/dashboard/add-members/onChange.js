import { initialValues } from "../../Static/formInitState";
import { getValues } from "../utils";
import { onchangeErrorHandle } from "../utils";

export const onChange = (
  e,
  setFormValues,
  formValues,
  formErrors,
  setFormErrors,
  isValid
) => {
  const { name, value } = e.target;
  if (name === "member_type" && value === "Valid")
    setFormValues({
      ...initialValues,
      status: "New",
      [name]: value,
    });
  else if (name === "member_type" && value === "Guest")
    setFormValues({
      ...initialValues,
      status: "",
      [name]: value,
    });
  else if (name === "package_period" || name === "package_type")
    getValues(value, formValues, setFormValues, name);
  else
    setFormValues({
      ...formValues,
      [name]: value,
    });

  const err = onchangeErrorHandle(name, value, "add", isValid);
  setFormErrors({
    ...formErrors,
    [name]: err,
  });
};
