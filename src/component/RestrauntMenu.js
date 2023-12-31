import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL, IMG_URL } from "../contants"; // Make sure it's "constants," not "contants"
import ShimmerUi from "./ShimmerUi";


const RestaurantMenu = () => {
  const { id } = useParams(); // Use destructuring to directly get 'id'
  const [resId, setResId] = useState(null);

  useEffect(() => {
    getResIdInfo();
  }, [id]); // Include 'id' as a dependency in useEffect

  async function getResIdInfo() {
    try {
      const response = await fetch(`${FETCH_MENU_URL}/${id}`); // Concatenate 'id' properly
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log(json);

      const resData = checkJson(json);
      setResId(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function checkJson(data) {
    const result = [];
    if (data?.data?.cards) {
      for (let i = 0; i < data.data.cards.length; i++) {
        let xyz = data.data.cards[i]?.card?.card?.info;
        console.log(xyz);
        if (xyz !== undefined) {
          result.push(xyz);
        }
      }
    }
    return result;
  }

  return !resId ? <ShimmerUi/> : (
    <div>
      <h1>URL ID: {id}</h1>
      {resId &&
        resId.map((y) => (
          <div key={y.id}>
            <img width={"129px"} src={IMG_URL + y.cloudinaryImageId}/>
            <h1>{y?.name}</h1>
            <h1>{y.city}</h1>
            <p>{y.areaName}</p>
            <span>{y.cuisines.join(",")}</span>

          </div>
        ))}
    </div>
  );
};

export default RestaurantMenu;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { IMG_CND_URL } from "../contants";
// import Shimmer from "../component/ShimmerUi";
// import useRestrauntMenuHook from "../utils/useRestrauntMenuHook";
// import { addItem } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";

// const RestrauntMenu = () => {
//   // COME FROM URL-(ID)
//   const { id } = useParams();

//   const dispatch = useDispatch()

//   // const handleCallItem = () => {
//   //   dispatch(addItem("Grapes"));
//   // };
//   /* dispatch an action & pass the payload "Grapes" Remember cartSlice.js while calling reduceres we pass 2 Parameters "state"&"action" so the "Grapes" is an action behind since it work like that {payload: "Grapes"} */

//   const addFoodItem = (item)=>{
//   dispatch(addItem(item))
//   }

//   // OWN HOOK
//   const restaurant = useRestrauntMenuHook(id);

//   // EARLY RETURN
//   if (!restaurant) {
//     return (
//       <div>
//         <Shimmer />
//       </div>
//     );
//   }
//   const { cards } = restaurant;

//   return (
//     <div className=''>
//       <h1>Restaurant Id: {id}</h1>
//       {cards ? (
//         <>
//           <h2>{cards[0]?.data?.data?.name}</h2>
//           <img
//             width='400px'
//             src={IMG_CND_URL + cards[0]?.data?.cloudinaryImageId}
//           />
//           <h3>{cards[0]?.data?.data?.area}</h3>
//           <h3>{cards[0]?.data?.data?.city}</h3>
//           <h3>{cards[0]?.data?.data?.totalRatingsString}</h3>
//           <h3>{cards[0]?.data?.data?.avgRating} Rating</h3>
//           <h3>Address : {cards[0]?.data?.data?.address}</h3>
//           <h3>DeliveryTime : {cards[0]?.data?.data?.deliveryTime} min</h3>
//         </>
//       ) : (
//         <h2>No restaurant data available</h2>
//       )}

//       <div>
//         <button
//           className='p-2 m-2 bg-green-600'
//           onClick={() => handleCallItem()}>
//           Add Item Cart
//         </button>
//       </div>

//       {/* Optionally perform*/}

//     </div>

//   );
// };

// export default RestrauntMenu;

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
