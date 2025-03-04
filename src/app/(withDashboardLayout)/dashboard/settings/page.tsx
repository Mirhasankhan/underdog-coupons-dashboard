import React from "react";
import BusinessProfile from "./components/BusinessProfile";
import Notifications from "./components/Notifications";

const Settings = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-3 md:col-span-1">
        <BusinessProfile></BusinessProfile>
      </div>
      <div className="col-span-3 md:col-span-2"><Notifications></Notifications></div>
    </div>
  );
};

export default Settings;
