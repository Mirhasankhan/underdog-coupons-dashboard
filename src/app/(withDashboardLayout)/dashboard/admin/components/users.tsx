import { CalendarArrowDown, HousePlus, UsersRound } from "lucide-react";
import Link from "next/link";

const TotalUsers = () => {
  return (
    <div>    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* <div className="bg-[#3d78e3] p-3 rounded-md text-white">
          <h1 className="text-xl text-gray-300">Total Parking Spots</h1>
          <h2 className="text-2xl font-semibold py-3">65</h2>
          <div className="flex justify-between items-center">
            <Link className="underline" href="/">
              View All Spots
            </Link>
            <div
              className="p-4 rounded-md bg-[#5186e6]"
            >
              <MapPinHouse />
            </div>
          </div>
        </div> */}
        <div className="bg-[#5b71b9] p-3 rounded-md text-white">
          <h1 className="text-xl text-gray-300">Total Bookings</h1>
          <h2 className="text-2xl font-semibold py-3">165</h2>
          <div className="flex justify-between items-center">
            <Link className="underline" href="/">
              View All Bookings
            </Link>
            <div
              className="p-4 rounded-md bg-[#6c7fc0]"
            >
              <CalendarArrowDown />
            </div>
          </div>
        </div>
        <div className="bg-[#67b173] p-3 rounded-md text-white">
          <h1 className="text-xl text-gray-300">Total House Owner</h1>
          <h2 className="text-2xl font-semibold py-3">210</h2>
          <div className="flex justify-between items-center">
            <Link className="underline" href="/">
              View All Owners
            </Link>
            <div
              className="p-4 rounded-md bg-[#76b981]"
            >
             <HousePlus />
            </div>
          </div>
        </div>
        <div className="bg-[#29badb] p-3 rounded-md text-white">
          <h1 className="text-xl text-gray-300">Total Customers</h1>
          <h2 className="text-2xl font-semibold py-3">465</h2>
          <div className="flex justify-between items-center">
            <Link className="underline" href="/">
              View All Customers
            </Link>
            <div
              className="p-4 rounded-md bg-[#3fc1df]"
            >
              <UsersRound />
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default TotalUsers;
