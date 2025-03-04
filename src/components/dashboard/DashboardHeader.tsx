import { Bell, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import UserDetails from "./UserDetails";
import { useState } from "react";
import DashboardSearch from "./DashboardSearch";
import DashboardNotifications from "./DashboardNotifications";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { CiSearch } from "react-icons/ci";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const user = useAppSelector(useCurrentUser);
  return (
    <div className="flex justify-between w-full md:px-8 px-4 items-center">
      <div>
        <h1>Welcome</h1>
        <p className="font-medium">User Name</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-2xl cursor-pointer bg-[#FAFAFA] rounded-full p-2">
          <CiSearch
            onClick={() => setSearchOpen(!searchOpen)}
          
          />
        </div>
        <div className="bg-[#FAFAFA] rounded-full p-2 cursor-pointer">
          <Bell onClick={() => setNotificationsOpen(!notificationsOpen)} />
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex relative items-center gap-2 bg-[#FAFAFA] p-1 rounded-md cursor-pointer"
        >
          <Image
            className="rounded-full"
            src="https://media.istockphoto.com/id/2017256409/photo/young-asian-man-on-the-metro.webp?a=1&b=1&s=612x612&w=0&k=20&c=BPUvlXun78PFL49ZqJwdhQsgAa_OhTh9Qpq-jvgdJmg="
            height={40}
            width={50}
            alt="Profile Picture"
          />
          <div className="text-sm hidden md:block">
            <h1 className="font-semibold">{user?.name}</h1>     
          </div>
          {isOpen && <ChevronUp />}
          {!isOpen && <ChevronDown />}
        </div>
      </div>
      <div className="absolute top-20 right-8">
        <UserDetails isOpen={isOpen}></UserDetails>
      </div>
      <div className="absolute top-20 right-8">
        {!isOpen && <DashboardSearch searchOpen={searchOpen}></DashboardSearch>}
      </div>
      <div className="absolute top-20 right-8">
        {!isOpen && !searchOpen && (
          <DashboardNotifications notificationsOpen={notificationsOpen} />
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
