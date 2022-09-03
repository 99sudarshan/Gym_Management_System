import { lazy } from "react";
import RulesRegulation from "../dashboard/membership-agreement/RulesRegulation";
import MembershipAgreement from "../dashboard/membership-agreement/MembershipAgreement";
import Dashboard from "../dashboard/home/Dashboard";
const AllMembers = lazy(() => import("../dashboard/all-members/AllMembers"));
const AddMember = lazy(() => import("../dashboard/add-members/AddMember"));
const AccountStatement = lazy(() =>
  import("../dashboard/account-statement/AccountStatement")
);
const AllValidMembers = lazy(() =>
  import("../dashboard/all-valid-members/AllValidMembers")
);
const MembershipRenew = lazy(() =>
  import("../dashboard/valid-members-renew/MembershipRenew")
);
const ExpiredMemberships = lazy(() =>
  import("../dashboard/all-expired-members/ExpiredMemberships")
);
const ProfileDetails = lazy(() =>
  import("../dashboard/profile/ProfileDetails")
);
const MembersAddedReport = lazy(() =>
  import("../dashboard/reports/MembersAddedReport")
);
const DownloadBackup = lazy(() =>
  import("../dashboard/backup/DownloadBackup")
);
const UserTable = lazy(() =>
  import("../dashboard/system-user/users/UsersTable")
);
const FullMemberDetails = lazy(() =>
  import("../dashboard/all-members/FullMemberDetails")
);
const Setting = lazy(() => import("../dashboard/profile/Setting"));

const FullAcDetails = lazy(() =>
  import("../dashboard/account-statement/FullAcDetails")
);

const routes = [
  {
    path: "",
    component: Dashboard,
  },
  {
    path: "/system-users",
    component: UserTable,
  },
  {
    path: "/members/all",
    component: AllMembers,
  },
  {
    path: "/members/",
    component: AddMember,
  },
  {
    path: "/members/details/:slug",
    component: FullMemberDetails,
  },
  {
    path: "/members/edit/:slug",
    component: AddMember,
  },
  {
    path: "/account-statement",
    component: AccountStatement,
  },
  {
    path: "/account-statement/:slug",
    component: FullAcDetails,
  },
  {
    path: "/valid-members/details/all",
    component: AllValidMembers,
  },
  {
    path: "/valid-members/details/:slug",
    component: MembershipRenew,
  },
  {
    path: "/members/expired",
    component: ExpiredMemberships,
  },
  {
    path: "/profile-details",
    component: ProfileDetails,
  },
  {
    path: "/profile-setting",
    permission: "AD",
    component: Setting,
  },
  {
    path: "/terms&condition",
    component: MembershipAgreement,
  },
  {
    path: "/rules&regulation",
    component: RulesRegulation,
  },
  {
    path: "/members-joined-report",
    component: MembersAddedReport,
  },
  {
    path: "/backup",
    permission: "AD",
    component: DownloadBackup,
  },
];

export default routes;
