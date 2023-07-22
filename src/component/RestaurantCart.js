import { useContext } from "react";
import { IMG_CND_URL } from "../contants";
import UserContext from "../utils/UserContext";

const RestaurantCart = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className='w-56 p-4 m-2 shadow-lg bg-pink-50'>
      <img alt='logo' src={IMG_CND_URL + cloudinaryImageId} />
      <h2 className='font-bold text-xl'>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{avgRating} Rating</h4>
      {/* <h4>{user.name}</h4> */}
      <h4 className=" text-red-600 font-bold">{user.name}-{user.email}</h4>
    </div>
  );
};

export default RestaurantCart;
