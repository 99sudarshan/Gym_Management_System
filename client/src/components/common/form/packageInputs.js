export const packageInputs = [
  {
    name: "convenient_time",
    label: " Convinient Time",
    type: "select",
    mandatory: <span className="text-red-500 tracking-wide">&#42;</span>,
    options: [{ value: "" }, { value: "Morning" }, { value: "Evening" }],
  },
  {
    label: "Package Fee",
    name: "package_fee",
    type: "text",
    format: "amount",
  },
  {
    label: "Total Fee",
    name: "total_fee",
    disable: true,
    type: "text",
    format: "amount",
  },
  {
    label: "Received Amount",
    name: "received_amount",
    type: "number",
    format: "amount",
  },
  {
    label: "Due Amount",
    name: "due_amount",
    disable: true,
    type: "text",
    format: "amount",
  },
  {
    label: "Receipt Date",
    name: "receipt_date",
    type: "date",
  },
  {
    label: "Receipt Number",
    name: "receipt_number",
    type: "text",
  },
  {
    label: "Invoice Number",
    name: "invoice_number",
    type: "text",
  },
];
