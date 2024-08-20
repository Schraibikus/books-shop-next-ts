import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Cart, CartItem } from "../types";

const initialState: Cart = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems(state, action: PayloadAction<any>) {
      state.items.push(action.payload);
      action.payload.forEach((item: CartItem) => {
        state.total += item.book.price.amount * item.qantity;
      });
    },
    addCartItem(state, action: PayloadAction<any>) {
      const LSstate = localStorage.getItem("persist:root");
      const parsedLSstate = LSstate ? JSON.parse(LSstate) : {};
      const curCart = JSON.parse(parsedLSstate.cart);
      const itemInCart = curCart.items.find(
        (item: CartItem) => item.id === action.payload.id
      );

      if (!itemInCart) {
        const item: CartItem = {
          id: action.payload.id,
          book: {
            imageUrl: action.payload.volumeInfo.imageLinks.thumbnail,
            authors: action.payload.volumeInfo.authors,
            title: action.payload.volumeInfo.title,
            averageRating: action.payload.volumeInfo.averageRating,
            ratingCount: action.payload.volumeInfo.ratingsCount,
            price: action.payload.saleInfo.listPrice
              ? action.payload.saleInfo.listPrice
              : { amount: 0, currencyCode: "" },
          },
          qantity: 1,
          delivery: "delivery",
        };
        curCart.items.push(item);
      } else {
        itemInCart.qantity++;
      }
      const newCart = JSON.stringify(curCart);
      parsedLSstate.cart = newCart;
      localStorage.setItem("persist:root", JSON.stringify(parsedLSstate));
    },
    changeQantity(state, action: PayloadAction<any>) {
      const LSstate = localStorage.getItem("persist:root");
      const parsedLSstate = LSstate ? JSON.parse(LSstate) : {};
      const curCart = JSON.parse(parsedLSstate.cart);
      const item = curCart.items.find(
        (item: CartItem) => item.id === action.payload[1]
      );
      const itemIndex = curCart.items.findIndex(
        (item: CartItem) => item.id === action.payload[1]
      );
      const stateItem = state.items.find(
        (item: CartItem) => item.id === action.payload[1]
      );
      const stateItemIndex = state.items.findIndex(
        (item: CartItem) => item.id === action.payload[1]
      );
      if (action.payload[0] === "minus") {
        stateItem && stateItem.qantity--;
        item.qantity--;
        state.total -= item.book.price.amount;
        if (item.qantity <= 0) {
          item.qantity = 0;
          stateItem && (stateItem.qantity = 0);
          curCart.items.splice(itemIndex, 1);
          state.items.splice(stateItemIndex, 1);
        }
      } else {
        stateItem && stateItem.qantity++;
        item.qantity++;
        state.total += item.book.price.amount;
      }
      const newCart = JSON.stringify(curCart);
      parsedLSstate.cart = newCart;
      localStorage.setItem("persist:root", JSON.stringify(parsedLSstate));
    },
  },
});

export default cartSlice.reducer;
