import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllMembers } from "../../api/services/members/membersApiServices";
import MembersTable from "./MembersTable";
import SearchBtn from "../../Common/SearchBtn";
import NavigateLink from "../../Common/NavigateLink";
import Paginate from "../../Common/Paginate";
import SelectToShow from "../../Common/SelectToShow";
import KendoPdfDownload, { downloadPdf } from "../../Common/KendoPdfDownload";
import ExportButtons from "../../Common/ExportButtons";
import AllMembersPdf from "./AllMembersPdf";

const AllMembers = () => {
  const [memberType, setMemberType] = useState("");
  const [sortData, setSortData] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const { all_members } = useSelector((state) => state.members);
  const dispatch = useDispatch();
  const pdfRef = useRef();

  useEffect(() => {
    if (all_members.results) {
      setSortData(all_members.results);
    }
  }, [all_members]);

  useEffect(() => {
    dispatch(fetchAllMembers());
    // eslint-disable-next-line
  }, []);

  const exportData = () => {
    let data = [...sortData];
    const report = data.map((item, i) => {
      const { package_details, physical_details, ...rest } = item;
      return {
        ...rest,
      };
    });
    return report;
  };

  return (
    <>
      <>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="page_topic">All Non-Expired Members</p>
          <NavigateLink
            name="Add Members"
            path="/dashboard/members/"
            icon="fa-solid fa-square-plus mr-1"
          />
        </div>
        <section className="page_section min-h-[23rem] px-2 xsm:px-6 ">
          {/* selectors and search bars */}
          <form className="flex flex-col justify-center lg:flex-row 2xl:justify-start items-center flex-wrap gap-4 py-4 ">
            <div className="font-lato w-full lg:w-auto">
              <select
                className="selector w-full lg:w-80 bg-gray-100"
                onChange={(e) => {
                  setPage(1);
                  setMemberType(e.target.value);
                  dispatch(
                    fetchAllMembers(postPerPage, 1, searchTerm, e.target.value)
                  );
                }}
              >
                <option value="">All Members</option>
                <option value="Valid">Valid Member</option>
                <option value="Guest">Guest Member</option>
              </select>
            </div>

            <SearchBtn
              setTerm={(e) => setSearchTerm(e.target.value)}
              getResult={() => {
                setPage(1);
                dispatch(
                  fetchAllMembers(postPerPage, 1, searchTerm, memberType)
                );
              }}
            />
          </form>

          {/* Select to show */}
          <div className="pt-2 flex flex-col gap-4 justify-center md:justify-between  md:flex-row">
            <SelectToShow
              onChange={(e) => {
                setPage(1);
                setPostPerPage(e.target.value);
                dispatch(
                  fetchAllMembers(e.target.value, 1, searchTerm, memberType)
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
                fileName="all-members"
              />
            </div>
          </div>

          {/* members table data details */}
          <MembersTable sortData={sortData} setSortData={setSortData} />

          <KendoPdfDownload ref={pdfRef} fileName="all-members">
            <AllMembersPdf sortData={sortData} ref={pdfRef} id="table-to-xls" />
          </KendoPdfDownload>

          {/* Pagination */}
          <div className=" py-3 flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
            <Paginate
              total={Math.ceil(all_members?.count ?? 0 / postPerPage)}
              page={page}
              setPage={setPage}
              setPageSize={(value) => {
                dispatch(
                  fetchAllMembers(postPerPage, value, searchTerm, memberType)
                );
              }}
              postPerPage={postPerPage}
              currentPost={sortData}
            />
          </div>
        </section>
      </>
    </>
  );
};

export default AllMembers;
