import { Bell } from "lucide-react";
import React from "react";

const BusinessProfile = () => {
  return (
    <div>
      <h1 className="pl-6 pb-2 text-[#718096]">BUSINESS PROFILE</h1>
      <div className="border-l-2 border-[#F13300] flex items-center gap-2 p-4 bg-[#FAFAFA]">
        <div className="bg-white rounded-full pl-4 p-2 cursor-pointer">
          <Bell />
        </div>
        <div >
            <h1 className="text-xl font-medium">Notifications</h1>
            <p>Manage Notifications</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
