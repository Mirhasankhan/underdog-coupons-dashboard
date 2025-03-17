"use client";
import { TLoginValues } from "@/types/common";
import { useForm, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";

import { toast } from "sonner";
import { useState } from "react";
import { Key, Loader } from "lucide-react";

const ChangePassword = () => {
  const [createNewPassword] = useChangePasswordMutation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLoginValues>();

  const onSubmit: SubmitHandler<TLoginValues> = async (data) => {
    setIsLoading(true);
    const response = await createNewPassword(data);
    if (response.data?.success == true) {
      toast.success(response.data.message);
      reset();
      setIsLoading(false);
    } else if (response.error) {
      toast.error("Old Password Didn't Match");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full md:w-1/3 md:mx-auto rounded-md shadow-[0px_4px_15px_rgba(255,69,58,0.15)] p-5 mt-16">
      <div className="flex  rounded-full gap-1 items-center justify-center">
        <div className="bg-white p-1 rounded-full border-[6px] border-[#F45E36]">
          <Key />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg pt-6 bg-white"
      >
        <div className="mb-4">
          <label className="block font-medium">Current Password</label>
          <input
            type="password"
            {...register("oldPassword", {
              required: "Current password is required",
            })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter current password"
          />
          {errors.oldPassword && (
            <p className="text-red-500 text-sm">{errors.oldPassword.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-medium">New Password</label>
          <input
            type="password"
            {...register("newPassword", {
              required: "New Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                message:
                  "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
              },
            })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter new password"
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
          )}
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-[#F13300] text-white py-3 w-full font-medium rounded-md"
        >
          {isLoading ? (
            <Loader className="animate-spin mx-auto"></Loader>
          ) : (
            "Save"
          )}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
