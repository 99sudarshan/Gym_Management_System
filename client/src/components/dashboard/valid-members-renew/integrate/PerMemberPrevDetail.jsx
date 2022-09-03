import React from "react";
import { useSelector } from "react-redux";
import { prevDetailInputs } from "./memberPrevDetailInputs";

const PerMemberPrevDetail = () => {
  const { selected_valid_member } = useSelector((state) => state.members);
  const { package_details, ...rest } = selected_valid_member;
  const member = { ...package_details, ...rest };

  return (
    <>
      <div className="grid py-4 px-2">
        <div className="w-full overflow-x-auto bg-gray-50 pt-6 px-10 rounded">
          <table className="w-full text-gray-600 font-sans">
            <thead>
              {prevDetailInputs.map((item, i) => {
                const { name, label, fee1, fee2, type } = item;
                return (
                  <tr className="text-left border-b" key={i}>
                    {type ? (
                      <th className="uppercase text-sm font-semibold py-2 px-4 w-80">
                        {member.status === "New"
                          ? "Started Date"
                          : member.status === "Renew"
                          ? "Renewed Date"
                          : label}
                      </th>
                    ) : (
                      <th className="uppercase text-sm font-semibold py-2 px-4 w-80">
                        {label}
                      </th>
                    )}

                    {fee1 && fee2 ? (
                      <td className="py-2 px-4 text-sm">
                        {(member[fee1] || member[fee2]) &&
                          member[fee1] + member[fee2]}
                      </td>
                    ) : (
                      <td className="py-2 px-4 text-sm">{member[name]}</td>
                    )}
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default PerMemberPrevDetail;
