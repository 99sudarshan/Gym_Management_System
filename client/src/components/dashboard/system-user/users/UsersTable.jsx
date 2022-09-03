import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditIcon, PlusIcon, TrashIcon } from "../../../../assets/icons";
import {
  deleteUserData,
  fetchUserData,
} from "../../../api/services/system/systemUsersApiService";
import CommonPopup from "../../../Common/CommonPopup";
import AddUser from "./AddUser";
import { fetchUserDataById } from "../../../api/services/system/systemUsersApiService";
import confirmation from "../../confirm-alert/confirm";

const UsersTable = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { user_list } = useSelector((state) => state.system_user);
  const { loggedIn_user } = useSelector((state) => state.system_user);
  const [userData, setUserData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const fetchUserDataByID = (id) => {
    setOpen(true);
    fetchUserDataById(id, userData, setUserData);
  };

  const deleteUser = (id, username) => {
    confirmation(
      `delete ${username.toUpperCase()}`,
      () => dispatch(deleteUserData(id)),
      () => {}
    );
  };

  useEffect(() => {
    dispatch(fetchUserData());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CommonPopup
        open={open}
        closeModal={() => {
          setOpen(false);
          setUserData({
            ...userData,
            id: "",
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
            confirm_password: "",
          });
        }}
        width="max-w-xl"
      >
        <AddUser
          userData={userData}
          closeModal={() => {
            setOpen(false);
            setUserData({
              ...userData,
              id: "",
              first_name: "",
              last_name: "",
              email: "",
              username: "",
              password: "",
              confirm_password: "",
            });
          }}
        />
      </CommonPopup>
      <div>
        <p className="page_topic">Users</p>
        <section className="page_section min-h-[23rem] relative px-4 xsm:px-6">
          {/* Table */}
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className=" pt-8 lg:py-2 inline-block min-w-full">
                <div className="overflow-hidden">
                  <table
                    className="min-w-full border text-center"
                    id="table-to-xls"
                  >
                    <thead className="border-b">
                      <tr>
                        <th scope="col" className="table_head">
                          UserName
                        </th>
                        <th scope="col" className="table_head">
                          Email
                        </th>
                        <th scope="col" className="table_head">
                          First Name
                        </th>
                        <th scope="col" className="table_head">
                          Last Name
                        </th>
                        <th scope="col" className="table_head">
                          User Type
                        </th>
                        {loggedIn_user?.user_type === "AD" && (
                          <th scope="col" className="table_head">
                            Actions
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {user_list.length > 0 ? (
                        user_list.map((item, i) => {
                          return (
                            <tr key={i} className="border-b">
                              <td className="table_body font-medium">
                                {item.username}
                              </td>
                              <td className="table_body font-medium">
                                {item.email}
                              </td>
                              <td className="table_body font-medium">
                                {item.first_name}
                              </td>
                              <td className="table_body font-medium">
                                {item.last_name}
                              </td>
                              <td className="table_body font-medium">
                                {item.user_type}
                              </td>
                              {loggedIn_user?.user_type === "AD" &&
                                item.user_type !== "AD" && (
                                  <td className="table_body font-medium">
                                    <div className="flex items-center justify-center gap-2">
                                      <button
                                        className="link bg-gray-600 bg-opacity-40 text-gray-800 hover:bg-blue-500"
                                        onClick={() =>
                                          fetchUserDataByID(item.id)
                                        }
                                      >
                                        <EditIcon className="w-4 h-4" />
                                      </button>

                                      <button
                                        className="link bg-gray-600 bg-opacity-40 text-gray-800 hover:bg-red-400"
                                        onClick={() =>
                                          deleteUser(item.id, item.username)
                                        }
                                      >
                                        <TrashIcon className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </td>
                                )}
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="100%">no data to show</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {loggedIn_user?.user_type === "AD" && (
            <div className="absolute bottom-5 right-4 xsm:right-6">
              <button
                className="bg-gray-600 hover:bg-gray-700 animation text-white rounded-full p-3 flex justify-center items-center"
                onClick={() => setOpen(true)}
              >
                <PlusIcon className="w-7 h-7" />
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default UsersTable;
