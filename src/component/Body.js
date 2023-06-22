import { useState } from "react";
import { restrauntList } from "../contants";
import RestaurantCart from "./RestaurantCart";

const Body = () => {
  const searchTxt = "KFC"
  const [searchText] = useState("KFC");
  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='search'
          value={searchTxt}
          // onChange={()=>onChangeInput}
          // onChange={(e)=>console.log("dsdf")}
          onChange={(e)=>console.log(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className='restaurant-list'>
        {restrauntList.map((restaurant) => {
          return (
            <RestaurantCart
              {...restaurant.data.data}
              key={restaurant.data.data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
