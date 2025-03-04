import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import resImage from "../../../../assets/Rectangle.png";

const Reviews = () => {
  return (
    <div>
      <div className="grid grid-cols-1 border-b md:grid-cols-3 pt-4">
        <div className="col-span-1 flex gap-4 items-center p-4">
          <Image src={resImage} height={50} width={100} alt=""></Image>
          <div>
            <h1 className="text-xl font-medium">The Breakfast Club</h1>
            <div className="flex gap-2 items-center">
              <FaStar className="text-orange-400"/> 4.7 (1.7k)
            </div>
          </div>
        </div>
        <div className="col-span-2 p-4  gap-3">
          <div className="flex gap-8 items-center">         
            <h1 className="md:text-xl font-semibold">Charlotte Hain</h1>
            <div className="flex text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p className="py-1">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nam porro consequatur, eos harum delectus debitis, numquam est sit amet dolores sequi id, rerum magnam?
          </p>
          <p className="text-gray-500">6 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
