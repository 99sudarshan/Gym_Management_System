import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import NavigateLink from "../../Common/NavigateLink";
import { detailInputs } from "./fullDetailsInputs";
import { fetchMemberDataById } from "../../api/services/members/membersApiServices";
import { removeSelectedmember } from "../../../Redux/Actions/membersActions";
import PageLoading from "../../Common/PageLoading";
import { PrintIcon } from "../../../assets/icons";

const FullMemberDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { selected_member } = useSelector((state) => state.members);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => window.close(),
  });

  useEffect(() => {
    slug &&
      dispatch(
        fetchMemberDataById(
          slug,
          () => {},
          () => {}
        )
      );
    return () => {
      dispatch(removeSelectedmember());
    };
    // eslint-disable-next-line
  }, [slug]);

  return (
    <>
      {Object.keys(selected_member).length === 0 ? (
        <PageLoading />
      ) : (
        <>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="page_topic">
              {selected_member?.name?.toUpperCase()}'s Details
            </p>
            <NavigateLink
              name="All members"
              path="/dashboard/members/all"
              icon="fa-solid fa-arrow-left mr-1"
            />
          </div>
          <section className="page_section min-h-[23rem] px-2 xsm:px-6 lg:px-16 xl:px-32 py-2">
            <div className="grid py-4 px-2">
              <div
                className="w-full overflow-x-auto bg-gray-50 pt-6 px-10 rounded"
                ref={componentRef}
              >
                <table className="w-full text-gray-600 font-sans">
                  <thead>
                    {detailInputs.map((item, i) => {
                      const { name, label, type } = item;
                      return (
                        <tr className="text-left border-b" key={i}>
                          {type ? (
                            <th className="uppercase text-sm font-semibold py-2 px-4 w-80">
                              {selected_member?.status === "New"
                                ? "Started Date"
                                : selected_member?.status === "Renew"
                                ? "Renewed Date"
                                : label}
                            </th>
                          ) : (
                            <th className="uppercase text-sm font-semibold py-2 px-4 w-80">
                              {label}
                            </th>
                          )}
                          <td className="py-2 px-4 text-sm">
                            {selected_member[name]}
                          </td>
                        </tr>
                      );
                    })}
                  </thead>
                </table>
              </div>
              <div className="flex justify-end pt-4">
                <button
                  className="bg-gray-500 hover:bg-gray-600 animation py-2 px-3 text-white rounded flex items-center gap-1"
                  onClick={handlePrint}
                >
                  Print <PrintIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default FullMemberDetails;
