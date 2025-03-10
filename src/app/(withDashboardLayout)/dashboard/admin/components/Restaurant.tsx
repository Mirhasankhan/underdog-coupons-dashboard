"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useRestaurantsQuery } from "@/redux/features/restaurant/restaurantApi";
import { TRestaurant } from "@/types/common";

const Restaurant = () => {
  const { data: allRestaurants } = useRestaurantsQuery("");
  const reviewedRestaurants = allRestaurants?.result?.filter(
    (restaurant: { reviews: [] }) => restaurant.reviews.length > 0
  );

  return (
    <div className="h-64 overflow-y-scroll">
      <h1 className="text-xl font-medium pb-2">Restaurant</h1>
      {reviewedRestaurants?.slice(0,3)?.map((review: TRestaurant) => {
        return (
          <div
            key={review.id}
            className="grid grid-cols-1 border-b md:grid-cols-2 pt-4"
          >
            <div className="col-span-1 flex gap-4 items-center p-4">
              <Image
                src={review.imageUrl}
                className="rounded-lg"
                height={50}
                width={100}
                alt=""
              ></Image>
              <div>
                <h1 className="text-xl font-medium">{review.restaurantName}</h1>
                <div className="flex gap-2 items-center">
                  <FaStar className="text-orange-400" />
                  {review.reviews.length > 0
                    ? (
                        review.reviews.reduce((sum, r:{rating:number}) => sum + r.rating, 0) /
                        review.reviews.length
                      ).toFixed(1)
                    : "0"}{" "}
                  {/* Calculate average rating */}({review.reviews.length}{" "}
                  reviews)
                </div>
              </div>
            </div>
            <div className="col-span-1 p-4 gap-3">
              <div className="flex gap-8 items-center">
                <h1 className="md:text-xl font-semibold">{review.reviews["0"].userName}</h1>
                <div className="flex text-orange-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="py-1">
              {review.reviews["0"].comment}
              </p>
              <p className="text-gray-500">6 days ago</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurant;
