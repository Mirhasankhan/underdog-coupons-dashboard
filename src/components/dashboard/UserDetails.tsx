import Image from "next/image";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { JWTDecode } from "@/utils/jwt";

const UserDetails = ({ isOpen }: { isOpen: boolean }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { decoded } = JWTDecode();
  const singOut = () => {
    dispatch(
      setUser({
        name: "",
        email: "",
        role: "",
        token: "",
      })
    );
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="border p-3 rounded-md w-full bg-white"
        >
          <div className="flex justify-center gap-4">
            <Image
              className="rounded-lg"
              src="https://media.istockphoto.com/id/2017256409/photo/young-asian-man-on-the-metro.webp?a=1&b=1&s=612x612&w=0&k=20&c=BPUvlXun78PFL49ZqJwdhQsgAa_OhTh9Qpq-jvgdJmg="
              height={60}
              width={60}
              alt="Profile Picture"
            />
            <div>
              <h1 className="text-xl font-semibold">{decoded?.userName}</h1>
              <p>{decoded?.email}</p>
            </div>
          </div>
          <Button
            onClick={() => singOut()}
            className="w-full mt-3"
            variant={"outline"}
          >
            Logout
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserDetails;
