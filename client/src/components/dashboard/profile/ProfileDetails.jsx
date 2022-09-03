import React from "react";
import { useSelector } from "react-redux";
import { profileDetails } from "./profileInputs";

const ProfileUpdate = () => {
  const { loggedIn_user } = useSelector((state) => state.system_user);
  // const imageChange = (e) => {
  //   // let formData = new FormData();
  //   // formData.append("img", e.target.files[0])
  // };

  return (
    <>
      <p className="page_topic">Profile Details</p>
      <section className="page_section px-4 xsm:px-8 lg:px-16 xl:px-32 py-2 min-h-[23rem]">
        <div className="grid py-4 px-2">
          <div className="w-full mx-auto overflow-x-auto bg-gray-50 pt-6 px-10 rounded">
            <table className="w-full text-gray-600 font-sans">
              <thead>
                {profileDetails.map((item, i) => {
                  const { name, label } = item;
                  return (
                    <tr className="text-left border-b" key={i}>
                      <th className="uppercase text-sm font-semibold py-2 px-4 w-80">
                        {label}
                      </th>
                      {name === "user_type" ? (
                        <td className="py-2 px-4 grid place-content-start font-medium text-sm">
                          <div className="bg-sky-500 py-2 px-4 text-white rounded tracking-wide">
                            {loggedIn_user[name] === "AD"
                              ? "Administrator"
                              : "Staff"}
                          </div>
                        </td>
                      ) : (
                        <td className="py-2 px-4 text-sm font-medium">
                          {loggedIn_user[name]}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </thead>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileUpdate;
