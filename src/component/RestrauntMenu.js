import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CND_URL } from "../contants";
import Shimmer from "../component/ShimmerUi";
import useRestrauntMenuHook from "../utils/useRestrauntMenuHook";

const RestrauntMenu = () => {
  // COME FROM URL-(ID)
  const { id } = useParams();
  
  // OWN HOOK
  const restaurant = useRestrauntMenuHook(id);

  // EARLY RETURN
  if (!restaurant) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }
  const { cards } = restaurant;

  return (
    <div className=''>
      <h1>Restaurant Id: {id}</h1>
      {cards ? (
        <>
          <h2>{cards[0]?.data?.data?.name}</h2>
          <img
            width='400px'
            src={IMG_CND_URL + cards[0]?.data?.cloudinaryImageId}
          />
          <h3>{cards[0]?.data?.data?.area}</h3>
          <h3>{cards[0]?.data?.data?.city}</h3>
          <h3>{cards[0]?.data?.data?.totalRatingsString}</h3>
          <h3>{cards[0]?.data?.data?.avgRating} Rating</h3>
          <h3>Address : {cards[0]?.data?.data?.address}</h3>
          <h3>DeliveryTime : {cards[0]?.data?.data?.deliveryTime} min</h3>
        </>
      ) : (
        <h2>No restaurant data available</h2>
      )}
    </div>
  );
};

export default RestrauntMenu;

/* 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CND_URL } from "../contants";
import Shimmer from "../component/ShimmerUi"

const RestrauntMenu = () => {
  const { id } = useParams();
  console.log(id);

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&offset=47&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING" + id
      );
      const data = await response.json();
      console.log(data);
      setRestaurant(data?.data);
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }

  // EARLY RETURN 
  if (!restaurant) {
    return <div><Shimmer/></div>;
  }

  const { cards } = restaurant;

  return (
    <div className="">
      <h1>Restaurant Id: {id}</h1>
      {cards ? (
        <>
          <h2>{cards[0]?.data?.data?.name}</h2>
          <img
            width='400px'
            src={IMG_CND_URL + cards[0]?.data?.cloudinaryImageId}
          />
          <h3>{cards[0]?.data?.data?.area}</h3>
          <h3>{cards[0]?.data?.data?.city}</h3>
          <h3>{cards[0]?.data?.data?.totalRatingsString}</h3>
          <h3>{cards[0]?.data?.data?.avgRating} Rating</h3>
          <h3>Address : {cards[0]?.data?.data?.address}</h3>
          <h3>DeliveryTime : {cards[0]?.data?.data?.deliveryTime} min</h3>
        </>
      ) : (
        <h2>No restaurant data available</h2>
      )}
    </div>
  );
};

export default RestrauntMenu;




*/
