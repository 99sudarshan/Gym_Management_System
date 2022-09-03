import React from "react";

const AccountTableHeader = () => {
  const header = [
    { path: "full_name", label: "Name" },
    { path: "member_type", label: "Member Type" },
    { path: "package_type", label: "Package" },
    { path: "package_period", label: "Duration" },
    // { path: "start_date", label: "Started Date" },
    // { path: "members_expiry_date", label: "Expiry Date" },
    // { path: "", label: "Joined Date" },
    { path: "", label: "Total Amount" },
    { path: "", label: "Receipt Amount" },
    { path: "", label: "Balance Amount" },
    // { path: "", label: "Receipt Date" },
    // { path: "", label: "Invoice No." },
    // { path: "", label: "Receipt No." },
    // { path: "", label: "Payment Mode" },
    { path: "status", label: "Status" },
    { label: "Action" },
  ];

  return (
    <thead className="border-b">
      <tr>
        {header.map((column, i) => {
          const { label } = column;
          return (
            <th
              scope="col"
              className="text-sm font-semibold text-white p-2 text-center bg-gray-600 whitespace-nowrap"
              key={i}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default AccountTableHeader;
