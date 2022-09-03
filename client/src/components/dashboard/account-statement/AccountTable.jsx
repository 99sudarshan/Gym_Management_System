import React from "react";
import AccountTableHeader from "./integrate/AccountTableHeader";
import { Link } from "react-router-dom";

const AccountTable = ({ accountStatement }) => {
  return (
    <>
      {/* Table */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className=" pt-8 lg:py-2 inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <AccountTableHeader />
                <tbody>
                  {accountStatement.length > 0 ? (
                    accountStatement.map((item, index) => (
                      <tr
                        className="border-b hover:bg-gray-100 animation"
                        key={index}
                      >
                        <td className="table_body ">{item.full_name}</td>
                        <td className="table_body ">{item.member_type}</td>
                        <td className="table_body ">
                          {item?.package_details?.package_type}
                        </td>
                        <td className="table_body ">
                          {item?.package_details?.package_period}
                        </td>
                        <td className="table_body ">
                          {item.admission_charge +
                            item.package_details.package_fee}
                        </td>
                        <td className="table_body ">
                          {item.package_details.received_amount
                            ? item.package_details.received_amount
                            : 0}
                        </td>
                        <td className="table_body ">
                          {item.package_details.due_amount}
                        </td>
                        <td className="table_body ">{item.status}</td>
                        <td className="table_body ">
                          <Link
                            to={`/dashboard/account-statement/${item.id}`}
                            className="text-blue-500 font-normal px-2 py-1 rounded-md hover:underline"
                          >
                            full statement
                          </Link>
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

export default AccountTable;
