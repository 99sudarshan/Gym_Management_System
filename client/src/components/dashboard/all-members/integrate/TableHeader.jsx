import React from "react";

const TableHeader = ({ raiseSort, sortColumn }) => {
  const header = [
    { path: "id", label: "ID" },
    { path: "member_type", label: "Member Type" },
    { path: "full_name", label: "Name" },
    { path: "current_address", label: "Address" },
    { path: "mobile", label: "Phone" },
    { path: "package_type", label: "Package" },
    { path: "package_period", label: "Duration" },
    { path: "start_date", label: "Started Date" },
    { path: "members_expiry_date", label: "Expiry Date" },
    { path: "status", label: "Status" },
    { label: "Action" },
  ];

  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <i className="fa-solid fa-sort-down ml-2"></i>;
    return <i className="fa-solid fa-sort-up ml-2"></i>;
  };

  return (
    <thead className="border-b">
      <tr>
        {header.map((column, i) => {
          const { path, label } = column;
          return (
            <th
              scope="col"
              className="text-sm font-semibold text-white p-2 text-center bg-gray-600 cursor-pointer hover:bg-gray-700 animation whitespace-nowrap"
              key={i}
              onClick={() => path !== undefined && raiseSort(path)}
            >
              {label}
              {renderSortIcon(column)}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
