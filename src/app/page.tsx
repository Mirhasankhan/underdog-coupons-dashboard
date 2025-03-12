"use client";
import { TLoginValues } from "@/types/common";
import Image from "next/image";
import logo from "../assets/image 1.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useState } from "react";
import { Loader } from "lucide-react";

const AdminLogin = () => {
  const [loginAdmin] = useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValues>();

  const onSubmit: SubmitHandler<TLoginValues> = async (data) => {
    setIsLoading(true);
    const response = await loginAdmin(data);
    if (response.data?.success == true) {
      dispatch(
        setUser({
          name: response.data.result.userInfo.userName,
          email: response.data.result.userInfo.email,
          role: response.data.result.userInfo.role,
          token: response.data.result.accessToken,
        })
      );
      localStorage.setItem("token", response.data.result.accessToken);
      toast.success(response.data.message);
      router.push("/dashboard/admin");
      setIsLoading(false);
    } else if (response.error) {
      toast.error(response?.error?.data?.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full md:w-1/3 md:mx-auto shadow-[0px_4px_15px_rgba(255,69,58,0.15)] p-5 mt-16">
      <div className="flex  rounded-full gap-1 items-center justify-center">
        <div className="bg-white p-1 rounded-full border-[6px] border-[#F45E36]">
          <Image alt="Logo" src={logo} height={60} width={60} />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg pt-6 bg-white"
      >
        <div className="mb-4">
          <label className="block font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
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
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
