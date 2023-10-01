import React from "react";

const RestaurantCart = ({ cardInfo }) => {
  console.log(cardInfo);
  // Access the nested array and map through it
  const restaurants = cardInfo?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant?.info.id}>{restaurant?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantCart;


// const RestaurantCart = ({
//   cloudinaryImageId,
//   name,
//   cuisines,
//   avgRating,
// }) => {
//   const { user } = useContext(UserContext);
//   return (
//     <div className='w-56 p-4 m-2 shadow-lg bg-pink-50'>
//       <img alt='logo' src={IMG_CND_URL + cloudinaryImageId} />
//       <h2 className='font-bold text-xl'>{name}</h2>
//       <h3>{cuisines}</h3>
//       <h4>{avgRating} Rating</h4>
//       {/* <h4>{user.name}</h4> */}
//       <h4 className=" text-red-600 font-bold">{user.name}-{user.email}</h4>
//     </div>
//   );
// };
