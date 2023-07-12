import React, { useEffect, useState } from 'react'
import { FETCH_RESTRA_MENU_URL } from '../contants';

const useRestrauntMenuHook = (id) => {
const [restaurant, setRestaurant] = useState(null);
// get data from Api 
useEffect(()=>{
getRestaurantInfo();
},[])

// return restaurant Data 
async function getRestaurantInfo() {
    try {
      const response = await fetch(
        FETCH_RESTRA_MENU_URL + id
      );
      const data = await response.json();
      console.log(data);
      setRestaurant(data?.data);
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }
return restaurant;
}

export default useRestrauntMenuHook
