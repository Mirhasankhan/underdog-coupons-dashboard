"use client";

import { RestaurantFormValues } from "@/types/common";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoIosArrowRoundBack } from "react-icons/io";

const AddRestaurant = ({
  setIsAdd,
}: {
  setIsAdd: (value: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RestaurantFormValues>();

  const onSubmit: SubmitHandler<RestaurantFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex items-center gap-1 pb-2">
        <IoIosArrowRoundBack
          onClick={() => setIsAdd(false)}
          className="text-2xl cursor-pointer"
        />
        <h1 className="font-semibold text-xl">Add Restaurant</h1>
      </div>
      <h1 className="pt-4 pb-2 font-medium">Restaurant Details</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image", {
                required: "Restaurant image is required",
              })}
              className="w-full p-2 border rounded-md"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium">Upload Video</label>
            <input
              type="file"
              accept="video/*"
              {...register("video", {
                required: "Restaurant video is required",
              })}
              className="w-full p-2 border rounded-md"
            />
            {errors.video && (
              <p className="text-red-500 text-sm">{errors.video.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Restaurant Name</label>
            <input
              {...register("restaurantName", {
                required: "Restaurant name is required",
              })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter restaurant name"
            />
            {errors.restaurantName && (
              <p className="text-red-500 text-sm">
                {errors.restaurantName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium">Location</label>
            <input
              {...register("location", { required: "Location is required" })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter restaurant location"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Review</label>
            <select
              {...register("review", { required: "Please select a review" })}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Review</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
            </select>
            {errors.review && (
              <p className="text-red-500 text-sm">{errors.review.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium">Phone</label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-5">
          <button
            onClick={() => setIsAdd(false)}
            className="bg-transparent border border-[#F13300] py-1 px-4 rounded-md text-[#F13300]"
          >
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

export default AddRestaurant;
