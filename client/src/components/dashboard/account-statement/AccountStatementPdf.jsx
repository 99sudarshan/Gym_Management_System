import React from "react";

const AccountStatementPdf = React.forwardRef(({ accountStatement }, ref) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto mx-2">
        <div className=" pt-8 lg:py-2 inline-block min-w-full px-2 sm:px-4 lg:px-6">
          <div className="overflow-hidden">
            <table
              className="min-w-full border text-center"
              id="table-to-xls"
              ref={ref}
            >
              <thead className="border-b">
                <tr>
                  <th scope="col" className="export_table_head">
                    Name
                  </th>
                  <th scope="col" className="export_table_head">
                    Member
                  </th>
                  <th scope="col" className="export_table_head">
                    Package
                  </th>
                  <th scope="col" className="export_table_head">
                    Duration
                  </th>
                  <th scope="col" className="export_table_head">
                    Total Amount
                  </th>
                  <th scope="col" className="export_table_head">
                    Receipt Amount
                  </th>
                  <th scope="col" className="export_table_head">
                    Balance Amount
                  </th>
                  <th scope="col" className="export_table_head">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {accountStatement.length > 0 ? (
                  accountStatement.map((item, index) => (
                    <tr
                      className="border-b hover:bg-gray-100 animation"
                      key={index}
                    >
                      <td className="export_table_body ">{item.full_name}</td>
                      <td className="export_table_body ">
                        {item.member_type}
                      </td>
                      <td className="export_table_body ">
                        {item?.package_details?.package_type}
                      </td>
                      <td className="export_table_body ">
                        {item?.package_details?.package_period}
                      </td>
                      <td className="export_table_body ">
                        {item.admission_charge +
                          item.package_details.package_fee}
                      </td>
                      <td className="export_table_body ">
                        {item.package_details.received_amount
                          ? item.package_details.received_amount
                          : 0}
                      </td>
                      <td className="export_table_body ">
                        {item.package_details.due_amount}
                      </td>
                      <td className="export_table_body ">{item.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="100%" className="py-3 text-sm text-gray-800">
                      no data to show
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AccountStatementPdf;
