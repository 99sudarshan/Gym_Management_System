import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onSort } from "../utils";
import TableHeader from "./integrate/TableHeader";
import { DetailIcon, EditIcon, TrashIcon } from "../../../assets/icons";
import { deleteMemberData } from "../../api/services/members/membersApiServices";
import confirmation from "../confirm-alert/confirm";

const MembersTable = ({ sortData, setSortData }) => {
  const dispatch = useDispatch();
  const { loggedIn_user } = useSelector((state) => state.system_user);
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
      {/* table */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className=" pt-8 lg:py-2 inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <TableHeader
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
                <tbody>
                  {sortData.length !== 0 ? (
                    sortData.map((item, index) => {
                      return (
                        <tr
                          className="border-b hover:bg-gray-100 animation"
                          key={index}
                        >
                          <td className="table_body ">{item.id}</td>
                          <td className="table_body ">{item.member_type}</td>
                          <td className="table_body ">{item.full_name}</td>
                          <td className="table_body ">
                            {item.current_address}
                          </td>
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
    </>
  );
};

export default MembersTable;
