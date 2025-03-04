"use client"
import { useAppSelector } from "@/redux/hooks";
import CancelationRate from "./components/CancelationRate";
import RecentBookings from "./components/RecentBookings";
import RevenueDetails from "./components/RevenueDetail";
import TopCustomers from "./components/TopCustomers";
import TopOwners from "./components/TopOwners";
import TopSpots from "./components/TopSpots";
import TotalUsers from "./components/users";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { JWTDecode } from "@/utils/jwt";


const OverView = () => {
   const user = useAppSelector(useCurrentUser);
const {token} = JWTDecode()
console.log(token)
  return (
    <div>
      <h1 className="font-medium">Welcome Back, {user?.name}</h1>
      <p>Here&apos;s what&apos;s happening today.</p>
      <div className="grid grid-cols-4 gap-5 pt-6">
        <div className="col-span-4 md:col-span-3">
          <TotalUsers></TotalUsers>
          <RevenueDetails></RevenueDetails>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TopSpots></TopSpots>
            <TopOwners></TopOwners>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1">
          <CancelationRate></CancelationRate>
          <RecentBookings></RecentBookings>
          <TopCustomers></TopCustomers>
        </div>
      </div>
    </div>
  );
};

export default OverView;
