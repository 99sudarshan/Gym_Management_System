import React from "react";

const MembersJoinedCountPdf = React.forwardRef(
  ({ membersCount, page }, ref) => {
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
                      S.No.
                    </th>
                    <th scope="col" className="export_table_head">
                      Joined Date
                    </th>
                    <th scope="col" className="export_table_head">
                      Joined Guest Members
                    </th>
                    <th scope="col" className="export_table_head">
                      Joined Valid Members
                    </th>
                    <th scope="col" className="export_table_head">
                      Total Number of Joined Members
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {membersCount.length !== 0 ? (
                    membersCount.map((item, index) => {
                      return (
                        <tr
                          className="border-b hover:bg-gray-100 animation"
                          key={index}
                        >
                          <td className="export_table_body ">
                            {page === 1
                              ? index + 1
                              : (page - 1) * 10 + (index + 1)}
                          </td>
                          <td className="export_table_body ">{item.day}</td>
                          <td className="export_table_body ">{item.guest}</td>
                          <td className="export_table_body ">{item.valid}</td>
                          <td className="export_table_body ">
                            {item.guest + item.valid}
                          </td>
                        </tr>
                      );
                    })
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
  }
);

export default MembersJoinedCountPdf;
