import React from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";
import { ExpiredIcon, MembersIcon, UsersIcon } from "../../../../assets/icons";

const Banner = () => {
  const { all_members } = useSelector((state) => state.members);
  const { expired_members } = useSelector((state) => state.members);
  const { user_list } = useSelector((state) => state.system_user);
  return (
    <div className="mb-3 px-2 border-t-gray-500 border-t-4 bg-white w-full">
      <div className="w-full py-4 md:py-0 px-4 text-sm pt-3 bg-white">
        <div className=" w-full">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 py-3">
            <div className="bg-gray-500 p-6 text-white font-semibold rounded-sm flex gap-3 items-center">
              <span className="bg-orange-100 text-orange-500 p-3 rounded-full">
                <UsersIcon className="h-6 w-6" />
              </span>
              <div className="flex flex-col">
                <span>System Users</span>
                <span className="text-xl font-semibold">
                  <CountUp start={0} end={user_list.length ?? 0} />
                </span>
              </div>
            </div>
            <div className="bg-gray-500 p-6 text-white font-semibold rounded-sm flex gap-3 items-center">
              <span className="bg-green-200 text-green-700 p-3 rounded-full">
                <MembersIcon className="h-6 w-6" />
              </span>
              <div className="flex flex-col">
                <span>Total Members</span>
                <span className="text-xl font-semibold">
                  <CountUp start={0} end={all_members?.count ?? 0} />
                </span>
              </div>
            </div>
            <div className="bg-gray-500 p-6 text-white font-semibold rounded-sm flex gap-3 items-center">
              <span className="bg-red-200 text-red-500 p-3 rounded-full">
                <ExpiredIcon className="h-6 w-6" />
              </span>
              <div className="flex flex-col">
                <span>Total Expired</span>
                <span className="text-xl font-semibold">
                  <CountUp start={0} end={expired_members?.count ?? 0} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
