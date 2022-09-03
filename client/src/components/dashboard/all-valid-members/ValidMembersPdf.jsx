import React from "react";
import { today } from "../utils";

const ValidMembersPdf = React.forwardRef(({ sortData }, ref) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className=" pt-8 lg:py-2 inline-block min-w-full">
          <div className="overflow-hidden">
            <table
              className="min-w-full border text-center"
              id="table-to-xls"
              ref={ref}
            >
              <thead className=" font-semibold">
                <tr>
                  <th
                    scope="col"
                    className="export_table_head  "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="export_table_head  "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="export_table_head  "
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="export_table_head  "
                  >
                    Package
                  </th>
                  <th
                    scope="col"
                    className="export_table_head  "
                  >
                    Duration
                  </th>
                  <th
                    scope="col"
                    className="export_table_head  "
                  >
                    Start Date
                  </th>
                  <th
                    scope="col"
                    className="export_table_head  "
                  >
                    Expiry Date
                  </th>
                  <th
                    scope="col"
                    className="export_table_head  "
                  >
                    Status
                  </th>
                </tr>
              </thead>

              {sortData.length > 0 ? (
                sortData.map((item, index) => (
                  <tbody key={index}>
                    <tr
                      className={`border-b hover:bg-gray-100 animation ${
                        item?.package_details?.members_expiry_date ===
                          today() && "bg-red-300 hover:bg-red-400"
                      }`}
                    >
                      <td className="export_table_body ">{item.id}</td>
                      <td className="export_table_body ">{item.full_name}</td>
                      <td className="export_table_body ">{item.mobile}</td>
                      <td className="export_table_body ">
                        {item.package_details?.package_type}
                      </td>
                      <td className="export_table_body ">
                        {item.package_details?.package_period}
                      </td>
                      <td className="export_table_body ">
                        {item.package_details?.start_date}
                      </td>
                      <td className="export_table_body ">
                        {item.package_details?.members_expiry_date}
                      </td>
                      <td className="export_table_body ">{item.status}</td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <tbody>
                  <tr>
                    <td colSpan="100%" className="py-3 text-sm text-gray-800">
                      no data to show
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ValidMembersPdf;
