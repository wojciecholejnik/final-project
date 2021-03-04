// import axios from 'axios';

/* selectors */
export const getCart = ({cart}) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_ONE = createActionName('REMOVE_ONE');
const REMOVE_CART = createActionName('REMOVE_CART');
const GET_CART_LOC_STOR = createActionName('GET_CART_LOC_STOR');

/* action creators */
export const addToCart = payload => ({payload, type: ADD_TO_CART});
export const removeOneFromCart = payload => ({payload, type: REMOVE_ONE});
export const removeCart = () => ({type: REMOVE_CART});
export const getCartLocStor =  payload => ({payload, type: GET_CART_LOC_STOR});

/* thunk creators */

export const loadCartRequest = () => {
  return async dispatch => {

    try {
      let cart = await JSON.parse(localStorage.getItem('cart'));
      dispatch(getCartLocStor(cart));
    } catch(e) {
      console.log(e);
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {

  switch (action.type) {
    case ADD_TO_CART: {
      const cart = [...statePart];
      cart.push(action.payload);
      return cart;
    } case REMOVE_ONE: {
      const product = statePart.find(product => product.id === action.payload);
      const index = statePart.indexOf(product);
      statePart.splice(index, 1);
      return statePart.length === 0 ? [] : [...statePart];
    } case REMOVE_CART: {
      const cart = [];
      return cart;
    } case GET_CART_LOC_STOR: {
      return action.payload;
    }
    default:
      return statePart;
  }
};
