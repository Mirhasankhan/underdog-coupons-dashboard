import { SidbarItem, TRoles } from "@/types/common";
import { userRoles } from "./roles";
import { MdDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { RiHome5Fill } from "react-icons/ri";
import {
  Bell,
  Dock,
  FileChartColumn,
  FilePenLine,
  UserRoundPen,
} from "lucide-react";

export const sidebarItems = (role: TRoles): SidbarItem[] => {
  const roleMenus: SidbarItem[] = [];

  switch (role) {
    case userRoles.ADMIN:
      roleMenus.push({
        title: "Dashboard",
        path: `/${role}`,
        icon: RiHome5Fill,
      });
      roleMenus.push({
        title: "Coupon",
        path: `/${role}/coupon`,
        icon: Bell,
      });
      roleMenus.push({
        title: "Restaurant",
        path: `/${role}/restaurant`,
        icon: Dock,
      });
      roleMenus.push({
        title: "Review",
        path: `/${role}/review`,
        icon: FileChartColumn,
      });

      // roleMenus.push({
      //   title: "Settings",
      //   path: `/settings`,
      //   icon: Settings,
      // });
      break;

    case userRoles.SELLER:
      roleMenus.push({
        title: "Dashboard",
        path: `/${role}`,
        icon: RiHome5Fill,
      });
      roleMenus.push({
        title: "Update Restaurant",
        path: `/${role}/update`,
        icon: FilePenLine,
      });
      roleMenus.push({
        title: "Change Password",
        path: `/${role}/change`,
        icon: UserRoundPen,
      });

      break;
    case userRoles.USER:
      roleMenus.push({
        title: "Dashboard",
        path: `/${role}`,
        icon: MdDashboard,
      });
      roleMenus.push({
        title: "My Proposals",
        path: `/${role}/my-buys`,
        icon: GoPackage,
      });
      roleMenus.push({
        title: "My Profile",
        path: `/${role}/manage-profile`,
        icon: CiUser,
      });
      break;
    default:
      break;
  }
  return [...roleMenus];
};
