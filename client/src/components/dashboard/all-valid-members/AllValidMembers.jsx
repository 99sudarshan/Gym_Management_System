import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBtn from "../../Common/SearchBtn";
import ValidMembersTable from "./ValidMembersTable";
import NavigateLink from "../../Common/NavigateLink";
import { fetchValidMembers } from "../../api/services/members/membersApiServices";
import KendoPdfDownload, { downloadPdf } from "../../Common/KendoPdfDownload";
import ValidMembersPdf from "./ValidMembersPdf";
import Paginate from "../../Common/Paginate";
import SelectToShow from "../../Common/SelectToShow";
import ExportButtons from "../../Common/ExportButtons";

const AllValidMembers = () => {
  const [status, setStatus] = useState("");
  const [sortData, setSortData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const { valid_members } = useSelector((state) => state.members);
  const dispatch = useDispatch();
  const pdfRef = useRef();

  useEffect(() => {
    if (valid_members.results) {
      setSortData(valid_members.results);
    }
  }, [valid_members]);

  useEffect(() => {
    dispatch(fetchValidMembers());
    // eslint-disable-next-line
  }, []);

  const exportData = () => {
    let data = [...sortData];
    const report = data.map((item) => {
      const { package_details, physical_details, ...rest } = item;
      return {
        ...rest,
      };
    });
    return report;
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <p className="page_topic"> Non-Expired Valid Memberships</p>
        <NavigateLink
          name="All Members"
          path="/dashboard/members/all"
          icon="fa-solid fa-arrow-left mr-1"
        />
      </div>
      <section className="page_section min-h-[23rem] px-2 xsm:px-6">
        {/* select status and search bar */}
        <form
          action=""
          className="flex flex-col justify-center  lg:flex-row 2xl:justify-start items-center flex-wrap gap-4 py-4 "
        >
          <div className="font-lato w-full lg:w-auto">
            <select
              className="selector w-full lg:w-80 bg-gray-100"
              onChange={(e) => {
                setPage(1);
                setStatus(e.target.value);
                dispatch(
                  fetchValidMembers(postPerPage, 1, searchTerm, e.target.value)
                );
              }}
            >
              <option value="">--Select Status--</option>
              <option value="New">New</option>
              <option value="Renew">Renew</option>
            </select>
          </div>
          <SearchBtn
            setTerm={(e) => setSearchTerm(e.target.value)}
            getResult={() => {
              setPage(1);
              dispatch(fetchValidMembers(postPerPage, 1, searchTerm, status));
            }}
          />
        </form>

        {/* select to show */}
        <div className="pt-2 flex flex-col gap-4 justify-center md:justify-between  md:flex-row">
          <SelectToShow
            onChange={(e) => {
              setPostPerPage(e.target.value);
              setPage(1);
              dispatch(
                fetchValidMembers(e.target.value, 1, searchTerm, status)
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
              data={exportData()}
              ref={pdfRef}
              fileName="validMembers"
            />
          </div>
        </div>

        {/* members table data details */}
        <ValidMembersTable sortData={sortData} setSortData={setSortData} />

        <KendoPdfDownload ref={pdfRef} fileName="validMembers">
          <ValidMembersPdf ref={pdfRef} sortData={sortData} />
        </KendoPdfDownload>

        {/* Pagination */}
        <div className=" py-3 flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
          <Paginate
            total={Math.ceil(valid_members?.count ?? 0 / postPerPage)}
            currentPost={sortData}
            postPerPage={postPerPage}
            page={page}
            setPage={setPage}
            setPageSize={(value) => {
              dispatch(
                fetchValidMembers(postPerPage, value, searchTerm, status)
              );
            }}
          />
        </div>
      </section>
    </>
  );
};

export default AllValidMembers;
