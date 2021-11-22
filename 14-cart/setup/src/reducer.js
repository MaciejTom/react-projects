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
    case "TOGGLE_AMOUNT":
      const tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id == action.payload.id) {
            return {
              ...cartItem,
              amount:
                action.payload.type == "increase"
                  ? cartItem.amount + 1
                  : cartItem.amount - 1,
            };
          }
          return cartItem;
        })
        .filter((el) => el.amount > 0);
      return { ...state, cart: tempCart };

    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.amount += amount;
          cartTotal.total += amount * price;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = total.toFixed(2);

      return { ...state, amount, total };

    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEM":
      return { ...state, cart: action.payload, loading: false };

    default:
      new Error("REDUCER: ŻADNA Z PODANYCH AKCJI");
  }
};

export default reducer;
