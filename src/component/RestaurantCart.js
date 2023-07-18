import { IMG_CND_URL } from "../contants";

const RestaurantCart = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className='w-56 p-4 m-2 shadow-lg bg-pink-50'>
      <img
        alt='logo'
        src={IMG_CND_URL +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{avgRating} Rating</h4>
    </div>
  );
};

export default RestaurantCart