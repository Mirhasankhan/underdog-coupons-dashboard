import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {  Loader, Plus } from "lucide-react";
import { useRestaurantsQuery } from "@/redux/features/restaurant/restaurantApi";
import { TRestaurant } from "@/types/common";
import Restaurant from "./Restaurant";

const AllRestaurants = ({
  setIsAdd,
}: {
  setIsAdd: (value: boolean) => void;
}) => {
  const { data: allRestaurants, isLoading } = useRestaurantsQuery("");


  if (isLoading) {
    return <Loader className="animate-spin mx-auto" size={80}></Loader>;
  }

  return (
    <div>
      <div className="flex justify-between pb-5 items-center">
        <h1 className="text-xl font-medium">Restaurant</h1>

        <button
          onClick={() => setIsAdd(true)}
          className="bg-[#F13300] flex items-center text-white py-1 px-2 font-medium rounded-full"
        >
          <Plus size={15} />
          Add Restaurant
        </button>
      </div>
      <div>
        {
          allRestaurants?.result?.length > 0 ? <Table className="border rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Review</TableHead>
              <TableHead>Loation</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allRestaurants?.result?.map((restaurant: TRestaurant) => (
             <Restaurant key={restaurant.id} restaurant={restaurant}></Restaurant>
            ))}
          </TableBody>
        </Table>:<p className="text-center text-red-600 text-2xl pt-12">No Restaurant Found</p>
        }
      </div>
    </div>
  );
};

export default AllRestaurants;
