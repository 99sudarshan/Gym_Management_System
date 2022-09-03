import React from "react";

const TodayExpValidMemPdf = React.forwardRef(({ expValidData }, ref) => {
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
                    id
                  </th>
                  <th
                    scope="col"
                    className="export_table_head  "
                  >
                    Member
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
                    status
                  </th>
                </tr>
              </thead>

              {expValidData.length > 0 ? (
                expValidData.map((item, index) => (
                  <tbody key={index}>
                    <tr
                      className="border-b animation
                    bg-red-300 hover:bg-red-400"
                    >
                      <td className="export_table_body ">{item.id}</td>
                      <td className="export_table_body ">
                        {item.member_type}
                      </td>
                      <td className="export_table_body ">{item.name}</td>
                      <td className="export_table_body ">
                        {item.package_details?.package_type}
                      </td>
                      <td className="export_table_body ">
                        {item.package_details?.package_period}
                      </td>
                      <td className="export_table_body ">
                        {item.package_details?.start_date}{" "}
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

export default TodayExpValidMemPdf;
