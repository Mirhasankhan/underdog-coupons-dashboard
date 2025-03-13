import {
  useCouponsQuery,
  useDeleteCouponMutation,
} from "@/redux/features/coupon/couponApi";
import { TCoupon } from "@/types/common";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const Coupons = () => {
  const { data: allCoupons } = useCouponsQuery("");
  const [processing, setProcessing] = useState<string | null>(null);
  const [deleteCoupon] = useDeleteCouponMutation();
  const unUsedCoupons = allCoupons?.result?.filter(
    (coupon: { used: number }) => coupon.used < 1
  );

  const handleDeleteCoupon = async (couponId: string) => {
    setProcessing(processing === couponId ? null : couponId);
    const res = await deleteCoupon(couponId);
    if (res.data.success == true) {
      toast.success(res.data.message);
      setProcessing(null);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <div className="md:h-[415px] overflow-y-scroll rounded-md shadow-[0px_4px_15px_rgba(255,69,58,0.15)] p-4">
      <h1 className="text-xl font-medium pb-2">Unused Coupons</h1>

      <div>
        {unUsedCoupons?.length > 0 ? (
          <div>
            {unUsedCoupons?.map((coupon: TCoupon) => (
              <div
                className="flex justify-between py-2 text-[#06402B]  items-center"
                key={coupon.id}
              >
                <h1 className="font-medium">{coupon.code}</h1>
                <button
                  onClick={() => handleDeleteCoupon(coupon.id)}
                  disabled={processing == coupon.id ? true : false}
                  className="text-[#F13300] font-medium px-3 py-1 rounded-md bg-red-300"
                >
                  {processing == coupon.id ? (
                    <Loader className="animate-spin text-gray-700"></Loader>
                  ) : (
                    "Delete"
                  )}
                </button>
              </div>
            ))}
          </div>
        ) : (
          "No Unused Coupon Found"
        )}
      </div>
    </div>
  );
};

export default Coupons;
