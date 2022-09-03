import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberReportTable from "./integrate/MemberReportTable";
import { fetchJoinedMembersCount } from "../../api/services/members/membersApiServices";
import { AdjustmentIcon, FilterIcon } from "../../../assets/icons";
import KendoPdfDownload, { downloadPdf } from "../../Common/KendoPdfDownload";
import MembersJoinedCountPdf from "./integrate/MembersJoinedCountPdf";
import Paginate from "../../Common/Paginate";
import ExportButtons from "../../Common/ExportButtons";
import SelectToShow from "../../Common/SelectToShow";

const MembersAddedReport = () => {
  const [membersCount, setMembersCount] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const { joined_members_count } = useSelector((state) => state.members);
  const dispatch = useDispatch();
  const pdfRef = useRef();
  const [filterDate, setFilterDate] = useState({
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    if (joined_members_count.results)
      setMembersCount(joined_members_count.results);
  }, [joined_members_count]);

  useEffect(() => {
    dispatch(fetchJoinedMembersCount());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <p className="page_topic">Total Joined Members Report</p>
      <section className="page_section min-h-[23rem]">
        <form className="flex justify-center flex-wrap px-4 xsm:px-8 gap-2 2xl:justify-end items-center text-gray-700 py-4">
          <div className="flex items-center font-semibold">
            <FilterIcon className="w-6 h-6" />
            <p className="">Filter : </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <div className="flex items-center gap-1 h-full">
              <p className="text-sm font-semibold">From</p>
              <input
                type="date"
                className="h-9 outline-none border-2 rounded focus:border-purple-400 pl-2"
                onChange={(e) =>
                  setFilterDate({ ...filterDate, start_date: e.target.value })
                }
              />
            </div>
            <div className="flex items-center gap-1 h-full">
              <p className="font-semibold text-sm">To</p>
              <input
                type="date"
                className="h-9 outline-none border-2 rounded focus:border-purple-400 pl-2"
                onChange={(e) =>
                  setFilterDate({ ...filterDate, end_date: e.target.value })
                }
              />
            </div>
          </div>
          <button
            className="bg-gray-500 hover:bg-gray-600 animation text-white rounded font-semibold text-base flex items-center py-1 px-2"
            onClick={(e) => {
              e.preventDefault();
              setPage(1);
              dispatch(
                fetchJoinedMembersCount(
                  postPerPage,
                  1,
                  filterDate.start_date,
                  filterDate.end_date
                )
              );
            }}
          >
            <AdjustmentIcon className="h-6 w-6 text-white" />
            Filter
          </button>
        </form>

        {/* <select to show /> */}
        <div className="pt-2 flex flex-col gap-4 justify-center md:justify-between px-4 xsm:px-8 md:flex-row">
          <SelectToShow
            onChange={(e) => {
              setPostPerPage(e.target.value);
              setPage(1);
              dispatch(
                fetchJoinedMembersCount(
                  e.target.value,
                  1,
                  filterDate.start_date,
                  filterDate.end_date
                )
              );
            }}
          />
          <div className="flex flex-wrap mb-2 justify-center items-center gap-1 text-xs sm:text-sm ">
            <button
              className="export-button"
              onClick={() => downloadPdf(pdfRef)}
            >
              pdf
            </button>
            <ExportButtons
              data={membersCount}
              ref={pdfRef}
              fileName="members-joined-report"
            />
          </div>
        </div>

        <MemberReportTable membersCount={membersCount} page={page} />

        <KendoPdfDownload ref={pdfRef} fileName="members-joined-report">
          <MembersJoinedCountPdf
            membersCount={membersCount}
            ref={pdfRef}
            page={page}
          />
        </KendoPdfDownload>
        {/* pagination */}
        <div className="px-4 xsm:px-8 py-3 flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
          <Paginate
            total={Math.ceil(joined_members_count?.count ?? 0 / postPerPage)}
            page={page}
            setPage={setPage}
            postPerPage={postPerPage}
            setPageSize={(value) =>
              dispatch(
                fetchJoinedMembersCount(
                  postPerPage,
                  value,
                  filterDate.start_date,
                  filterDate.end_date
                )
              )
            }
            currentPost={membersCount}
          />
        </div>
      </section>
    </>
  );
};

export default MembersAddedReport;
