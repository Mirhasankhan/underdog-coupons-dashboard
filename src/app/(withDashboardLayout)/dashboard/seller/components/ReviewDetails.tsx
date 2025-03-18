import { useAllReviewsQuery } from "@/redux/features/reviews/reviewApi";
import { TReview } from "@/types/common";
import "@smastrom/react-rating/style.css";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { FaStar } from "react-icons/fa";

const ReviewDetails = ({ restaurantId }: { restaurantId: string }) => {
  const { data: myReviews } = useAllReviewsQuery(restaurantId);

  return (
    <div className="border rounded-lg">
      <h1 className="text-2xl font-medium p-6 border-b">Customer Reviews</h1>
      <div>
        {myReviews?.result?.reviews?.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer Name</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Comment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myReviews?.result?.reviews?.map((review: TReview) => (
                <TableRow key={review.id}>
                  <TableCell className="font-medium md:w-48">
                    {review.userName}
                  </TableCell>
                  <TableCell className=" md:w-40">
                    <div className="flex gap-2 text-[#636F85] items-center">
                      <FaStar className="text-orange-400" />
                      <h1>{review.rating}</h1>
                    </div>
                  </TableCell>
                  <TableCell>{review.comment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-center text-red-600 text-2xl pt-12">
            No Restaurant Found
          </p>
        )}
      </div>
      {/* <div className="shadow-[0px_4px_15px_rgba(255,69,58,0.15)] p-3 h-screen overflow-y-scroll">
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
      </div> */}
    </div>
  );
};

export default ReviewDetails;
