import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onSort, today } from "../utils";
import ViewDetailsLink from "../../Common/ViewDetailsLink";
import { fetchValidMemberById } from "../../api/services/members/membersApiServices";
import ValidTableHeader from "./integrate/ValidTableHeader";

const ValidMembersTable = ({ sortData, setSortData }) => {
  const dispatch = useDispatch();
  const [sortColumn, setSortColumn] = useState({
    path: "id",
    order: "asc",
  });

  return (
    <>
      {/* table */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className=" pt-8 lg:py-2 inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <ValidTableHeader
                  sortColumn={sortColumn}
                  raiseSort={(path) => {
                    onSort(
                      path,
                      sortData,
                      setSortData,
                      sortColumn,
                      setSortColumn
                    );
                  }}
                />

                {sortData.length > 0 ? (
                  sortData.map((item, index) => (
                    <tbody key={index}>
                      <tr
                        className={`border-b hover:bg-gray-100 animation ${
                          item?.package_details?.members_expiry_date ===
                            today() && "bg-red-300 hover:bg-red-400"
                        }`}
                      >
                        <td className="table_body ">{item.id}</td>
                        <td className="table_body ">{item.full_name}</td>
                        <td className="table_body ">{item.mobile}</td>
                        <td className="table_body ">
                          {item.package_details?.package_type}
                        </td>
                        <td className="table_body ">
                          {item.package_details?.package_period}
                        </td>
                        <td className="table_body ">
                          {item.package_details?.start_date}
                        </td>
                        <td className="table_body ">
                          {item.package_details?.members_expiry_date}
                        </td>
                        <td className="table_body ">{item.status}</td>
                        <td className="table_body ">
                          <ViewDetailsLink
                            id={item.id}
                            getDetails={() =>
                              dispatch(fetchValidMemberById(item.id))
                            }
                          />
                        </td>
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
    </>
  );
};

export default ValidMembersTable;
