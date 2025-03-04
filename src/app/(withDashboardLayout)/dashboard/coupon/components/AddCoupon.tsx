"use client";

import { CouponFormValues } from "@/types/common";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoIosArrowRoundBack } from "react-icons/io";

const AddCoupon = ({ setIsAdd }: { setIsAdd: (value: boolean) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CouponFormValues>();

  const onSubmit: SubmitHandler<CouponFormValues> = (data) => {
    console.log(data);
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
      <form onSubmit={handleSubmit(onSubmit)} className=" rounded-lg  bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="mb-4">
            <label className="block font-medium">Code</label>
            <input
              {...register("code", { required: "Code is required" })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter coupon code"
            />
            {errors.code && (
              <p className="text-red-500 text-sm">{errors.code.message}</p>
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
            <label className="block font-medium">Used From</label>
            <input
              type="number"
              {...register("usedFrom", {
                required: "Used From is required",
                min: { value: 0, message: "Used From cannot be negative" },
              })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter used from number"
            />
            {errors.usedFrom && (
              <p className="text-red-500 text-sm">{errors.usedFrom.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-5">
          <button  onClick={() => setIsAdd(false)} className="bg-transparent border border-[#F13300] py-1 px-4 rounded-md  text-[#F13300]">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#F13300] text-white py-1 px-5 font-medium rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoupon;
