import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CND_URL } from "../contants";

const RestrauntMenu = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&offset=47&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
      );
      const data = await response.json();
      console.log(data);
      setRestaurant(data?.data);
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  const { cards } = restaurant;

  return (
    <div>
      <h1>Restaurant Id: {id}</h1>
      {cards ? (
        <h2>{cards[0].data.data.name}</h2>
      ) : (
        <h2>No restaurant data available</h2>
      )}
    </div>
  );
};

export default RestrauntMenu;
