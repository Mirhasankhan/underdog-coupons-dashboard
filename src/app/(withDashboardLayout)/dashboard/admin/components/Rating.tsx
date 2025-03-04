import { IoIosArrowRoundBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";

const Rating = () => {
  return (
    <div className="p-4 shadow-[0px_4px_15px_rgba(255,69,58,0.15)] rounded-md">
      <div className="flex items-center gap-1 border-b pb-5">
        <IoIosArrowRoundBack className="text-2xl" />
        <h1 className="font-semibold">Rating & Reviews</h1>
      </div>
      <div className="grid grid-cols-2 pt-4">
        <div className="flex flex-col items-center p-3 border-r">
          <h1 className="text-3xl font-semibold"> 4.8</h1>
          <div className="flex w-full justify-between text-orange-400 py-2 text-xl">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
          <h1>(4.8k reviews)</h1>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <Progress value={80} className="bg-gray-200 [&>*]:bg-green-500" />
          <Progress value={60} className="bg-gray-200 [&>*]:bg-green-500" />
          <Progress value={50} className="bg-gray-200 [&>*]:bg-green-500" />
          <Progress value={40} className="bg-gray-200 [&>*]:bg-green-500" />
          <Progress value={10} className="bg-gray-200 [&>*]:bg-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Rating;
