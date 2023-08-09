import { IMG_CND_URL } from "../contants";

const FoodItem = ({ cloudinaryImageId, name, description, price }) => {
  return (
    <div className='w-56 p-4 m-2 shadow-lg bg-pink-50'>
      <img alt='logo' src={IMG_CND_URL + cloudinaryImageId} />
      <h2 className='font-bold text-xl'>{name}</h2>
      <h3>{description}</h3>
      <h4>{price / 100} Rating</h4>
    </div>
  );
};

export default FoodItem;
