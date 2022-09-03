import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AccountTable from "./AccountTable";
import SearchBtn from "../../Common/SearchBtn";
import { fetchAllMembers } from "../../api/services/members/membersApiServices";
import KendoPdfDownload, { downloadPdf } from "../../Common/KendoPdfDownload";
import AccountStatementPdf from "./AccountStatementPdf";
import Paginate from "../../Common/Paginate";
import SelectToShow from "../../Common/SelectToShow";
import ExportButtons from "../../Common/ExportButtons";

const AccountStatement = () => {
  const [accountStatement, setAccountStatement] = useState([]);
  const [memberType, setMemberType] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const getAccountDetails = useSelector((state) => state.members.all_members);
  const pdfRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (getAccountDetails.results)
      setAccountStatement(getAccountDetails.results);
  }, [getAccountDetails]);

  useEffect(() => {
    dispatch(fetchAllMembers());
    // eslint-disable-next-line
  }, []);

  const calculateTotal = () => {
    let total = 0;
    for (let item of accountStatement) {
      total +=
        item.package_details.package_fee || item.admission_charge
          ? parseInt(item.package_details.package_fee + item.admission_charge)
          : 0;
    }
    return total;
  };

  const calculateReceipt = () => {
    let receipt = 0;
    for (let item of accountStatement) {
      receipt += item.package_details.received_amount
        ? parseInt(item.package_details.received_amount)
        : 0;
    }
    return receipt;
  };

  const calculateRemain = () => {
    let remain = 0;
    for (let item of accountStatement) {
      remain += item.package_details.due_amount
        ? parseInt(item.package_details.due_amount)
        : 0;
    }
    return remain;
  };

  const exportData = () => {
    let data = [...accountStatement];
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
      <p className="page_topic inline-block">Account Statement Details</p>
      <section className="page_section min-h-[23rem] px-2 xsm:px-6">
        <h3 className="font-bold underline pt-3">Member Details</h3>
        {/* Selectors,Inputs,SearchBar */}
        <form className="flex flex-col justify-center lg:flex-row 2xl:justify-start items-center flex-wrap gap-4 py-4 ">
          <div className="font-lato w-full lg:w-auto">
            <select
              className="selector  w-full lg:w-80 bg-gray-100"
              onChange={(e) => {
                setPage(1);
                setMemberType(e.target.value);
                dispatch(
                  fetchAllMembers(postPerPage, 1, searchTerm, e.target.value)
                );
              }}
            >
              <option value="">All Members</option>
              <option value="Valid">Valid Members</option>
              <option value="Guest">Guest Members</option>
            </select>
          </div>

          <SearchBtn
            setTerm={(e) => setSearchTerm(e.target.value)}
            getResult={() => {
              setPage(1);
              dispatch(fetchAllMembers(postPerPage, 1, searchTerm, memberType));
            }}
          />
        </form>

        {/* Balance Details */}
        <div className="flex gap-2 sm:gap-0  py-3 flex-wrap">
          <div className="font-bold border-2 text-center px-4 py-2 basis-full sm:text-left lg:text-lg sm:basis-4/12">
            Total Amount:- {calculateTotal()}
          </div>
          <div className="font-bold border-2 text-center px-4 py-2 basis-full sm:text-left lg:text-lg sm:basis-4/12">
            Receipt Amount:- {calculateReceipt()}
          </div>
          <div className="font-bold border-2 text-center px-4 py-2 basis-full sm:text-left lg:text-lg sm:basis-4/12">
            Remaining Balance:- {calculateRemain()}
          </div>
        </div>

        {/* select to show */}
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
              fileName="account-statement"
            />
          </div>
        </div>

        {/* Account Statement Table */}
        <AccountTable accountStatement={accountStatement} />

        <KendoPdfDownload ref={pdfRef} fileName="account-statement">
          <AccountStatementPdf
            ref={pdfRef}
            accountStatement={accountStatement}
          />
        </KendoPdfDownload>
        {/* Showing table length with Pagination */}
        <div className="px-8 py-3 flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
          <Paginate
            total={Math.ceil(getAccountDetails?.count ?? 0 / postPerPage)}
            postPerPage={postPerPage}
            currentPost={accountStatement}
            setPage={setPage}
            setPageSize={(value) =>
              dispatch(
                fetchAllMembers(postPerPage, value, searchTerm, memberType)
              )
            }
            page={page}
          />
        </div>
      </section>
    </>
  );
};

export default AccountStatement;
