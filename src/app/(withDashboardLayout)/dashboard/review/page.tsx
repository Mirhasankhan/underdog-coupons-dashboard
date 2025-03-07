"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useRestaurantsQuery } from "@/redux/features/restaurant/restaurantApi";
import { TRestaurant } from "@/types/common";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { format } from "date-fns";
import { Loader } from "lucide-react";

const Reviews = () => {
  const { data: allRestaurants,isLoading } = useRestaurantsQuery("");
  const reviewedRestaurants = allRestaurants?.result?.filter(
    (restaurant: { reviews: [] }) => restaurant.reviews.length > 0
  );

  if(isLoading){
    return <Loader className="animate-spin mx-auto" size={80}></Loader>
  }

  return (
    <div>
      {
        reviewedRestaurants?.length > 0 ? <div className="shadow-[0px_4px_15px_rgba(255,69,58,0.15)] p-4 rounded-xl">
        {reviewedRestaurants?.map((review: TRestaurant) => {
          return (
            <div
              key={review.id}
              className="grid grid-cols-1 border-b md:grid-cols-3 pt-4"
            >
              <div className="col-span-1 flex gap-4 items-center">
                <Image
                  src={review.imageUrl}
                  className="rounded-xl"
                  height={80}
                  width={120}
                  alt=""
                ></Image>
                <div>
                  <h1 className="text-xl pb-1 font-medium">
                    {review.restaurantName}
                  </h1>
                  <div className="flex gap-1 items-center">
                    <FaStar className="text-orange-400" />
                    {review.reviews.length > 0 ? (
                      <p className="text-[#616161]">
                        {(
                          review.reviews.reduce(
                            (sum, r: { rating: number }) => sum + r.rating,
                            0
                          ) / review.reviews.length
                        ).toFixed(1)}
                      </p>
                    ) : (
                      "0"
                    )}
                    (
                    <p className="text-[#616161]">
                      {review.reviews.length} Reviews
                    </p>
                    )
                  </div>
                </div>
              </div>
              <div className="col-span-2 p-4 gap-3">
                <div className="flex gap-12 items-center">
                  <h1 className="md:text-xl font-semibold">
                    {review.reviews["0"].userName}
                  </h1>
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={review.reviews["0"].rating}
                  />
                </div>
                <p className="py-1">{review.reviews["0"].comment}</p>
                <p className="text-gray-500">
                  {format(
                    new Date(review.reviews[0].createdAt),
                    "MMMM dd, yyyy hh:mm a"
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>: <p className="text-red-600 text-2xl text-center pt-12">No Reviews Found</p>
      }
    </div>
  );
};

export default Reviews;
