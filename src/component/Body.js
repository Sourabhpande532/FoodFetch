import { restrauntList } from "../contants";
import RestaurantCart from "./RestaurantCart";
const Body = () => {
    return (
      <div className='restaurant-list'>
        {restrauntList.map((restaurant) => {
          return <RestaurantCart {...restaurant.data.data} key={restaurant.data.data.id}/>;
        })}
      </div>
    );
  };

  export default Body;