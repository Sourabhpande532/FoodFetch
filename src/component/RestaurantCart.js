import { IMG_CND_URL } from "../contants";

const RestaurantCart = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className='card'>
      <img
        alt='logo'
        src={IMG_CND_URL +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{avgRating} Rating</h4>
    </div>
  );
};

export default RestaurantCart