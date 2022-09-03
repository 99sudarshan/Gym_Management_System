import React from "react";
import { Link } from "react-router-dom";

const MembershipAgreement = () => {
  return (
    <>
      <div className="flex flex-col pt-2 gap-1 sm:flex-row justify-between items-center">
        <p className="page_topic font-bold underline">
          Gym Membership Agreement
        </p>
        <Link
          to="/dashboard/rules&regulation"
          className="text-sm bg-gray-500 text-white p-2 rounded hover:text-white hover:bg-gray-600 animation"
        >
          Gym Rules & Regualtions
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </Link>
      </div>
      <section className="page_section min-h-[23rem]">
        <div className="py-2 px-4 xsm:px-10">
          <b className="text-base xsm:text-xl tracking-wider italic text-blue-900">
            The following Rules & Regulations as set forth are part of
            participant's agreement and participants are obligated to observe
            and comply with the same.
          </b>
          <ul className="py-4 px-4 bullets text-sky-600 text-sm xsm:text-lg tracking-wider">
            <li className="pl-2 py-1">
              No one is allowed to use or be permitted to the fitness facilities
              unless they are a member in good standing, or a registered guest
              with the GROW UP FITNESS CLUB.
            </li>
            <li className="pl-2 py-1">
              Signing In: All participants, upon each visit are required to
              scan/card (write their name in the provided register).
            </li>
            <li className="pl-2 py-1">
              All members must have their membership card with them while at the
              fitness facility .
            </li>
            <li className="pl-2 py-1">
              No food and/or tobacco in any form will be permitted in weight
              room area.
            </li>
            <li className="pl-2 py-1">
              Gym/duffle bags are permitted in the designated area. Please put
              your helmet on the given rack.
            </li>
            <li className="pl-2 py-1">
              Shirts and shoes must be worn at all times. Open toe shoes such as
              sandals/flip-flops are not allowed.
            </li>
            <li className="pl-2 py-1">
              It is the individual user's responsibility to clean up cardio
              equipment for excessive sweating.
            </li>
            <li className="pl-2 py-1">
              WE recommends lifting with a partner. If you do not have a lifting
              partner. please check with our staffed hours to ensure staff
              assistance .
            </li>
            <li className="pl-2 py-1">
              Collars/clamps must be used on all barbells.
            </li>
            <li className="pl-2 py-1">
              Break down all weights and replace dumbbells after use. Failure to
              do so will result in suspension of membership.
            </li>
            <li className="pl-2 py-1">
              Locker rooms are for current members only.
            </li>
            <li className="pl-2 py-1">
              Please do not bang or drop the weights or dumbbells . Misuse/abuse
              of equipment will result in suspension.
            </li>
            <li className="pl-2 py-1">
              All fitness equipment (dumbbells, mats, balls, etc.) are to remain
              inside the fitness areas at all times.
            </li>
            <li className="pl-2 py-1">
              Valuables:GROW UP FITNESS CLUB is not responsible for the loss,
              theft of, or damage to, personal property.
            </li>
            <li className="pl-2 py-1">
              Maintenance of Facilities: In order to ensure that the GROW UP
              FITNESS CLUB is properly maintained GROW UP FITNESS CLUB the right
              to temporarily close at any time during the year.Any days lost due
              to being closed,will be added to your next month's expiration
              date.
            </li>
            <li className="pl-2 py-1">
              Participants Violations: Participants privileges may be suspended
              or revoked at any time by any GROW UP FITNESS CLUB Staff, for a
              participant's breech of rules or regulations, other undesirable
              behaviour, or violations of the terms and conditions of the
              participant's agreement.
            </li>
            <li className="pl-2 py-1">
              Any equipment (including mirrors) broken, cracked or damaged due
              to member misuse, abuse, carelessness, or recklessness will result
              in repairs being billed to member.
            </li>
            <li className="pl-2 py-1">
              Show your student/staff ID in counter if vou are a VALID MEMBER.
            </li>
            <li className="pl-2 py-1">
              Update vour membership status Immediately after finishingcurrent
              packqes.
            </li>
            <li className="pl-2 py-1">
              Memberships are NON REFUNDABLE or NON TRANSFERABLE.
            </li>
            <li className="pl-2 py-1">
              All weight and equipment must be put back after use.
            </li>
            <li className="pl-2 py-1">
              Throw out the rubbish (bottle water. tissue) Inside the dustbin,
              don't let that things inside the gym.
            </li>
            <li className="pl-2 py-1">
              Each member must respect other gym users and behave in an
              appropriate manner at all times·
            </li>
            <li className="pl-2 py-1">
              Fighting wlll be not tolerate and will result in immediate
              suspension or terminate your membership.
            </li>
            <li className="pl-2 py-1">
              Wear a proper clothes (sport shoes, trousers,t-shirt)
              <ul className="pl-8" style={{ listStyleType: "square" }}>
                <li className="pl-2 py-1">
                  We did not give permission doing work out without suitable
                  clothes (NO EXCUSE).
                </li>
                <li className="pl-2 py-1">
                  It is strongly recommended you bring a personal workout towel.
                </li>
                <li className="pl-2 py-1">Do not take off your shirt.</li>
              </ul>
            </li>
            <li className="pl-2 py-1">
              Opention hours from 5:30AM to 9:00AM and 4:00PM to untill 8:00PM
              every Sunday to Friday.
            </li>
            <li className="pl-2 py-1">
              Gym closed on Saturday and public holiday.
            </li>
          </ul>
          <b className="text-base xsm:text-xl tracking-wider italic text-blue-900">
            I have read all the rules and regulations and understand them. My
            questions (if any) pertaining to the above rules/regulations have
            been satisfactorily answered.
          </b>
          <div className="py-2">
            <b className="page_topic font-bold underline">
              Acknowledgement of Risks & Injury
            </b>
            <ul className="py-4 px-4 bulletsNext text-sky-600 text-sm xsm:text-lg tracking-wider">
              <li className="pl-2 py-1">
                I acknowledge and understand that whilst participating in such
                activity, I may be injured physically and mentally at my own
                risk.
              </li>
              <li className="pl-2 py-1">
                I acknowledge that the specific risks vary from one activity to
                another, range from minor injuries such as scratches, bruises,
                and sprains; major injuries: such as eye injury or loss of
                sight, joint or back injuries, heart attacks and concussions;
                and catastrophic injuries including paralysis and death, for all
                of this Grow Up Fitness Club is not responsible.
              </li>
              <li className="pl-2 py-1">
                I acknowledge that the activity I am to undertake is a dangerous
                activity and I'm doing this at my own risk.
              </li>
              <li>
                I make sure ask the staff at the gym before doing some exercise,
                if I am a beginner.
              </li>
              <li className="pl-2 py-1">
                I attests that I am fully able to participate in an exercise
                routine of my choice without any risk.
              </li>
              <li className="pl-2 py-1">
                I understand that I am responsible for monitoring my own
                condition throughout my exercise program and during the use of
                the Grow Up Fitness Club's. fitness classes and I agree to abide
                by the regulations and policies of the fitness club.
              </li>
            </ul>
            <b className="text-base xsm:text-xl tracking-wider italic text-blue-900">
              I have read and agree with all of the above and understand that
              the Acknowledgement of Risks & Injury and i will follow and accept
              the rules have been written.
            </b>
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipAgreement;
