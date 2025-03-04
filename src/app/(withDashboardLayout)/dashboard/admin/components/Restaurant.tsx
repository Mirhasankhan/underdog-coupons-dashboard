import Image from "next/image";
import resImag from "../../../../../assets/Rectangle.png";
import { FaStar } from "react-icons/fa";
import userImg from "../../../../../assets/Ellipse.png";

const Restaurant = () => {
  return (
    <div className="p-4 shadow-[0px_4px_15px_rgba(255,69,58,0.15)] h-80 rounded-md overflow-auto">
      <h1 className="font-semibold">Restaurant</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-4">
        <div className="flex gap-4 items-center p-4 border-r">
          <Image src={resImag} height={50} width={100} alt=""></Image>
          <div>
            <h1 className="text-xl font-medium">The Breakfast Club</h1>
            <div className="flex items-center">
              <FaStar /> 4.7 (1.7k)
            </div>
          </div>
        </div>
        <div className="p-4  gap-3">
          <div className="flex justify-between items-center">
            <Image alt="" src={userImg} height={60} width={60}></Image>
            <h1 className="md:text-xl font-semibold">Charlotte Hain</h1>
            <div className="flex text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nesciunt. Error dolores ullam id! Reprehenderit.</p>
          <p className="text-gray-500">6 days ago</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  pt-4">
        <div className="flex gap-4 items-center p-4 border-r">
          <Image src={resImag} height={50} width={100} alt=""></Image>
          <div>
            <h1 className="text-xl font-medium">The Breakfast Club</h1>
            <div className="flex items-center">
              <FaStar /> 4.7 (1.7k)
            </div>
          </div>
        </div>
        <div className="p-4  gap-3">
          <div className="flex justify-between items-center">
            <Image alt="" src={userImg} height={60} width={60}></Image>
            <h1 className="md:text-xl font-semibold">Charlotte Hain</h1>
            <div className="flex text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nesciunt. Error dolores ullam id! Reprehenderit.</p>
          <p className="text-gray-500">6 days ago</p>
        </div>
      </div>
      
    </div>
  );
};

export default Restaurant;
