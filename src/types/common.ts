import { userRoles } from "@/utils/roles";
import { IconType } from "react-icons";

export type TRoles = keyof typeof userRoles;

export interface SidbarItem {
  title: string;
  path: string;
  parentPath?: string;
  child?: SidbarItem[];
  icon?: IconType;
  children?: SidbarItem[];
}

export interface TUser {
  id:string
  userName: string;
  role: string;
  status: string;
  email: string;
}

export interface Review  {
  rating: string;
  comment: string;
};

export interface Spot  {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: Review[];
};
