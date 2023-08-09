import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    // here need to dispatch an action mandatory!!
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className='font-bold text-3xl'>Cart Items - {cartItems.length}</h1>
      <button
        className='bg-green-100 p-2 m-5'
        onClick={() => {
          handleClearCart();
        }}>
        Clear Cart
      </button>
      <div className='flex'>
        {cartItems.map((item) => {
          <FoodItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;

{
  /* 
   we've created cart see How do i get cartItems from store now via useSelector() hook use this one take e.g header.js 
  -🎯what it execept useSelector it expect a function e.g store it is subsicribing to store 
  -🎯Now what should I write after store = ? inside useSelector
  -🎯Take a Note It's very important ask this question in iterviews
  -🎯useSelector use for specially "Subscribe" the store because this is the place you'll tell what this COMPONENT subscribing to whom , what exact you'r COMPONENT subsicribing to!! what you'r subscribing to 

  -🎯@STARTEGIES 
   @TARGET:Want to UPDATE Specific portion of App(cart) Not whole Store because its too huge 

   -🎯if I write {store => store} It Subscribing/UPDATE whole Store 
   -🎯What if i write {store=>store.cart} it Subscribing/UPDATE the cartSlice.js 
   -🎯What if i write {store=>store.cart.items} it is Subscribing/UPDATE only small portion that array that we defined [] inside one
   
   This is where people make mistake over here what they do they generally subscribe the whole store & it's very bad thing bad Approach this is where you improve major perfonmance issue ! 
   instead this one 
   -------------------
  const store = useSelector((store) => store)
  return(
  <div className=' font-bold text-3xl'>Cart - {store.cart.item.length}</div>
  )
  --------------------
  why this is bad Approach because let's understand 
  take ref: ✅reducer.png 
  what if my cart(header one) subscribing to store what'll happend automagically everytime my store changes my cart will change & it'll re-render my COMPONENT
  -🎯if i'm subscribing to "store"(store.js) everytime my store changees & it'will re-render the COMPONENT that's it's bad Approach in large scale big applications it's ellogical 
  --🎯want to upadate Specific portion follow above methods because it upadate only item array [] not whole store 
  -🎯because of this it doesn't subscribe to random thing instead cartSlice it user.. or anyother it update Specific one
  see above code!!
  Hence proof!

  Now it's time to add Live Data inside 🗃️Cart.js which one FoodItem.js
  */
}
