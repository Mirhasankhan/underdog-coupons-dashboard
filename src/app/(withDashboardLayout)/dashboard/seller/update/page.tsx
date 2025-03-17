"use client";
import { useRestaurantsQuery } from "@/redux/features/restaurant/restaurantApi";
import { JWTDecode } from "@/utils/jwt";
import { Loader, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import UpdateRestaurantData from "./components/UpdateRestaurant";

const UpdateRestaurant = () => {
  const { decoded } = JWTDecode();
  const email = decoded?.email;
  const { data: restaurant, isLoading } = useRestaurantsQuery(email);
  if (isLoading) {
    return (
      <Loader
        className="animate-spin mx-auto text-[#F13300]"
        size={60}
      ></Loader>
    );
  }

  const { imageUrl, restaurantName, contact, location, owner } =
    restaurant?.result[0];
  return (
    <div>
      <h1 className="text-2xl py-6 font-semibold">Update Your Restaurant</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-1 shadow-[0px_4px_15px_rgba(255,69,58,0.15)] p-5 rounded-md flex flex-col items-start ">
          <img
            className="h-40 w-40 rounded-full mx-auto"
            src={imageUrl}
            alt=""
          />
          <h1 className="text-2xl font-medium py-3">{restaurantName}</h1>
          <div className="flex items-center gap-1">
            <Mail className="text-[#F13300]" />
            {owner.email}
          </div>
          <div className="flex items-center gap-1 py-3">
            <Phone className="text-green-500" /> {contact}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="text-yellow-600" />
            {location}
          </div>
        </div>
        <div className="col-span-3 md:col-span-2">
          <UpdateRestaurantData
            restaurant={restaurant?.result[0]}
          ></UpdateRestaurantData>
        </div>
      </div>
    </div>
  );
};

export default UpdateRestaurant;
