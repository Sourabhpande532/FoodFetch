import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["banana","Potato","Carrot"],
  },
  // MODIFY SLICE State
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem:(state,action)=>{
    //H.W set it properly it remove from last Need to remove sequentionals
      state.items.pop()
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

/* 
-♎initialState Always Empty for counting What should you put into this Cart.js
-♎For that time being Puts Empty items
-♎Now we created Name:of cart Slice & & it has empty object to count you use items.lenght 
-♎For modifying this we use know as "reducers()" function As per 💹reducer.png
-♎when it is called "on distpatched of an action"
-♎Ok what can be action inside my cart "ADD Item(click)" this is the place talk about reducer 'what action will call this reducer function'
-♎reducer() is the function at end of the day  
-Here is the mapping BETWEEN Action & reducer function 
-♎"addItem" is call base on the reducer call 
-♎ So how do i modify store is this reducer takes two thing (state,action(payload)) so this is the place (talkAbout_action(payload)) where i'll get items which i'll add to my cart or store inside This "addItem"
-♎state-> it mean initialState that i decleared 
-♎action-> it is place where the data is coming in 
Now let's modify Let's suppose i've 1 item with me so how do i put this inside my State Nothing much just push it!!
-♎state.items.push(action.payload)
-♎While clicking onClick(add to cart) button which mean we send data or will send data so that data will receive like this because it dispatched and action while clicking add to cart btn that's so that info receive here below one!
-♎state.items.push(action.payload) @NOTE:here state hold current value 
Then,
Call clearCart((state)=>state.items = []) for empty the item stuff How it is !
🤔😵@REMEMBER:Never ever "Return" Any stuff O.w create mess/throwgh error Inside reducer 
This Fuction does'nt return anything it takes a state & directly modify it! 
Now Need to export this one 
-♎export default cartSlice.reducer Note:use here .reducer it'll combine all the reducers & make it one
-♎Need to export It action Also 
like export const {addItem,removeItem,clearCart} = cartSlice.reducer; 

Why We export Stuff Because cartSlice behind the since it is is Big Object it manage all the things like this is how we manage!
cartSlice = {
  actions:{
    addItem,removeItem,clearCart
  },
  reducer: reducers
}

Now,it's time to inject into our Store!

Go 🗃️store.js & import stuff

 */
