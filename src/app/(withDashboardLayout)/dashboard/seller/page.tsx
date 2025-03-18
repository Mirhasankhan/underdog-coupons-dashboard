"use client";
import { useRestaurantsQuery } from "@/redux/features/restaurant/restaurantApi";
import Reviews from "./components/Reviews";
import TotalReview from "./components/TotalReview";
import { JWTDecode } from "@/utils/jwt";
import ReviewDetails from "./components/ReviewDetails";
import { Loader } from "lucide-react";

const SellerDashboard = () => {
  const { decoded } = JWTDecode();
  const email = decoded?.email;
  const { data: restaurant, isLoading } = useRestaurantsQuery(email);

  if (isLoading) {
    return <Loader className="animate-spin mx-auto" size={60}></Loader>;
  }
  return (
    <div>
      <TotalReview restaurantId={restaurant?.result[0].id}></TotalReview>
      <div className="grid grid-cols-4 gap-6 mt-12">
        <div className="col-span-3 md:col-span-2">
          <Reviews restaurantId={restaurant?.result[0].id}></Reviews>
        </div>
        <div className="col-span-3 md:col-span-2">
          <ReviewDetails
            restaurantId={restaurant?.result[0].id}
          ></ReviewDetails>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
