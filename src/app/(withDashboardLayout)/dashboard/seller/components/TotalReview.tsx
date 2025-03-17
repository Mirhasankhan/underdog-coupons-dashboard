import { useAllReviewsQuery } from "@/redux/features/reviews/reviewApi";
import { CalendarArrowDown } from "lucide-react";
import Link from "next/link";

const TotalReview = ({ restaurantId }: { restaurantId: string }) => {
  const { data: myReviews } = useAllReviewsQuery(restaurantId);
  const positive = myReviews?.result?.reviews?.filter(
    (rating: { rating: number }) => rating.rating > 3
  );
  const negative = myReviews?.result?.reviews?.filter(
    (rating: { rating: number }) => rating.rating < 4
  );

  const result = myReviews?.result?.reviews;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#5b71b9] p-3 rounded-md text-white">
          <h1 className="text-xl text-gray-300">Total Reviews</h1>
          <h2 className="text-2xl font-semibold py-3">{result?.length}</h2>
          <div className="flex justify-between items-center">
            <Link className="underline" href="/">
              View All Reviews
            </Link>
            <div className="p-4 rounded-md bg-[#6c7fc0]">
              <CalendarArrowDown />
            </div>
          </div>
        </div>
        <div className="bg-[#67b173] p-3 rounded-md text-white">
          <h1 className="text-xl text-gray-300">Total Positive Reviews</h1>
          <h2 className="text-2xl font-semibold py-3">{positive?.length}</h2>
          <div className="flex justify-between items-center">
            <Link className="underline" href="/">
              View All Reviews
            </Link>
            <div className="p-4 rounded-md bg-[#76b981]">
              <CalendarArrowDown />
            </div>
          </div>
        </div>
        <div className="bg-[#29badb] p-3 rounded-md text-white">
          <h1 className="text-xl text-gray-300">Total Negative Reviews</h1>
          <h2 className="text-2xl font-semibold py-3">{negative?.length}</h2>
          <div className="flex justify-between items-center">
            <Link className="underline" href="/">
              View All Reviews
            </Link>
            <div className="p-4 rounded-md bg-[#3fc1df]">
              <CalendarArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalReview;
