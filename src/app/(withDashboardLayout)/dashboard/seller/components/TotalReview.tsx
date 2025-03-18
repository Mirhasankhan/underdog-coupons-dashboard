import { useAllReviewsQuery } from "@/redux/features/reviews/reviewApi";
import { CalendarArrowDown } from "lucide-react";

const TotalReview = ({ restaurantId }: { restaurantId: string }) => {
  const { data: myReviews } = useAllReviewsQuery(restaurantId);

  const result = myReviews?.result?.reviews;
  const averageRating =
    result?.length > 0
      ? result.reduce(
          (sum: number, review: { rating: number }) =>
            sum + (review.rating || 0),
          0
        ) / result.length
      : 0;
  return (
    <div className="border p-6 rounded-md mb-6">
      <h1 className="text-xl pb-2 font-medium">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-3 flex gap-5 items-center  rounded-md">
          <div className="p-2 rounded-md border">
            <CalendarArrowDown className="-rotate-90 text-[#F13300]" />
          </div>
          <div>
            <h1 className="text-xl ">Total Reviews</h1>
            <h2 className="text-2xl font-semibold py-3">
              {result?.length || 0}
            </h2>
          </div>
        </div>
        <div className="border p-3 flex gap-5 items-center  rounded-md">
          <div className="p-2 rounded-md border">
            <CalendarArrowDown className="-rotate-90 text-[#F13300]" />
          </div>
          <div>
            <h1 className="text-xl ">Average Rating</h1>
            <h2 className="text-2xl font-semibold py-3">
              {averageRating ? averageRating.toFixed(2) : 0}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalReview;
