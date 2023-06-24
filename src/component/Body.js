import { useState } from "react";
import { restrauntList } from "../contants";
import RestaurantCart from "./RestaurantCart";

// SEARCH FUNCTIONALITY with filtering process
function filterData(searchText, restaurant) {
  const filterDatas = restaurant.filter(
    (restaurant) => restaurant.data.data.name.includes(searchText)
    // IF INSIDE ARRAY IT INCLUDES SEARCHTEXT JUST FILTEROUT
  );
  return filterDatas;
}

const Body = () => {
  //IN JS - CONST SEARCHTEXT = "KFC"
  //IN REACT:SEARCHTEXT IS LOCAL STATE VARIABLE
  const [searchText, setSearchText] = useState("");

  // SEARCH FUNCTIONALITY
  const [restaurants, setRestaurants] = useState(restrauntList);
  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search'
          className='search-input'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className='search-btn'
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}>
          Search
        </button>
        {/*<h1>{searchClicked}</h1>
           <h1>{searchText}</h1> */}
      </div>
      <div className='restaurant-list'>
        {restaurants.map((restaurant) => {
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

/**
// const searchTxt = "KFC"

// searchText is local state varaible 
// const [searchText,setSearchText] = useState("KFC");

//  <input
//  type='text'
//  className='search-input'
//  placeholder='search'
//  value={searchText}
//  // onChange={()=>onChangeInput}
//  // onChange={(e)=>console.log("dsdf")}
//  // onChange={(e)=>console.log(e.target.value)}
//  onChange={(e)=>{
//    setSearchText(e.target.value)
//  }}
// />
 */
