import { IoIosArrowRoundBack } from "react-icons/io";
import { Progress } from "@/components/ui/progress";
import { useAllReviewsQuery } from "@/redux/features/reviews/reviewApi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Ratings = () => {
  const { data: reviews } = useAllReviewsQuery("");
  const averageRating = reviews?.result?.reviews.length
    ? (
        reviews.result.reviews.reduce(
          (sum: number, review: { rating: number }) => sum + review.rating,
          0
        ) / reviews.result.reviews.length
      ).toFixed(1)
    : 0;

  return (
    <div className="p-4 shadow-[0px_4px_15px_rgba(255,69,58,0.15)] rounded-md">
      <div className="flex items-center gap-1 border-b pb-5">
        <IoIosArrowRoundBack className="text-2xl" />
        <h1 className="font-semibold">Rating & Reviews</h1>
      </div>
      <div className="grid grid-cols-2 pt-4">
        <div className="flex flex-col items-center p-3 border-r">
          <h1 className="text-3xl font-semibold">{averageRating}</h1>
          <div className="flex w-full justify-between text-orange-400 py-4 text-xl">
            <Rating
              style={{ maxWidth: 150 }}
              value={Number(Number(averageRating).toFixed())}
            />
          </div>
          <h1>({reviews?.result?.reviews.length} reviews)</h1>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h1 className="font-medium">5</h1>
            <Progress
              value={reviews?.result?.ratingPercentages[4].percentage}
              className="bg-gray-200 [&>*]:bg-green-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="font-medium">4</h1>
            <Progress
              value={reviews?.result?.ratingPercentages[3].percentage}
              className="bg-gray-200 [&>*]:bg-green-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="font-medium">3</h1>
            <Progress
              value={reviews?.result?.ratingPercentages[2].percentage}
              className="bg-gray-200 [&>*]:bg-green-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="font-medium">2</h1>
            <Progress
              value={reviews?.result?.ratingPercentages[1].percentage}
              className="bg-gray-200 [&>*]:bg-green-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="font-medium">1</h1>
            <Progress
              value={reviews?.result?.ratingPercentages[0].percentage}
              className="bg-gray-200 [&>*]:bg-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
