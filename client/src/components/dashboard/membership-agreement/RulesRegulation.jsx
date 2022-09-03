import React from "react";
import { Link } from "react-router-dom";

const RulesRegulation = () => {
  return (
    <>
      <div className="flex flex-col pt-2 gap-1 sm:flex-row justify-between items-center">
        <p className="page_topic font-bold underline">
          Gym Rules & Regulations
        </p>
        <Link
          to="/dashboard/terms&condition"
          className="text-sm  bg-gray-500 text-white p-2 rounded hover:text-white hover:bg-gray-600 animation"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i> Gym Membership
          Agreement
        </Link>
      </div>
      <section className="page_section min-h-[23rem]">
        <div className="py-3 px-5 xsm:px-14">
          <b className="text-base xsm:text-xl  tracking-wide text-blue-900">
            Gym rules and regulations that all members must accept by:
          </b>
          <h3 className="italic text-xl xsm text-xl:xsm:text-2xl underline text-red-500 my-3 font-bold">
            Hours:
          </h3>
          <p className="text-sm xsm:text-lg tracking-wider text-sky-600">
            <strong> Grow Up Fitness Club</strong> is 9 hour 6 day a week
            facility for our members including public holidays. Visitors can
            register and join during <strong> Staffed Hours</strong> as follows:
          </p>
          <div className="py-3">
            <h5 className="text-sm xsm:text-lg tracking-wider text-sky-600 my-2">
              Sunday-Friday:
            </h5>
            <span className="inline-block mr-8 xsm:mr-12 text-sm xsm:text-lg tracking-wider">
              <h5 className="text-sky-600 my-2">Morning:-</h5>
              <h5 className="text-sky-600 my-2">Evening:-</h5>
              <h5 className="text-sky-600 my-2">Saturday:</h5>
            </span>
            <span className="inline-block text-sm xsm:text-lg tracking-wider ">
              <h5 className="text-sky-600 my-2">5:30 AM to 9:00 AM</h5>
              <h5 className="text-sky-600 my-2">4:00 PM to 8:00 PM</h5>
              <h5 className="text-sky-600 my-2">Rest Day</h5>
            </span>
          </div>
          <div className="text-sm xsm:text-lg">
            <p className="tracking-wider text-sky-600">
              Your membership and door access will be activated on your scan
              card within 24 hours of you signing the waiver form. You can bring
              proof of membership and photo ID to access the facility during
              staffed hours till you get your membership and door access
              activated{" "}
              <span className="text-red-500">(……….will available shortly)</span>
            </p>
            <h3 className="italic text-xl xsm:text-2xl underline text-red-500 my-3 font-bold">
              General Policies
            </h3>
            <p className="tracking-wider py-2 text-sky-600">
              We strive to uphold a safe, clean and enjoyable environment. As
              such, we expect proper, respectful conduct on the premises at all
              times.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              We do not permit disrespectful conduct towards members, guests,
              employees or vendors, including but not limited to vulgar,
              profane, indecent, offensive, violent, hostile, aggressive,
              threatening, harassing, stalking, fraudulent, or other
              inappropriate conduct or language.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              No Tobacco, smokeless, or otherwise, allowed
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              No gum/food/or any beverage but water allowed
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              No children under 18 years old without parental supervision.
              (Underage waiver must be signed by parent or guardian)
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              Do not bring in anything valuable (We are not responsible for any
              lost or stolen items). Lost and found items will be discarded if
              not claimed within 2 weeks from the day the item was found.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              You will not be permitted to use the facility without your scan
              card during non-staffing hours at any time. Use of card by anyone
              other than you will cause it to be confiscated.{" "}
              <strong> Trespassing action will be enforced.</strong>
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              Under no circumstance is any member to train another member for
              compensation. If it is determined that paid personal training has
              been conducted on the premises, the trainer and trainee will each
              lose their membership.
            </p>
          </div>
          <h3 className="italic text-xl xsm:text-2xl underline text-red-500 my-3 font-bold">
            Attire and Shoes
          </h3>
          <div className="text-sm xsm:text-lg">
            <p className="tracking-wider py-2 text-sky-600">
              Proper workout attire (shorts, t-shirts, sweatpants, sweatshirts)
              should be worn. No inappropriate or vulgar words or graphics may
              be worn. Jeans or pants with buttons, hardware (zippers/rivets),
              and straps are allowed.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              No bare feet are allowed on the floor.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              T-Shirts must be worn at all times.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              Sand must be removed from shoes before entering the facility.
            </p>
          </div>
          <h3 className="italic text-xl xsm:text-2xl underline text-red-500 my-3 font-bold">
            Cardio Equipment
          </h3>
          <div className="text-sm xsm:text-lg">
            <p className="tracking-wider py-2 text-sky-600">
              The cardio equipment is available on a “first-come, first-serve”
              basis. You may use the equipment for 15 min or less at a time
              during busy times.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              Please wipe down the machines after your workouts using the wipes
              provided at the facility.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              It is strongly recommended you bring a personal workout towel.{" "}
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              It is the individual user's responsibility to clean up cardio
              equipment for excessive sweating.
            </p>
          </div>
          <h3 className="italic text-xl xsm:text-2xl underline text-red-500 my-3 font-bold">
            Free Weights
          </h3>
          <div className="text-sm xsm:text-lg">
            <p className="tracking-wider py-2 text-sky-600">
              Use weight collars and pins at all times for your safety and that
              of others.
            </p>
          </div>
          <h3 className="italic text-xl xsm:text-2xl underline text-red-500 my-3 font-bold">
            Return & Rack
          </h3>
          <div className="text-sm xsm:text-lg">
            <p className="tracking-wider py-2 text-sky-600">
              All weights (plates, dumbbells) after use. Violators will be asked
              to leave the facility.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              Do not drop the weights or lean them up against anything, and use
              extreme caution in mirrored areas.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              We highly recommend a personal towel to wipe off the upholstery
              after your use.
            </p>
          </div>
          <h3 className="italic text-xl xsm:text-2xl underline text-red-500 my-3 font-bold">
            Spotting
          </h3>
          <div className="text-sm xsm:text-lg">
            <p className="tracking-wider py-2 text-sky-600">
              <strong> Grow Up Fitness Club</strong> recommends lifting with a
              partner. If you do not have a lifting partner, please check with
              our staffed hours to ensure staff assistance.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              A Grow Up Fitness Club employee has the right to step in and
              assist if necessary.
            </p>
          </div>
          <h3 className="italic text-xl xsm:text-2xl underline text-red-500 my-3 font-bold">
            Locker Rooms
          </h3>
          <div className="text-sm xsm:text-lg">
            <p className="tracking-wider py-2 text-sky-600">
              Use of Locker Rooms facilities on a daily basis only. We do not
              provide locks for locker use. We do allow you to bring your own
              lock for daily use only. Use of lockers permits user agreement
              allowing locker to be searched at any time.
            </p>
          </div>
          <h3 className="italic text-xl xsm:text-2xl underline text-red-500 my-3 font-bold">
            Safety/Emergency
          </h3>
          <div className="text-sm xsm:text-lg">
            <p className="tracking-wider py-2 text-sky-600">
              In case of emergency, contact a Grow Up Fitness Club employee
              immediately during staffed hours. The Staff Person will help
              contact the authorities when it is deemed necessary and provide
              emergency care if needed.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              During unstaffed hours, you can use the phone located at the front
              desk to call for an emergency, if deemed necessary.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              In case of fire or alarm, always use caution and safely leave the
              building.
            </p>
            <p className="italic tracking-wide underline text-sky-600 bg-yellow-400">
              Any activity or exercise resulting in pain, faintness, dizziness,
              or shortness of breath should be stopped immediately.
            </p>
          </div>
          <h3 className="italic text-xl xsm:text-2xl underline text-red-500 my-3 font-bold">
            Violation of Rules
          </h3>
          <div className="text-sm xsm:text-lg">
            <p className="tracking-wider py-2 text-sky-600">
              If any member violates any of the policies, Grow Up Fitness Club
              Owners or Staffs have the right to revoke memberships.
            </p>
            <p className="tracking-wider py-2 text-sky-600">
              A violation may also cause to terminate the membership according
              to the terms of the membership agreement.
            </p>
          </div>
          <h3 className="italic text-xl xsm:text-2xl underline text-red-500 my-3 font-bold">
            Parking
          </h3>
          <div className="mb-8 text-sm xsm:text-lg">
            <p className="tracking-wider py-2 text-sky-600">
              Parking is provided by Bharatpur Metropolitan city management
              committee for the use of our facility.
            </p>
          </div>
          <b className="text-base xsm:text-xl sm:text-2xl font-bold tracking-wider text-blue-600">
            Thank you for using our services and we wish you good luck with all
            your fitness endeavours.
          </b>
          <div className="flex flex-col justify-center items-center gap-2 pt-14 pb-3">
            <h3 className="uppercase font-semibold text-xl xsm:text-2xl sm:text-4xl text-blue-600 tracking-wide">
              grow up finess club
            </h3>
            <h5 className=" xsm:text-lg sm:text-2xl text-blue-600">
              Bharatpur-10, Chitwan
            </h5>
            <h5 className=" xsm:text-lg sm:text-2xl text-blue-600">
              Contact us: +9779814012248
            </h5>
            <h5 className=" xsm:text-lg sm:text-2xl text-blue-600">
              Email: growupfitnessclub@gmail.com
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default RulesRegulation;
