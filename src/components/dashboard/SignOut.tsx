import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { CircleHelp } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const SignOut = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(
      setUser({
        name: "hasan",
        email: "mirhasan.bd1@gmail.com",
        role: "ADMIN",
        token: "",
      })
    );
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <button
      onClick={() => logOut()}
      className="flex items-center gap-2 text-[#718096] hover:text-[#F13300]  font-medium mx-10"
    >
      <CircleHelp />
      Sign Out
    </button>
  );
};

export default SignOut;
