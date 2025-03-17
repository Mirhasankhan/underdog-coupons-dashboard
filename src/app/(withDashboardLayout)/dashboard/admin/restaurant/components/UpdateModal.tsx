import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RestaurantFormValues, TRestaurant } from "@/types/common";
import { useForm, SubmitHandler } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useUpdateRestaurantMutation } from "@/redux/features/restaurant/restaurantApi";
import { toast } from "sonner";

const UpdateModal = ({ restaurant }: { restaurant: TRestaurant }) => {
  const [updateRestaurant] = useUpdateRestaurantMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
    const res = await updateRestaurant({
      id: restaurant.id,
      updatedData: data,
    });
    console.log(res);
    if (res.data.success == true) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{restaurant.restaurantName}</DialogTitle>
          <DialogDescription>
            Make changes to your restaurant here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-white">
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
          <div className="flex justify-end gap-4 mt-5">
            <button
              type="submit"
              className="bg-[#F13300] text-white py-1 px-5 font-medium rounded-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModal;
