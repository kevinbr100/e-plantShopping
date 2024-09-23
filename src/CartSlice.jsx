import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
   // totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
        state.totalQuantity += 1;
    },
    removeItem: (state, action) => {
      const itemToDelete = state.items.find(item => item.name === action.payload.name);
      if (itemToDelete) {
    //    console.log("item to delete "+itemToDelete.name);

        state.totalQuantity -= itemToDelete.quantity;
        state.items = state.items.filter(item => item.name !== action.payload.name);
      }
      
    },
    // Increment the quantity of an item in the cart
    incrementItem: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    // Decrement the quantity of an item in the cart, remove if quantity reaches 0
    decrementItem: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter(item => item.name !== action.payload.name);
        }
      }
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem } = CartSlice.actions;

export default CartSlice.reducer;