export const resetInputs = [
  {
    type: "text",
    name: "token",
    placeholder: "OTP here",
    validation: {
      required: {
        value: true,
        message: "OTP is required!",
      },
    },
  },
  {
    type: "password",
    name: "password",
    placeholder: "New password",
    validation: {
      required: {
        value: true,
        message: "New password is required!",
      },
      maxLength: {
        value: 14,
        message: "Password must not exceed 14 character!",
      },
    },
  },
  {
    type: "password",
    name: "confirm_password",
    placeholder: "Confirm password",
    cpass: true,
  },
];
