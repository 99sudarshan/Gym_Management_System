import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initialValues } from "../../Static/formInitState";
import { submitErrorHandle } from "../utils";
import {
  addMembersData,
  updateMemberData,
  fetchMemberDataById,
} from "../../api/services/members/membersApiServices";
import PhysicalDetailTable from "./integrate/PhysicalDetailTable";
import MemberDetails from "./integrate/MemberDetails";
import DateCriteria from "../../Common/DateCriteria";
import PackageForm from "../../Common/Form/PackageForm";
import NavigateLink from "../../Common/NavigateLink";
import AdmissionForm from "./integrate/AdmissionForm";
import ChooseMemberRadio from "./integrate/ChooseMemberRadio";
import Button from "./integrate/Button";
import { showErrorToast } from "../../Toastify/showToast";
import { onChange } from "./onChange";
import PageLoading from "../../Common/PageLoading";
import { removeSelectedmember } from "../../../Redux/Actions/membersActions";

const AddMember = () => {
  const [formValues, setFormValues] = useState({ ...initialValues });
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { slug } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selected_member } = useSelector((state) => state.members);

  const {
    weight,
    chest,
    arms,
    waist,
    shoulder,
    height,
    neck,
    fore_arms,
    hip,
    thigh,
    calves,
    members_expiry_date,
    package_period,
    package_type,
    received_amount,
    start_date,
    convenient_time,
    receipt_date,
    due_amount,
    receipt_number,
    invoice_number,
    payment_mode,
    package_fee,
    total_fee,
    admission_charge,
    admission_date,
    dob,
    ...rest
  } = formValues;

  const formData = {
    physical_details: {
      weight: parseFloat(weight),
      chest: parseFloat(chest),
      arms: parseFloat(arms),
      waist: parseFloat(waist),
      shoulder: parseFloat(shoulder),
      height: parseFloat(height),
      neck: parseFloat(neck),
      fore_arms: parseFloat(fore_arms),
      hip: parseFloat(hip),
      thigh: parseFloat(thigh),
      calves: parseFloat(calves),
    },
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
      package_fee: parseFloat(package_fee),
      total_fee: 0,
      due_amount: 0,
    },
    admission_charge:
      admission_charge === "" ? 0 : parseFloat(admission_charge),
    admission_date: !isValid ? null : admission_date,
    dob: dob === "" || !isValid ? null : dob,
    ...rest,
  };

  const pathArray = pathname.split("/");
  const memberState = pathArray[3];

  const handleChange = (e) =>
    onChange(e, setFormValues, formValues, formErrors, setFormErrors, isValid);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSubmit(true);
    const err = submitErrorHandle(formValues, "add", isValid);
    setFormErrors(err);
    // console.log(formValues);
  };

  useEffect(() => {
    const errLength = Object.keys(formErrors).length;
    if (errLength === 0 && isSubmit) {
      if (slug) {
        dispatch(updateMemberData(slug, formData, navigate, setLoading));
      } else {
        dispatch(addMembersData(formData, navigate, setLoading));
      }
    } else if (errLength !== 0 && isSubmit) {
      setLoading(false);
      showErrorToast(`${errLength} Invalid input fields`);
    }
    return () => {
      setIsSubmit(false);
    };
    // eslint-disable-next-line
  }, [formErrors, isSubmit]);

  useEffect(() => {
    if (slug) {
      dispatch(fetchMemberDataById(slug, setFormValues, setIsValid));
    }
    return () => {
      setIsValid(false);
      dispatch(removeSelectedmember());
      setFormValues(initialValues);
    };
    // eslint-disable-next-line
  }, [slug]);

  return (
    <>
      {Object.keys(selected_member).length !== 0 || memberState === "" ? (
        <>
          <div className="flex items-center flex-col sm:flex-row justify-between">
            <p className="page_topic">{`${
              memberState === "edit" && slug
                ? `Edit ${selected_member?.full_name?.toUpperCase()}`
                : "Add Member"
            }`}</p>
            <NavigateLink
              name="All Members"
              path="/dashboard/members/all"
              icon="fa-solid fa-arrow-left mr-1"
            />
          </div>
          <section className="page_section px-4 xsm:px-8 lg:px-26 xl:px-36 py-2 min-h-[25rem]">
            <form action="" onSubmit={handleSubmit}>
              {/* MEMBER TYPE  START*/}
              <div className="grid gap-4 md:grid-cols-2 lg:gap-6 pt-5">
                {/* Choose member TYpe */}
                <ChooseMemberRadio
                  handleChange={handleChange}
                  memberState={memberState}
                  isValid={isValid}
                  setIsValid={setIsValid}
                />
              </div>

              {/* admission form start */}
              {isValid && (
                <AdmissionForm
                  formValues={formValues}
                  formErrors={formErrors}
                  memberState={memberState}
                  handleChange={handleChange}
                />
              )}

              {/* Physical Details start */}
              <div>
                <div className="flex justify-center">
                  <h3 className="text-center text-white mt-6 rounded font-bold text-sm lg:text-lg underline py-4 px-10 bg-gray-600">
                    PHYSICAL DETAILS
                  </h3>
                </div>
                <PhysicalDetailTable
                  formValues={formValues}
                  handleChange={handleChange}
                  memberState={memberState}
                />
              </div>

              {/* MEMBER DETAILS START */}
              <MemberDetails
                formValues={formValues}
                formErrors={formErrors}
                handleChange={handleChange}
                isValid={isValid}
                memberState={memberState}
              />

              {/* Package Details Payment Modes start */}
              <>
                <div className="flex justify-center">
                  <h3 className="text-center text-white rounded font-bold my-6 text-sm lg:text-lg underline px-10 py-4 bg-gray-600">
                    PACKAGE DETAILS
                  </h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  <PackageForm
                    formValues={formValues}
                    formErrors={formErrors}
                    handleChange={handleChange}
                    isValid={isValid}
                    memberState={memberState}
                  />
                </div>
              </>

              {/* Date Criteria start */}
              <>
                <div className="flex justify-center">
                  <h3 className="text-center text-white rounded font-bold my-6 text-sm lg:text-lg underline px-10 py-4 bg-gray-600">
                    DATE CRITERIA
                  </h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                  <DateCriteria
                    formValues={formValues}
                    formErrors={formErrors}
                    handleChange={handleChange}
                    nameOfDate="Start Date"
                    memberState={memberState}
                    isValid={isValid}
                  />

                  {/* Status */}
                  <div className="font-lato text-sm xsm:text-base ">
                    <p className="text-gray-800 font-semibold tracking-wider">
                      Status
                    </p>
                    <input
                      type="text"
                      className="form_input h-10 w-full"
                      name="status"
                      value={formValues.status}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>
              </>
              {/* Save Reset buttons */}
              {memberState !== "details" && (
                <Button
                  resetValue={() => {
                    window.confirm(
                      "This will be reset all value, do you want to reset?"
                    ) &&
                      (setFormValues(initialValues) || setIsValid(false));
                  }}
                  slug={slug}
                  loading={loading}
                />
              )}
            </form>
          </section>
        </>
      ) : (
        <PageLoading />
      )}
    </>
  );
};

export default AddMember;
