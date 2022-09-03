import React from "react";
import { BackupIcon } from "../../../assets/icons";
import { fetchBackup } from "../../api/services/backupApiService";

const DownloadBackup = () => {
  return (
    <>
      <h2 className="page_topic">Database Backup</h2>
      <div className="px-10 pt-14">
        <h3 className="mb-3 font-semibold text-slate-700 text-base">
          Backup your data!
        </h3>
        <button
          className="bg-gray-100 p-3 flex flex-col justify-center items-center rounded group"
          onClick={() => fetchBackup()}
        >
          <BackupIcon className="w-20 h-20 relative transform group-hover:translate-y-1 animation" />
          Download Backup
        </button>
      </div>
    </>
  );
};

export default DownloadBackup;
