import {
  BackupIcon,
  DashboardIcon,
  FinanceIcon,
  InfoIcon,
  MembershipIcon,
  MembersIcon,
  ReportIcon,
  UsersIcon,
} from "../../assets/icons";

export const routes = [
  {
    title: "Dashboard",
    icon: <DashboardIcon className="w-5 h-5" />,
    path: "/dashboard",
  },
  {
    title: "Gym-info",
    icon: <InfoIcon className="w-5 h-5" />,
    childrens: [
      {
        title: "Membership Agreement",
        path: "/dashboard/terms&condition",
      },
      {
        title: "Terms and Conditions",
        path: "/dashboard/rules&regulation",
      },
    ],
  },
  {
    title: "System Users",
    icon: <UsersIcon className="w-5 h-5" />,
    path: "/dashboard/system-users",
  },
  {
    title: "Gym Members",
    icon: <MembersIcon className="w-5 h-5" />,
    childrens: [
      {
        title: "All Members",
        path: "/dashboard/members/all",
      },
      {
        title: "Add Member",
        path: "/dashboard/members/",
      },
      {
        title: "Expired Members",
        path: "/dashboard/members/expired",
      },
    ],
  },
  {
    title: "Gym Memberships",
    icon: <MembershipIcon className="w-5 h-5" />,
    childrens: [
      {
        title: "Valid Members",
        path: "/dashboard/valid-members/details/all",
      },
    ],
  },
  {
    title: "Finance",
    icon: <FinanceIcon className="w-5 h-5" />,
    childrens: [
      {
        title: "Account Statement",
        path: "/dashboard/account-statement",
      },
    ],
  },
  {
    title: "Reports",
    icon: <ReportIcon className="w-5 h-5" />,
    childrens: [
      {
        title: "Members joined Report",
        path: "/dashboard/members-joined-report",
      },
    ],
  },
  {
    title: " Download Backup",
    permission: "AD",
    icon: <BackupIcon className="w-5 h-5" />,
    path: "/dashboard/backup",
  },
];
