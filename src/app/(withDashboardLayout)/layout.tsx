"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { CircleHelp, LayoutDashboard, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Providers from "@/lib/providers/Providers";
import logo from "../../assets/image 1.png";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Providers>
      <div className="grid grid-cols-5 h-screen bg-[#F9F9F9] overflow-hidden">
        <div
          className={`${
            isOpen ? "col-span-5" : "hidden md:block"
          } md:col-span-1 h-full  border-r`}
        >
          <div className="flex justify-between items-center pt-4 border-b pb-6 mb-6 mx-8">
            <Link
              href="/"
              className="flex border-[6px] border-[#F13300] rounded-full gap-1 items-center"
            >
              <div className="bg-white p-1 rounded-full border-[6px] border-[#F45E36]">
                <Image alt="Logo" src={logo} height={40} width={40} />
              </div>
            </Link>
            <button className="md:hidden pr-1">
              <X onClick={() => setIsOpen(!isOpen)} />
            </button>
          </div>
          <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
          <button className="flex items-center gap-2 text-[#718096] font-medium mx-10">
            <CircleHelp />
            Sign Out
          </button>
        </div>
        <div
          className={`${
            !isOpen ? "col-span-5" : "hidden md:block"
          } md:col-span-4 bg-white h-full flex overflow-auto flex-col`}
        >
          <div className="flex gap-3 py-2   bg-white border-l items-center px-3">
            <button className="md:hidden">
              <LayoutDashboard onClick={() => setIsOpen(!isOpen)} />
            </button>
            <DashboardHeader />
          </div>
          <div className="p-6 flex-1">{children}</div>
        </div>
      </div>
    </Providers>
  );
};

export default DashboardLayout;
