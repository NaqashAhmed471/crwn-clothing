import { createSelector } from "reselect";

const selectCart = (state) => state.cartReducer;

export const selectCartItems = createSelector(
  [selectCart],
  (cartReducer) => cartReducer.cartItems
);

export const selectCardHidden = createSelector(
  [selectCart],
  (cartReducer) => cartReducer.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
