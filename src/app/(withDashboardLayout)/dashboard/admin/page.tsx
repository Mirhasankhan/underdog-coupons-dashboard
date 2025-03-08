"use client";

import Coupons from "./components/Coupons";
import Rating from "./components/Rating";
import ReataurantVideos from "./components/ReataurantVideos";
import Restaurant from "./components/Restaurant";
import ReviewStatics from "./components/RevenueDetail";

const OverView = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 pt-6">
        <div className="col-span-4 md:col-span-2">
          <ReviewStatics></ReviewStatics>
        </div>
        <div className="col-span-4 md:col-span-1">
          <ReataurantVideos></ReataurantVideos>
        </div>
        <div className="col-span-4 md:col-span-1">
          <Coupons></Coupons>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 pt-16">
        <div className="col-span-3 md:col-span-2"><Restaurant></Restaurant></div>
        <div className="col-span-4 md:col-span-1">
          <Rating></Rating>
        </div>
      </div>
    </div>
  );
};

export default OverView;
