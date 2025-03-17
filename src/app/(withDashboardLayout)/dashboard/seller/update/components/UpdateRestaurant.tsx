"use client";

import { RestaurantFormValues, TRestaurant } from "@/types/common";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useUpdateRestaurantMutation } from "@/redux/features/restaurant/restaurantApi";

const UpdateRestaurantData = ({ restaurant }: { restaurant: TRestaurant }) => {
  const [updateRestaurant] = useUpdateRestaurantMutation();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [videoFiles, setVideoFiles] = useState<File[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);

      if (event.target.name === "images") {
        setImageFiles(filesArray);
      } else if (event.target.name === "videos") {
        setVideoFiles(filesArray);
      }
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RestaurantFormValues>({
    defaultValues: {
      restaurantName: restaurant.restaurantName || "",
      location: restaurant.location || "",
      contact: restaurant.contact || "",
    },
  });

  useEffect(() => {
    reset({
      restaurantName: restaurant.restaurantName || "",
      location: restaurant.location || "",
      contact: restaurant.contact || "",
    });
  }, [restaurant, reset]);

  const onSubmit: SubmitHandler<RestaurantFormValues> = async (data) => {
    setIsloading(true);

    const formData = new FormData();
    imageFiles.forEach((file) => formData.append("imageUrl", file));
    videoFiles.forEach((file) => formData.append("videoUrl", file));

    Object.keys(data).forEach((key) => {
      const typedKey = key as keyof RestaurantFormValues;
      if (data[typedKey] !== undefined) {
        formData.append(typedKey, String(data[typedKey]));
      }
    });

    const response = await updateRestaurant({
      id: restaurant.id,
      updatedData: formData,
    });
    if (response.data.success == true) {
      reset();
      toast.success("Restaurant Updated Successfully");
      setIsloading(false);
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="shadow-[0px_4px_15px_rgba(255,69,58,0.15)] p-4">
      <h1 className="pt-4 pb-5 text-xl font-medium">Restaurant Details</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium">Upload Image</label>
            <input
              type="file"
              name="images"
              onChange={handleFileChange}
              accept="image/*"
              multiple
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Upload Video</label>
            <input
              type="file"
              name="videos"
              onChange={handleFileChange}
              accept="video/*"
              multiple
              className="w-full p-2 border rounded-md"
            />
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
            <label className="block font-medium">Phone</label>
            <input
              type="tel"
              {...register("contact", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter phone number"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm">{errors.contact.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-5">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#F13300] text-white py-2 px-5 font-medium rounded-md"
          >
            {isLoading ? (
              <Loader className="animate-spin"></Loader>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRestaurantData;
