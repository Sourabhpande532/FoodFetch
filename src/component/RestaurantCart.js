import React from "react";
import { IMG_URL } from "../contants";


const RestaurantCart = ({cardInfo}) => {
  const {cloudinaryImageId,name,avgRating,cuisines} = cardInfo;
  return (
    <div className='w-56 p-4 m-2 shadow-lg bg-pink-50'>
      <img className="w-[300px] h-[210px]" src={IMG_URL + cloudinaryImageId}></img>
      <div className='rest-name'>{name}</div>
      <div className='card-bottom'>
        {/* <span>{costForTwo}</span> */}
        <span className='orange'>Rating {avgRating}</span>
        {/* <h5>{user.name}- {user.email}</h5> */}
      </div>
      <div className=' text-[16px]'>{cuisines.join(",")}</div>
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
