import { useAllReviewsQuery } from "@/redux/features/reviews/reviewApi";
import { TReview } from "@/types/common";
import { Rating } from "@smastrom/react-rating";
import { format } from "date-fns";
import "@smastrom/react-rating/style.css";

const ReviewDetails = ({ restaurantId }: { restaurantId: string }) => {
  const { data: myReviews } = useAllReviewsQuery(restaurantId);
  console.log(myReviews?.result.reviews);
  return (
    <div>
      <h1 className="text-2xl pb-6">All Reviews</h1>
      <div className="grid md:grid-cols-2 gap-5 w-full">
        {myReviews?.result?.reviews?.map((review: TReview) => (
          <div
            key={review.id}
            className="shadow-[0px_4px_15px_rgba(255,69,58,0.15)]  p-2 w-full"
          >
            <div className="flex items-center gap-12">
              <h1 className="text-xl font-medium">{review.userName}</h1>
              <Rating style={{ maxWidth: 120 }} value={review.rating}></Rating>
            </div>
            <h1 className="py-2">{review.comment}</h1>
            <p className="text-gray-500">
              {format(new Date(review.createdAt), "MMMM dd, yyyy hh:mm a")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewDetails;
