import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducer: {
    addItem: () => {
      //
    },
  },
});

/* 
-♎initialState Always Empty What should you put into this Cart.js
-♎For that time being Puts Empty items
-♎Now we created Name:of cart Slice & & it has empty object to count you use items.lenght 
-♎For modifying this we use know as "reducer()" function As per 💹reducer.png
-♎when it is called "on distpatched of an action"  
 */
