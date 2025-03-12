"use client";

import Coupons from "./components/Coupons";
import Ratings from "./components/Rating";
import ReataurantVideos from "./components/ReataurantVideos";
import Restaurant from "./components/Restaurant";
import ReviewStatics from "./components/RevenueDetail";
import { Loader } from "lucide-react";
import { useRestaurantsQuery } from "@/redux/features/restaurant/restaurantApi";

const OverView = () => {
  const { isLoading } = useRestaurantsQuery("");
  if (isLoading) {
    return (
      <Loader className="animate-spin size-32 text-red-600 mx-auto"></Loader>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-5 gap-5 pt-6">
        <div className="col-span-5 md:col-span-2">
          <ReviewStatics></ReviewStatics>
        </div>
        <div className="col-span-5 md:col-span-2">
          <ReataurantVideos></ReataurantVideos>
        </div>
        <div className="col-span-5 md:col-span-1">
          <Coupons></Coupons>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 pt-16">
        <div className="col-span-3 md:col-span-2">
          <Restaurant></Restaurant>
        </div>
        <div className="col-span-4 md:col-span-1">
          <Ratings></Ratings>
        </div>
      </div>
    </div>
  );
};

export default OverView;
