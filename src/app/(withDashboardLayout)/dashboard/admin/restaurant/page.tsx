"use client";
import { useState } from "react";
import AllRestaurants from "./components/AllRestaurant";
import AddRestaurant from "./components/AddRestaurant";

const Restaurant = () => {
  const [isAdd, setIsAdd] = useState(false);
  return (
    <div>
         {!isAdd &&  <AllRestaurants setIsAdd={setIsAdd}></AllRestaurants>}
         {isAdd &&  <AddRestaurant setIsAdd={setIsAdd}></AddRestaurant>}
    </div>
  );
};

export default Restaurant;
