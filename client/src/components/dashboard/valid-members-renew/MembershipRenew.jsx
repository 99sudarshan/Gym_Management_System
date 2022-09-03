import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitErrorHandle } from "../utils/validation";
import { getValues } from "../utils/calcInputValue";
import { initialValues } from "../../Static/formInitState";
import RenewPackageForm from "../../Common/Form/PackageForm";
import DateCriteria from "../../Common/DateCriteria";
import {
  updateValidMemberData,
  fetchValidMemberById,
} from "../../api/services/members/membersApiServices";
import { onchangeErrorHandle } from "../utils/validation";
import { showErrorToast } from "../../Toastify/showToast";
import PageLoading from "../../Common/PageLoading";
import PerMemberPrevDetail from "./integrate/PerMemberPrevDetail";
import LoadingRing from "../../Common/LoadingRing";
import NavigateLink from "../../Common/NavigateLink";
import { removeSelectedValidmember } from "../../../Redux/Actions/membersActions";
import confirmation from "../confirm-alert/confirm";

const MembershipRenew = () => {
  const [formValues, setFormValues] = useState({ ...initialValues });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [renew, setRenew] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const isValid = true;
  const renewRef = useRef();
  const validMemberSelected = useSelector(
    (state) => state.members.selected_valid_member
  );

  const {
    members_expiry_date,
    package_period,
    package_type,
    received_amount,
    start_date,
    convenient_time,
    receipt_date,
    receipt_number,
    invoice_number,
    payment_mode,
    package_fee,
    status,
  } = formValues;

  const formData = {
    package_details: {
      members_expiry_date,
      package_period,
      package_type,
      received_amount: received_amount === "" ? 0 : parseFloat(received_amount),
      start_date,
      convenient_time,
      receipt_date:
        receipt_date === "" || receipt_date === null ? null : receipt_date,
      receipt_number,
      invoice_number,
      payment_mode,
      due_amount: 0,
      total_fee: 0,
      package_fee: parseFloat(package_fee),
    },
    status,
    admission_charge: 0,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "package_period" || name === "package_type")
      getValues(value, formValues, setFormValues, name);
    else setFormValues({ ...formValues, status: "Renew", [name]: value });
    const err = onchangeErrorHandle(name, value, "renew");
    setFormErrors({ ...formErrors, [name]: err });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const err = submitErrorHandle(formValues, "renew", isValid);
    setFormErrors(err);
  };

  useEffect(() => {
    slug && dispatch(fetchValidMemberById(slug));
    return () => {
      dispatch(removeSelectedValidmember());
    };
    // eslint-disable-next-line
  }, [slug]);

  useEffect(() => {
    const errLength = Object.keys(formErrors).length;
    if (isSubmit && slug) {
      if (errLength === 0) {
        dispatch(updateValidMemberData(slug, formData, navigate, setLoading));
      } else {
        setLoading(false);
        showErrorToast(`${errLength} Invalid input fields`);
      }
    }

    return () => {
      setIsSubmit(false);
    };
    // eslint-disable-next-line
  }, [formErrors, isSubmit]);

  useEffect(() => {
    if (Object.keys(validMemberSelected).length !== 0 && slug) {
      renewRef.current.scrollIntoView({
        block: "end",
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [renewRef, renew, validMemberSelected, slug]);

  return (
    <>
      {Object.keys(validMemberSelected).length !== 0 ? (
        <>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="page_topic">
              {`${
                validMemberSelected.name !== undefined &&
                validMemberSelected.name.toUpperCase()
              }'s Details`}
            </p>
            <NavigateLink
              name="Valid Members"
              path="/dashboard/valid-members/details/all"
              icon="fa-solid fa-arrow-left mr-1"
            />
          </div>
          <section className="page_section  px-4 xsm:px-10 lg:px-16 xl:px-36 py-2 min-h-[23rem]">
            {/*  members previous details before renew */}
            <PerMemberPrevDetail />

            {/* Renew Button */}
            {!renew && (
              <div className="pb-3">
                <button
                  className="bg-purple-600 px-6 py-2 text-white text-sm font-semibold rounded-sm shadow-lg shadow-gray-400 hover:bg-purple-700 animation group"
                  onClick={() =>
                    confirmation(
                      ` renew ${validMemberSelected?.full_name?.toUpperCase()}`,
                      () => setRenew(true),
                      () => setRenew(false)
                    )
                  }
                  ref={renewRef}
                >
                  Renew
                  <i className="fa-solid fa-arrows-rotate group-hover:rotate-180 transiton-all duration-500 ease-linear ml-1"></i>
                </button>
              </div>
            )}

            {/* Renew form */}
            {renew && (
              <div className="pb-3 pt-10">
                <form action="" onSubmit={handleSubmit} ref={renewRef}>
                  <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                    {/* packages */}
                    <RenewPackageForm
                      handleChange={handleChange}
                      formValues={formValues}
                      isValid={isValid}
                      formErrors={formErrors}
                    />

                    {/* date criteria */}
                    <DateCriteria
                      formValues={formValues}
                      formErrors={formErrors}
                      handleChange={handleChange}
                      nameOfDate="Renew Date"
                    />

                    {/* Status */}
                    <div className="font-lato text-sm xsm:text-base ">
                      <p className="text-gray-800 font-semibold tracking-wider">
                        Status
                      </p>
                      <input
                        type="text"
                        className="form_input border-2 h-10 w-full"
                        name="status"
                        value={formValues.status}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  {/* Save Reset buttons */}
                  <div className="pt-4 lg:pt-10">
                    <button
                      className="button_style hover:bg-green-600 active:bg-green-600 mr-2"
                      type="submit"
                    >
                      {loading ? <LoadingRing /> : "Update"}
                    </button>
                    <button
                      className="button_style hover:bg-red-500 active:bg-red-500"
                      type="reset"
                      onClick={() => setFormValues(initialValues)}
                    >
                      Reset
                    </button>
                  </div>
                </form>
                {renew && (
                  <div className="flex justify-end items-end py-3 ">
                    <button
                      className="button_style flex items-center hover:bg-red-500 active:bg-red-500 shadow-lg shadow-gray-400"
                      onClick={() =>
                        confirmation(
                          `cancel renew ${validMemberSelected?.full_name?.toUpperCase()}`,
                          () => setRenew(false),
                          () => setRenew(true)
                        )
                      }
                      ref={renewRef}
                    >
                      <span>Cancel</span>
                      <i className="fa-solid fa-ban ml-2"></i>
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        </>
      ) : (
        <PageLoading />
      )}
    </>
  );
};

export default MembershipRenew;
