"use client";

import { useCreateCouponMutation } from "@/redux/features/coupon/couponApi";
import { CouponFormValues } from "@/types/common";
import { generateRandomCode } from "@/utils/generateRandomCode";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast } from "sonner";

const AddCoupon = ({ setIsAdd }: { setIsAdd: (value: boolean) => void }) => {
  const [createCoupon] = useCreateCouponMutation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CouponFormValues>({
    defaultValues: {
      used: 0,
    },
  });

  const onSubmit: SubmitHandler<CouponFormValues> = async (data) => {
    const activeFromISO = new Date(data.activeFrom).toISOString();
    const activeToISO = new Date(data.activeTo).toISOString();

    if (new Date(activeFromISO) > new Date(activeToISO)) {
      return toast.error(
        "The 'activeFrom' date cannot be later than the 'activeTo' date."
      );
    }
    setIsLoading(true);

    const code = generateRandomCode();
    const newCoupon = {
      ...data,
      code,
      activeFrom: activeFromISO,
      activeTo: activeToISO,
    };
    const res = await createCoupon(newCoupon);
    if (res.data.success == true) {
      toast.success(res.data.message);
      reset();
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-1 pb-2">
        <IoIosArrowRoundBack
          onClick={() => setIsAdd(false)}
          className="text-2xl cursor-pointer"
        />
        <h1 className="font-semibold">Add Coupon</h1>
      </div>
      <h1 className="pt-4 pb-2 font-medium">Coupon Overview</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Plan Type</label>
            <select
              {...register("plan", {
                required: "Plan Type is required",
              })}
              className="w-full p-2 border rounded-md"
            >
              <option value="BASIC">BASIC</option>
              <option value="PREMIUM">PREMIUM</option>
            </select>
            {errors.plan && (
              <p className="text-red-500 text-sm">{errors.plan.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium">Coupon Name</label>
            <input
              {...register("couponName", {
                required: "Coupon Name is required",
              })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter coupon name"
            />
            {errors.couponName && (
              <p className="text-red-500 text-sm">
                {errors.couponName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Active From</label>
            <input
              type="date"
              {...register("activeFrom", {
                required: "Active From date is required",
              })}
              className="w-full p-2 border rounded-md"
            />
            {errors.activeFrom && (
              <p className="text-red-500 text-sm">
                {errors.activeFrom.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-medium">Active To</label>
            <input
              type="date"
              {...register("activeTo", {
                required: "Active To date is required",
              })}
              className="w-full p-2 border rounded-md"
            />
            {errors.activeTo && (
              <p className="text-red-500 text-sm">{errors.activeTo.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Limit Number</label>
            <input
              type="number"
              {...register("limitNumber", {
                required: "Limit Number is required",
                min: { value: 1, message: "Limit Number must be at least 1" },
                valueAsNumber: true,
              })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter limit number"
            />
            {errors.limitNumber && (
              <p className="text-red-500 text-sm">
                {errors.limitNumber.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-medium">Used</label>
            <input
              readOnly
              type="number"
              {...register("used", {
                required: "Used From is required",
                min: { value: 0, message: "Used From cannot be negative" },
                valueAsNumber: true,
              })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter used from number"
            />
            {errors.used && (
              <p className="text-red-500 text-sm">{errors.used.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-5">
          <button
            onClick={() => setIsAdd(false)}
            disabled={isLoading}
            className="bg-transparent border border-[#F13300] py-1 px-4 rounded-md text-[#F13300]"
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-[#F13300] text-white py-1 px-5 font-medium rounded-md"
          >
            {isLoading ? <Loader className="animate-spin"></Loader> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoupon;
