export const loginInputs = [
  {
    label: "Username",
    type: "text",
    name: "username",
    className:
      "outline-none h-9 lg:h-10 w-full px-3 rounded-sm text-sm focus:ring-1 ring-purple-400",
    placeholder: "Fill Username",
    validation: {
      required: {
        value: true,
        message: "User name is required",
      },
    },
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    className: "outline-none h-full w-full px-3 text-sm ",
    placeholder: "Fill Password",
    validation: {
      required: {
        value: true,
        message: "Password is required",
      },
    },
  },
];
