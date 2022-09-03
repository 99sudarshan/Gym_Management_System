import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBtn from "../../Common/SearchBtn";
import TodayExpValidMemTable from "./integrate/TodayExpValidMemTable";
import Charts from "./integrate/Charts";
import { fetchExpiryValidMembers } from "../../api/services/members/membersApiServices";
import Banner from "./integrate/Banner";
import KendoPdfDownload, { downloadPdf } from "../../Common/KendoPdfDownload";
import TodayExpValidMemPdf from "./integrate/TodayExpValidMemPdf";
import Paginate from "../../Common/Paginate";
import SelectToShow from "../../Common/SelectToShow";
import ExportButtons from "../../Common/ExportButtons";

const Dashboard = () => {
  const [expValidData, setExpValidData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const { expiry_valid_members } = useSelector((state) => state.members);
  const dispatch = useDispatch();
  const pdfRef = useRef();

  useEffect(() => {
    if (expiry_valid_members.results) {
      setExpValidData(expiry_valid_members.results);
    }
  }, [expiry_valid_members]);

  useEffect(() => {
    dispatch(fetchExpiryValidMembers());
    // eslint-disable-next-line
  }, []);

  const exportData = () => {
    let data = [...expValidData];
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
      <h3 className="page_topic pb-2">Dashboard</h3>
      <Banner />
      <section className=" bg-white rounded-t-sm mt-2 min-h-[23rem] px-2 xsm:px-6">
        {/* Chart */}
        <h1 className="page_topic pt-6">Charts</h1>
        <div className="pt-6 pb-3 xsm:px-8 flex flex-col xl:flex-row justify-center gap-3 items-center">
          <Charts />
        </div>
        <>
          {/* Expiry text */}
          <div className="flex justify-center ">
            <h3 className="mt-10 mb-2 text-center sm:text-lg font-bold bg-red-500 text-white py-2 px-3 rounded">
              Today's Expiry
              <i className="fa-solid fa-arrow-down ml-1"></i>
            </h3>
          </div>
          {/* SEARCH AND DATE FILTER */}
          <form
            action=""
            className="flex flex-col justify-center md:flex-row 2xl:justify-start items-center gap-4 py-4"
          >
            <SearchBtn
              setTerm={(e) => setSearchTerm(e.target.value)}
              getResult={() => {
                dispatch(
                  fetchExpiryValidMembers(postPerPage, page, searchTerm)
                );
                setPage(1);
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
                  fetchExpiryValidMembers(e.target.value, 1, searchTerm)
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
                fileName="expiry-valid-members"
              />
            </div>
          </div>

          {/* TABLE DATA SHOW */}
          <TodayExpValidMemTable
            expValidData={expValidData}
            setExpValidData={setExpValidData}
          />

          <KendoPdfDownload ref={pdfRef} fileName="expiry-valid-members">
            <TodayExpValidMemPdf expValidData={expValidData} ref={pdfRef} />
          </KendoPdfDownload>

          {/* PAGINATION */}
          <div className=" py-3 flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
            <Paginate
              total={Math.ceil(expiry_valid_members?.count ?? 0 / postPerPage)}
              postPerPage={postPerPage}
              page={page}
              setPage={setPage}
              currentPost={expValidData}
              setPageSize={(value) => {
                dispatch(
                  fetchExpiryValidMembers(postPerPage, value, searchTerm)
                );
              }}
            />
          </div>
        </>
      </section>
    </>
  );
};

export default Dashboard;
