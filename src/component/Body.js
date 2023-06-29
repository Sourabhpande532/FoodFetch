import { useEffect, useState } from "react";
import { restrauntList } from "../contants";
import RestaurantCart from "./RestaurantCart";
import ShimmerUi from "./ShimmerUi";

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
  const [restaurants, setRestaurants] = useState([]);

  //CALL USEFFECT
  useEffect(() => {
    //call API Here once after completion of "render" UI/loads
    getRestaurants();
  }, []);

  // LIVE DATA
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards);
    
  }

  console.log("Render");
  return (restaurants.length === 0) ? <ShimmerUi/>:(
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
