import { Eye, Trash2 } from "lucide-react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { TRestaurant } from "@/types/common";
import { useDeleteRestaurantMutation } from "@/redux/features/restaurant/restaurantApi";
import { toast } from "sonner";
import UpdateModal from "./UpdateModal";

const Restaurant = ({ restaurant }: { restaurant: TRestaurant }) => {
  const [deleteRestaurant] = useDeleteRestaurantMutation();
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const handleDeleteRestaurant = async (id: string) => {
    const res = await deleteRestaurant(id);
    if (res.data.success == true) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };
  return (
    <TableRow key={restaurant.id}>
      <TableCell className="text-[#2D2D2D] flex items-center gap-2">
        <Image
          className="rounded-full"
          alt=""
          src={restaurant.imageUrl}
          width={40}
          height={40}
        ></Image>
        {restaurant.restaurantName}
      </TableCell>
      <TableCell>
        <div className="flex gap-2 text-[#636F85] items-center">
          <FaStar className="text-orange-400" />
          {restaurant.reviews.length > 0
            ? (
                restaurant.reviews.reduce(
                  (sum, r: { rating: number }) => sum + r.rating,
                  0
                ) / restaurant.reviews.length
              ).toFixed(1)
            : "0"}{" "}
          ({restaurant.reviews.length} Reviews)
        </div>
      </TableCell>
      <TableCell className="text-[#636F85]">{restaurant.location}</TableCell>
      <TableCell className="text-[#636F85]">{restaurant.contact}</TableCell>
      <TableCell className="relative flex items-center gap-2 w-[150px]">
        <Eye />
        <div
          className="cursor-pointer"
          onClick={() =>
            setOpenMenuId(openMenuId === restaurant.id ? null : restaurant.id)
          }
        >
          <HiOutlineDotsVertical />
        </div>
        {openMenuId === restaurant.id && (
          <div className="absolute top-0 right-0 flex gap-2 items-center bg-white shadow-md p-2 rounded">
            <button
              onClick={() => handleDeleteRestaurant(restaurant.id)}   
              className="border-r pr-2"          
            >
              <Trash2/>
            </button>
            <UpdateModal restaurant={restaurant}></UpdateModal>
          </div>
        )}
      </TableCell>
    </TableRow>
  );
};

export default Restaurant;
