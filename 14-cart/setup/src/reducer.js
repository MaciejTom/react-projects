import CartItem from "./CartItem";

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_BASKET":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((el) => {
          return el.id !== action.payload;
        }),
      };
      case "INCREASE":
        const tempCart = state.cart.map(cartItem => {
          if (cartItem.id == action.payload) {
            return {...cartItem , amount: cartItem.amount + 1}
          }
          return cartItem
        })
        return {...state, cart: tempCart}
      case "DECREASE":
        const tempCart2 = state.cart.map(cartItem => {
          if (cartItem.id == action.payload) {
            if (cartItem == 0) {

            }
            return {...cartItem , amount: cartItem.amount - 1}
          }
          return cartItem
        }).filter(el => el.amount > 0)
        return {...state, cart: tempCart2}
    default:
      new Error("REDUCER: ŻADNA Z PODANYCH AKCJI");
  }
};

export default reducer;
