import { confirmAlert } from "react-confirm-alert";

const confirmation = (message, yes, No) => {
  return confirmAlert({
    message: `Are you sure you want to ${message}?`,
    buttons: [
      {
        label: "Yes",
        onClick: () => yes(),
      },
      {
        label: "Cancel",
        onClick: () => No(),
      },
    ],
    overlayClassName: "react-confirm-alert-overlay react-confirm-alert-body",
  });
};

export default confirmation;
