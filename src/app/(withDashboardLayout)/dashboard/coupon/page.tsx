"use client"
import { useState } from "react";
import AllCoupons from "./components/AllCoupons";
import AddCoupon from "./components/AddCoupon";

const Coupons = () => {
  const [isAdd,setIsAdd] = useState(false)
   return (
    <div>
     {!isAdd &&  <AllCoupons setIsAdd={setIsAdd}></AllCoupons>}
     {isAdd &&  <AddCoupon setIsAdd={setIsAdd}></AddCoupon>}
    </div>
  );
};

export default Coupons;
