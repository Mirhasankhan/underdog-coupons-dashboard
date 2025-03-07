import {
  useCouponsQuery,
  useDeleteCouponMutation,
} from "@/redux/features/coupon/couponApi";
import { TCoupon } from "@/types/common";
import React from "react";
import { toast } from "sonner";

const Coupons = () => {
  const { data: allCoupons } = useCouponsQuery("");
  const [deleteCoupon] = useDeleteCouponMutation();
  const unUsedCoupons = allCoupons?.result?.filter(
    (coupon: { used: number }) => coupon.used < 1
  );

  const handleDeleteCoupon = async (couponId: string) => {
   const res = await deleteCoupon(couponId)
   if(res.data.success == true){
    toast.success(res.data.message)
   }
   else{
    toast.error(res.data.message)
   }
  };

  return (
    <div className="rounded-md shadow-[0px_4px_15px_rgba(255,69,58,0.15)] p-4">
      <h1 className="text-xl font-medium pb-2">Unused Coupons</h1>
      {unUsedCoupons?.map((coupon: TCoupon) => (
        <div
          className="flex justify-between py-2 text-[#06402B]  items-center"
          key={coupon.id}
        >
          <h1>{coupon.couponName}</h1>
          <button
            onClick={() => handleDeleteCoupon(coupon.id)}
            className="text-[#F13300] font-medium px-3 py-1 rounded-md bg-red-300"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Coupons;
