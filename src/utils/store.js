import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;

/**
 * @REVISE CONCEPT 
 * Create Store
 * API -configureStore() - RTK
 * Provide my store to app
 *   -<Provider store={store} - import from react-redux
 *
 * create Slice
 *   Api - RTK - createSlice({
 *   name:"",
 *   initialState: reducers:{
 *   addItem:(state,action)
 * }})
 *
 * export default cartSlice.reducer
 * export const = {addItem,removeItem} = cartSlice.actions
 *
 * Put that Slice into store(store.js)
 *
 * - {
 * reducer:{
 * cart: cartSlice,
 * user: userSlice,
 * }
 *   }
 * REMEMBER Each slice export it's his reducers in this care cartSlice.js is personal reducers,userSlice his personal ... So all this come inside this here called it as 'reducer' object see above code
 * Name of Object is "reducer"
 * 
 * Now Finnaly Let's Subscrip the store By using "SELECTOR" for add item to cart 
 * 
 * GO To 🗃️component/Header.js 
 */
