/*@ABOUT: 
 -@ALL ABOUT TRANSFORM CODE PROPS TO RENDER CONFIG DRIVEN UI
 -@HOW WE CAN PASS PROPS TAKE ADVANTAGE OF SPREAD OPERATOR & ALL     STUFF.
 -@PROPS DRILING
*/

// 🔺transformation_1

// const Body = () => {
//   return (
//     <div className='restaurant-list'>
//    🔴    <RestrauntCart restaurant={restrauntList[0]}/>
//    🔴   <RestrauntCart restaurant={restrauntList[1]}/>
// }

// const RestrauntCart = (props) => {
//   // console.log(props)
//   return (
//     <div className='card'>
//       <img alt='logo' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024,h_800,c_fill/" + props.restaurant.data.data?.cloudinaryImageId} />
//       <h2>{props.restaurant.data.data?.name}</h2>
//       <h3>{props.restaurant.data.data?.cuisines.join(",")}</h3>
//       <h5>{props.restaurant.data.data?.avgRating} Rating</h5>
//     </div>
//   );
// };

// 🔺transformation_2

// const Body = () => {
//   return (
//     <div className='restaurant-list'>
//    🔴   <RestrauntCart restaurant={restrauntList[0]}/>
// }

// const RestrauntCart = ({restaurant}) => {
//   // console.log(props)
//   const {cloudinaryImageId,name,cuisines,avgRating} = restaurant.data.data;
//   return (
//     <div className='card'>
//       <img alt='logo' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024,h_800,c_fill/" + cloudinaryImageId} />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(",")}</h3>
//       <h5>{avgRating} Rating</h5>
//     </div>
//   );
// };

// 🔺transformation_3
// PROPS -> pass props here(PROPERTY)
// const Body = () => {
//   return (
//     <div className='restaurant-list'>
//       <RestrauntCart
//         cloudinaryImageId={restrauntList[0].data.data.cloudinaryImageId}
//         name={restrauntList[0].data.data.name}
//         cuisines={restrauntList[0].data.data.cuisines}
//         avgRating={restrauntList[0].data.data.avgRating}
//       />
//       <RestrauntCart
//         cloudinaryImageId={restrauntList[1].data.data.cloudinaryImageId}
//         name={restrauntList[1].data.data.name}
//         cuisines={restrauntList[1].data.data.cuisines}
//         avgRating={restrauntList[1].data.data.avgRating}
//       />
//       <RestrauntCart
//         cloudinaryImageId={restrauntList[2].data.data.cloudinaryImageId}
//         name={restrauntList[2].data.data.name}
//         cuisines={restrauntList[2].data.data.cuisines}
//         avgRating={restrauntList[2].data.data.avgRating}
//       />
//       <RestrauntCart
//         cloudinaryImageId={restrauntList[3].data.data.cloudinaryImageId}
//         name={restrauntList[3].data.data.name}
//         cuisines={restrauntList[3].data.data.cuisines}
//         avgRating={restrauntList[3].data.data.avgRating}
//       />
//     </div>
//   );
// };

// const RestrauntCart = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
//   return (
//     <div className='card'>
//       <img
//         alt='logo'
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024,h_800,c_fill/" +
//           cloudinaryImageId
//         }
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines}</h3>
//       <h4>{avgRating} Rating</h4>
//     </div>
//   );
// };

// 🔺transformation_4
// I know write now my restrauntList[x].data.data has the all the props like name,cuisines,cloudinaryImageId,avgRating & i want to pass this all this props so what i did instead of writing each props individually why not we take advantage of spread operator why not we spread it to get rid of complex part also. Remember one thing you can write any peace of JS code inside this {} ⬅️ inside this curly brases in react term is know as JSX code

// pass props as an argument
// const Body = () => {
//   return (
//     <div className='restaurant-list'>
//       <RestrauntCart
//         {...restrauntList[0].data.data}
//       />
//       <RestrauntCart
//         {...restrauntList[1].data.data}
//       />
//       <RestrauntCart
//         {...restrauntList[2].data.data}
//       />
//       <RestrauntCart
//         {...restrauntList[3].data.data}
//       />
//       <RestrauntCart
//         {...restrauntList[4].data.data}
//       />
//     </div>
//   );
// };

// Receive as an parameter
// const RestrauntCart = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
//   return (
//     <div className='card'>
//       <img
//         alt='logo'
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024,h_800,c_fill/" +
//           cloudinaryImageId
//         }
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines}</h3>
//       <h4>{avgRating} Rating</h4>
//     </div>
//   );
// };

// 🔺transformation_5
// Need to loop on array how many times you write it down manually it does not make sence here & One more thing in industroy we not use for like loop we always go with this 3 [map,filter,reduce] mostly use of of map
// In functional programing Map is the best way to do functional programing or either filter or reduce for looping. optionally you can use forEach as well instead map but optionally not for everytime.

// const Body = () => {
//   return (
//      🔴 <div className='restaurant-list'>
//      <RestrauntCart {...restrauntList[0].data.data} />
//       <RestrauntCart {...restrauntList[1].data.data} />
//       <RestrauntCart {...restrauntList[2].data.data} />
//       <RestrauntCart {...restrauntList[3].data.data} />
//       <RestrauntCart {...restrauntList[4].data.data} />
//     </div>
//   );
// };

// const RestrauntCart = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
//   return (
//     <div className='card'>
//       <img
//         alt='logo'
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024,h_800,c_fill/" +
//           cloudinaryImageId
//         }
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines}</h3>
//       <h4>{avgRating} Rating</h4>
//     </div>
//   );
// };

// 🔺transformation_5 finally it Done 😓😓

// this will give you sequence of each object for each object i want to render my card individually as a result Map came into picture.
// restaurant has access of all object base on condition it'll render card
// base on this object i want some JSX need to return anyhow what is JSX my RestrauntCart & what i will spread my restaurant object

// const Body = () => {
//   return (
//     <div className='restaurant-list'>
//       {restrauntList.map((restaurant) => {
//     🔴     return <RestrauntCart {...restaurant.data.data} />;
//       })}
//     </div>
//   );
// };

// const RestrauntCart = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
//   return (
//     <div className='card'>
//       <img
//         alt='logo'
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024,h_800,c_fill/" +
//           cloudinaryImageId
//         }
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines}</h3>
//       <h4>{avgRating} Rating</h4>
//     </div>
//   );
// };



//🔴🔴 -------------------------NEW----------------------------🔴🔴//

// BEST E>G OF PROP DRILING and ACCORDIAN

/* import React, { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className=' border border-black p-2 m-2'>
      <h3 className='font-bold'>{title}</h3>
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
          className='cursor-pointer'>
          ➖
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
          className='cursor-pointer'>
          ➕
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <div>
      <h1 className='text-3xl p-2 m-2 font-bold text-color-50'>Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
      />
      <Section
        title={"Career"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
      />
    </div>
  );
};

export default Instamart; */

