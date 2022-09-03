export const admissionInputs = [
  {
    label: "Name",
    type: "text",
    name: "name",
    placeholder: "Provide Name",
    disable: "details",
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
  },
  {
    label: "Current Address",
    type: "textarea",
    name: "current_address",
    placeholder: " Provide Address...",
    disable: "details",
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
  },
  {
    label: "Date of Birth",
    type: "date",
    name: "dob",
    placeholder: " Provide date of birth",
    disable: "details",
    mandatory: "",
  },
  {
    label: "Occupation",
    type: "text",
    name: "occupation",
    placeholder: "Provide Occupation",
    disable: "details",
    mandatory: "",
  },
  {
    label: "Telephone Home",
    type: "text",
    name: "telephone_home",
    forr: "number",
    placeholder: "Provide Telephone Number",
    disable: "details",
    icon: <i className="fa-solid fa-phone"></i>,
    mandatory: "",
  },
  {
    label: "Mobile",
    type: "text",
    name: "mobile",
    forr: "number",
    placeholder: "Provide Mobile Number",
    disable: "details",
    icon: <i className="fa-solid fa-mobile-screen-button"></i>,
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
  },
  {
    label: "Gender",
    type: "select",
    name: "gender",
    placeholder: "",
    disable: "details",
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
    options: [
      {
        value: "",
      },
      {
        value: "Male",
      },
      {
        value: "Female",
      },
      {
        value: "Transgender",
      },
      {
        value: "Other",
      },
    ],
  },
  {
    label: "Blood Group",
    type: "select",
    name: "blood_group",
    placeholder: "",
    disable: "details",
    mandatory: "",
    options: [
      {
        value: "",
      },
      {
        value: "+AB",
      },
      {
        value: "-AB",
      },
      {
        value: "+O",
      },
      {
        value: "+B",
      },
      {
        value: "-B",
      },
      {
        value: "+A",
      },
      {
        value: "-A",
      },
    ],
  },
  {
    label: "Email",
    type: "text",
    name: "email",
    forr: "number",
    placeholder: "Provide Email",
    disable: "details",
    icon: <i className="fa-regular fa-envelope"></i>,
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
  },
  {
    label: "Experience in GYM",
    type: "select",
    name: "gym_experience",
    placeholder: "",
    disable: "details",
    mandatory: "",
    options: [
      {
        value: "",
      },
      {
        value: "Yes",
      },
      {
        value: "No",
      },
    ],
  },
  {
    label: "Refer By",
    type: "select",
    name: "refered_by",
    placeholder: "",
    disable: "details",
    mandatory: "",
    options: [
      {
        value: "",
      },
      {
        value: "Social Media",
      },
      {
        value: "Friends",
      },
      {
        value: "Others",
      },
    ],
  },
  {
    label: "Admission Date",
    type: "date",
    name: "admission_date",
    placeholder: " Provide date of admission",
    disable: "details",
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
  },
  {
    label: "Admission Charge",
    type: "text",
    forr: "fee",
    name: "admission_charge",
    placeholder: "",
    disable: "details",
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
  },
];
