import React from "react";

const Coupons = () => {
  const allCoupons = [
    "sdfsdfdf",
    "sdfsdfdfsdf",
    "sdfsdfsdf",
    "sdfsdfdf",
    "sdfsdfdfsdf",
    "sdfsdfsdf",
    "hwrtwedsf",
    "gwretsdfgsdf",
  ];
  return (
    <div className="rounded-md shadow-[0px_4px_15px_rgba(255,69,58,0.15)] p-4">
      {allCoupons.map((coupon, index) => (
        <div className="flex justify-between py-2 text-[#06402B]  items-center" key={index}>
          <h1>{coupon}</h1>
          <button className="text-[#F13300] font-medium px-3 py-1 rounded-md bg-red-300">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Coupons;
