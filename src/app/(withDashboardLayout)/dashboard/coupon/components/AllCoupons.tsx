import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader, Plus } from "lucide-react";
import { useCouponsQuery } from "@/redux/features/coupon/couponApi";
import { TCoupon } from "@/types/common";
import { format } from "date-fns";

const AllCoupons = ({ setIsAdd }: { setIsAdd: (value: boolean) => void }) => {
  const { data: allCoupons,isLoading } = useCouponsQuery("");

  if (isLoading) {
    return <Loader className="animate-spin mx-auto" size={80}></Loader>;
  }

  return (
    <div>
      <div className="flex justify-between pb-5 items-center">
        <h1 className="text-xl font-medium">Coupon</h1>

        <button
          onClick={() => setIsAdd(true)}
          className="bg-[#F13300] flex items-center text-white py-1 px-2 font-medium rounded-full"
        >
          <Plus size={15} />
          Add Coupon
        </button>
      </div>
    <div>
      {
        allCoupons?.result?.length > 0 ?   <Table className="border rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Active From</TableHead>
            <TableHead>Active To</TableHead>
            <TableHead>Limit Number</TableHead>
            <TableHead>Used</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allCoupons?.result?.map((coupon: TCoupon) => (
            <TableRow key={coupon.id}>
              <TableCell className="font-medium">{coupon.couponName}</TableCell>
              <TableCell className="font-medium">{coupon.code}</TableCell>
              <TableCell className="text-red-500">
                {format(new Date(coupon.activeFrom), "MMMM dd, yyyy")}
              </TableCell>
              <TableCell className="text-red-500">
                {format(new Date(coupon.activeTo), "MMMM dd, yyyy")}
              </TableCell>
              <TableCell>{coupon.limitNumber}</TableCell>
              <TableCell>{coupon.used}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>:<p className="text-center text-red-600 text-2xl pt-12">No Coupons Found</p>
      }
    </div>
    </div>
  );
};

export default AllCoupons;
