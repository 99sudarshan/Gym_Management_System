export const profileDetails = [
  // {
  //   type: "file",
  //   label: "Select Photo",
  //   name: "select_photo",
  //   placeholder: "Select Photo",
  //   mandatory: "",
  //   validation: {
  //     validate: {
  //       lessThan10MB: (files) => files[0]?.size < 10000000 || "Max 10MB",
  //       acceptedFormats: (files) =>
  //         ["image/jpeg", "image/png", "image/gif"].includes(files[0]?.type) ||
  //         "Only PNG, JPEG e GIF",
  //     },
  //   },
  // },
  {
    label: "First Name",
    name: "firstname",
  },
  {
    label: "Last Name",
    name: "lastname",
  },
  {
    label: "UserName",
    name: "username",
  },
  {
    label: "User Type",
    name: "user_type",
  },
  {
    label: "Email",
    name: "email",
  },
];

export const passwordInputs = [
  {
    label: "Current Password",
    name: "old_password",
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
    placeholder: "Type Current Password",
    validation: {
      required: {
        value: true,
        message: "Current Password is required!",
      },
    },
  },
  {
    label: "New Password",
    name: "new_password",
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
    placeholder: "Type New Password",
    validation: {
      required: {
        value: true,
        message: "New Password is required!",
      },
      maxLength: {
        value: 14,
        message: "Password must not exceed 14 character!",
      },
    },
  },
  {
    label: "Confirm Password",
    name: "new_password2",
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
    placeholder: "Type Confirm Password",
    validation: {
      required: {
        value: true,
      },
    },
  },
];
