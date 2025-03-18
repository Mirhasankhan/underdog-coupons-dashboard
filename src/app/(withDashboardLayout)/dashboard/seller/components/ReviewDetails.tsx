import { useAllReviewsQuery } from "@/redux/features/reviews/reviewApi";
import { TReview } from "@/types/common";
import { Rating } from "@smastrom/react-rating";
import { format } from "date-fns";
import "@smastrom/react-rating/style.css";
import { MessageCircle } from "lucide-react";

const ReviewDetails = ({ restaurantId }: { restaurantId: string }) => {
  const { data: myReviews } = useAllReviewsQuery(restaurantId);

  return (
    <div>
      <h1 className="text-2xl pb-6">All Reviews</h1>
      <div className="shadow-[0px_4px_15px_rgba(255,69,58,0.15)] p-3 h-[440px] overflow-y-scroll">
        {myReviews?.result?.reviews?.length > 0 ? (
          <div className="grid md:grid-cols-1 gap-5 w-full">
            {myReviews?.result?.reviews?.map((review: TReview) => (
              <div key={review.id} className="border-b  p-2 w-full">
                <div className="flex items-center gap-12">
                  <h1 className="text-xl font-medium">{review.userName}</h1>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={review.rating}
                  ></Rating>
                </div>
                <div className="flex items-center gap-1 py-3">
                  <MessageCircle />
                  {review.comment}
                </div>
                <p className="text-gray-500">
                  {format(new Date(review.createdAt), "MMMM dd, yyyy hh:mm a")}
                </p>
              </div>
            ))}
          </div>
        ) : (
          "No Reviews to show"
        )}
      </div>
    </div>
  );
};

export default ReviewDetails;
