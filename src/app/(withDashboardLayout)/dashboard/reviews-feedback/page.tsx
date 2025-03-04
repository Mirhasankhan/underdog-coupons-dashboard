"use client";
import { useAllReviewsQuery } from "@/redux/features/reviews/reviewApi";
import { Spot } from "@/types/common";
import { Loader } from "lucide-react";
import { useState } from "react";

const SpotListings = () => {
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const { data: allReviews,isLoading } = useAllReviewsQuery("");

  if(isLoading){
    return <Loader className="animate-spin mx-auto w-24 h-24  text-red-500" />
  }


  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Parking Spot Reviews And Feedback
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {allReviews?.result?.map((spot: Spot) => (
          <div
            key={spot.id}
            className={`p-5 rounded-lg shadow-lg text-white bg-blue-500`}
          >
            <h2 className="text-2xl font-bold">{spot.name}</h2>
            <p className="text-lg">{spot.location}</p>

            <p className="mt-2 text-lg">Total Reviews: {spot.reviews.length}</p>

            {spot.reviews.length > 0 && (
              <button
                className="mt-3 px-5 py-2 bg-white text-blue-700 rounded-md font-semibold transition duration-300 hover:bg-gray-200"
                onClick={() => setSelectedSpot(spot)}
              >
                Show Reviews
              </button>
            )}
          </div>
        ))}
      </div>
      {selectedSpot && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 text-gray-800 relative">
            <h2 className="text-2xl font-bold mb-3 text-center">
              Reviews for {selectedSpot.name}
            </h2>
            <div className="space-y-3">
              {selectedSpot.reviews.map((review, index) => (
                <div key={index} className="border-b py-2">
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-yellow-200 font-semibold text-lg">
                    ⭐ {review.rating}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
              onClick={() => setSelectedSpot(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotListings;
