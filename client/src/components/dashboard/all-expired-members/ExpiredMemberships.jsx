import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpiredMembers } from "../../api/services/members/membersApiServices";
import SearchBtn from "../../Common/SearchBtn";
import ExpiredMembershipTable from "./ExpiredMembershipTable";
import KendoPdfDownload, { downloadPdf } from "../../Common/KendoPdfDownload";
import ExpiredMembersPdf from "./ExpiredMembersPdf";
import Paginate from "../../Common/Paginate";
import SelectToShow from "../../Common/SelectToShow";
import ExportButtons from "../../Common/ExportButtons";

const ExpiredMemberships = () => {
  const [sortExpData, setSortExpData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [memberType, setMemberType] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const dispatch = useDispatch();
  const { expired_members } = useSelector((state) => state.members);
  const pdfRef = useRef();

  useEffect(() => {
    if (expired_members.results) {
      setSortExpData(expired_members.results);
    }
  }, [expired_members]);

  useEffect(() => {
    dispatch(fetchExpiredMembers());
    // eslint-disable-next-line
  }, []);

  const exportData = () => {
    let data = [...sortExpData];
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
      <p className="page_topic"> Expired All Members Details</p>
      <section className="page_section min-h-[23rem] px-2 xsm:px-6">
        <form className="flex flex-col justify-center  lg:flex-row 2xl:justify-start items-center flex-wrap gap-4 py-4 ">
          <div className="font-lato w-full lg:w-auto">
            <select
              className="selector w-full lg:w-80 bg-gray-100"
              onChange={(e) => {
                setPage(1);
                setMemberType(e.target.value);
                dispatch(
                  fetchExpiredMembers(
                    postPerPage,
                    1,
                    searchTerm,
                    e.target.value
                  )
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
                fetchExpiredMembers(postPerPage, 1, searchTerm, memberType)
              );
            }}
          />
        </form>

        {/* select to show */}
        <div className="pt-2 flex flex-col gap-4 justify-center md:justify-between  md:flex-row">
          <SelectToShow
            onChange={(e) => {
              setPage(1);
              setPostPerPage(e.target.value);
              dispatch(
                fetchExpiredMembers(e.target.value, 1, searchTerm, memberType)
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
              fileName="expiredMembers"
            />
          </div>
        </div>

        {/* Expired Members table */}
        <ExpiredMembershipTable
          sortExpData={sortExpData}
          setSortExpData={setSortExpData}
        />

        <KendoPdfDownload ref={pdfRef} fileName="expiredMembers">
          <ExpiredMembersPdf sortExpData={sortExpData} ref={pdfRef} />
        </KendoPdfDownload>

        {/* Pagination */}
        <div className=" py-3 flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
          <Paginate
            total={Math.ceil(expired_members?.count ?? 0 / postPerPage)}
            currentPost={sortExpData}
            page={page}
            setPage={setPage}
            setPageSize={(value) => {
              dispatch(
                fetchExpiredMembers(postPerPage, value, searchTerm, memberType)
              );
            }}
            postPerPage={postPerPage}
          />
        </div>
      </section>
    </>
  );
};

export default ExpiredMemberships;
