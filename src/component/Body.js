import { useContext, useEffect, useState } from "react";
import { restrauntList } from "../contants";
import RestaurantCart from "./RestaurantCart";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  // COPY OF ALL RESTURANT
  const [allRestaurants, setAllRestaurants] = useState([]);

  //FILTERED LIST
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  /* 
  -SEARCH FUNCTIONALITY
  -IN JS - CONST SEARCHTEXT = "KFC"
  -IN REACT:SEARCHTEXT IS LOCAL STATE VARIABLE */
  const [searchText, setSearchText] = useState("");

  // USE CONTAX
  const { user, setUser } = useContext(UserContext);

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

  // Check if data is available before setting states
  if (json?.data?.cards) {
    setAllRestaurants(json.data.cards);
    setFilteredRestaurants(json.data.cards);
  }
}

  console.log("RENDERING FOR DEMO ENSURE IT FIRST THEN CALL USE-EFFECT");

  // IN CASE, OFFLINE
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴🔴 Seems Like internet OFF, Please Check</h1>;
  }

  // AVOID(Early render)!RENDER COMPONENT
  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length === 0) return <h1>No Restaurant Match Your Filter</h1>

  // INLINE CSS
  const searchBtnCss = {
    backgroundColor: "pink",
  };

  return allRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className='search-container p-5 my-4 bg-pink-100 shadow-lg gap-3 flex'>
        <input
          type='text'
          placeholder='Search'
          className='h-10 rounded mt-2 focus:bg-green-50'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className='p-2 m-2 bg-sky-500 hover:bg-sky-700 rounded-lg'
          style={searchBtnCss}
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            //UPDATE THE STATE - RESTURANT
            setFilteredRestaurants(data);
          }}>
          Search
        </button>

        {/* Use Context Here.. */}
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }></input>

        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }></input>
      </div>
      <div className='flex flex-wrap bg-pink-100'>
      {/*{filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.data.data.id} key={restaurant.data.data.id}>
            <RestaurantCart {...restaurant.data.data} />
          </Link>
        ))
      ) : (
        <h1>No Restaurant Match Your Filter</h1>
      )
    }*/}
    </div>
    
    </>
  );
};

export default Body;

/**
//  We'r map the stuff the key should be in Link component & this is dynamic Routing;

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
