export const onchangeErrorHandle = (name, value, component, isValid) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

  if (component === "add") {
    if (name === "name") {
      if (!value) {
        return "Enter Name!";
      }
    } else if (name === "current_address") {
      if (!value) {
        return "Enter Address!";
      }
    } else if (name === "mobile") {
      if (!value) {
        return "Enter Mobile number!";
      } else if (value.length < 10 || value.length > 10 || isNaN(value)) {
        return " Invalid Mobile number!";
      }
    } else if (name === "gender" && isValid) {
      if (!value) {
        return "Select Gender!";
      }
    } else if (name === "telephone_home" && isValid) {
      if (isNaN(value)) {
        return "Invalid Telephone Number";
      }
    } else if (name === "email" && isValid) {
      if (!value) {
        return "Enter Email!";
      } else if (!regex.test(value)) {
        return "Invalid Email!";
      }
    } else if (name === "admission_date" && isValid) {
      if (!value) {
        return "Enter Admission date!";
      }
    } else if (name === "admission_charge" && isValid) {
      if (!value) {
        return "Enter Admission charge!";
      } else if (isNaN(value)) {
        return "Amount must be Number";
      }
    } else if (name === "full_name") {
      if (!value) {
        return "Enter Full Name!";
      }
    } else if (name === "district") {
      if (!value) {
        return "Enter District!";
      }
    } else if (name === "local_gov") {
      if (!value) {
        return "Enter VDC/Municiaplity";
      }
    } else if (name === "ward_no") {
      if (!value) {
        return "Enter Ward No.";
      } else if (isNaN(value)) {
        return "Invalid Ward No.";
      }
    } else if (name === "country") {
      if (!value) {
        return "Enter Country!";
      }
    } else if (name === "emergency_contact_phone") {
      if (isNaN(value)) {
        return "Invalid Number";
      }
    } else if (name === "package_type") {
      if (!value) {
        return "Select Package type!";
      }
    } else if (name === "package_period") {
      if (!value) {
        return "Select Package period!";
      }
    } else if (name === "convenient_time") {
      if (!value) {
        return "Select Convenient time!";
      }
    } else if (name === "start_date") {
      if (!value) {
        return "Enter Started date!";
      }
    }
  } else if (component === "renew") {
    if (name === "package_type") {
      if (!value) {
        return "Select Package type!";
      }
    } else if (name === "package_period") {
      if (!value) {
        return "Select Package period!";
      }
    } else if (name === "convenient_time") {
      if (!value) {
        return "Select Convenient time!";
      }
    } else if (name === "start_date") {
      if (!value) {
        return "Enter Renewed date!";
      }
    }
  }
};

export const submitErrorHandle = (values, component, isValid) => {
  const errors = {};
  const regex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

  if (component === "add") {
    if (!values.name) errors.name = "Enter Name!";

    if (!values.current_address) errors.current_address = "Enter Address!";

    if (!values.mobile) errors.mobile = "Enter Mobile number!";
    else if (values.mobile.length < 10 || values.mobile.length > 10)
      errors.mobile = "Invalid Mobile number!";

    if (!values.gender && isValid) errors.gender = "Select Gender!";

    if (!values.email && isValid) errors.email = "Enter Email!";
    else if (!regex.test(values.email) && isValid)
      errors.email = "Invalid Email!";

    if (!values.admission_date && isValid)
      errors.admission_date = "Enter Addmission date!";

    if (!values.admission_charge && isValid)
      errors.admission_charge = "Enter Addmission charge!";

    if (!values.full_name) errors.full_name = "Enter Full Name!!";

    if (!values.local_gov) errors.local_gov = "Enter VDC/Municiaplity";

    if (!values.ward_no) errors.ward_no = "Enter Ward No.";

    if (!values.district) errors.district = "Enter District!";

    if (!values.country) errors.country = "Enter Country!";

    if (isNaN(values.emergency_contact_phone))
      errors.emergency_contact_phone = "Invalid Number";

    if (!values.package_type) errors.package_type = "Select Package!";

    if (!values.package_period)
      errors.package_period = "Select Package period!";

    if (!values.convenient_time)
      errors.convenient_time = "Select Convenient time!";

    if (!values.start_date) errors.start_date = "Enter Started date!";
  } else if (component === "renew") {
    if (!values.package_type) errors.package_type = "Select Package!";

    if (!values.package_period)
      errors.package_period = "Select Package period!";

    if (!values.convenient_time)
      errors.convenient_time = "Select Convenient time!";

    if (!values.start_date) errors.start_date = "Enter Renewed date!";
  }

  return errors;
};
