"use client";
import { useRestaurantsQuery } from "@/redux/features/restaurant/restaurantApi";
import { useState } from "react";

const RestaurantVideos = () => {
  const { data: restaurants } = useRestaurantsQuery("");
  const allUrls = restaurants?.result?.filter(
    (restaurant: { videoUrl: string | null }) => restaurant.videoUrl !== null
  );
  const videoUrls =
    allUrls?.map((restaurant: { videoUrl: string }) => ({
      url: restaurant.videoUrl,
    })) || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      {allUrls?.length > 0 ? (
        <div className="shadow-[0px_4px_15px_rgba(255,69,58,0.15)] md:py-[36px] p-4 rounded-md">
          <div className="w-full">
            <video
              key={videoUrls[currentIndex].url}
              className="rounded-lg"
              width="1200"
              height="615"
              controls
            >
              <source src={videoUrls[currentIndex].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex mt-4 pt-2 gap-6 justify-center">
            {videoUrls.map((video: string, index: number) => (
              <h1
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full  text-white h-[8px] w-[8px] font-medium ${
                  currentIndex == index
                    ? "bg-red-500 w-[16px]"
                    : "bg-gray-500 hover:bg-red-600"
                }`}
              ></h1>
            ))}
          </div>
        </div>
      ) : (
        "No Videos Found"
      )}
    </div>
  );
};

export default RestaurantVideos;
