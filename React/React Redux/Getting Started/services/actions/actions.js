import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data, // conventionally use 'payload' for action data
  };
};

export const removeToCart = () => {
  return {
    type: REMOVE_TO_CART
  };
};

// Correct default export
export default { addToCart, removeToCart };
