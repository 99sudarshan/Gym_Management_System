import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMemberData } from "../../api/services/members/membersApiServices";
import ExpiredTableHeader from "./integrate/ExpiredTableHeader";
import { onSort } from "../utils/onSort";
import { DetailIcon, EditIcon, TrashIcon } from "../../../assets/icons";
import confirmation from "../confirm-alert/confirm";

const ExpiredMembershipTable = ({ sortExpData, setSortExpData }) => {
  const { loggedIn_user } = useSelector((state) => state.system_user);
  const dispatch = useDispatch();
  const [sortColumn, setSortColumn] = useState({
    path: "id",
    order: "asc",
  });

  const handleDelete = (id, name) => {
    confirmation(
      `delete ${name.toUpperCase()}`,
      () => dispatch(deleteMemberData(id)),
      () => {}
    );
  };

  return (
    <>
      {/* Table */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className=" pt-8 lg:py-2 inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <ExpiredTableHeader
                  sortColumn={sortColumn}
                  raiseSort={(path) => {
                    onSort(
                      path,
                      sortExpData,
                      setSortExpData,
                      sortColumn,
                      setSortColumn
                    );
                  }}
                />
                <tbody>
                  {sortExpData.length !== 0 ? (
                    sortExpData.map((item, index) => (
                      <tr
                        className="border-b animation
                            bg-red-200 hover:bg-red-300"
                        key={index}
                      >
                        <td className="table_body ">{item.id}</td>
                        <td className="table_body ">{item.member_type}</td>
                        <td className="table_body ">{item.full_name}</td>
                        <td className="table_body ">{item.current_address}</td>
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
                          <div className="flex items-center justify-center gap-2">
                            <Link
                              to={`/dashboard/members/details/${item.id}`}
                              className="link bg-gray-600 bg-opacity-40 text-gray-800  hover:bg-gray-600"
                            >
                              <DetailIcon className="w-4 h-4" />
                            </Link>

                            <Link
                              to={`/dashboard/members/edit/${item.id}`}
                              className="link bg-gray-600 bg-opacity-40 text-gray-800 hover:bg-blue-500"
                            >
                              <EditIcon className="w-4 h-4" />
                            </Link>

                            {loggedIn_user?.user_type === "AD" && (
                              <button
                                className="link bg-gray-600 bg-opacity-40 text-gray-800 hover:bg-red-400"
                                onClick={() =>
                                  handleDelete(item.id, item.full_name)
                                }
                              >
                                <TrashIcon className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
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
    </>
  );
};

export default ExpiredMembershipTable;
