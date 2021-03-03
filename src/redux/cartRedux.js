/* selectors */
export const getCart = ({cart}) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_ONE = createActionName('REMOVE_ONE');
const REMOVE_CART = createActionName('REMOVE_CART');

/* action creators */
export const addToCart = payload => ({payload, type: ADD_TO_CART});
export const removeOneFromCart = payload => ({payload, type: REMOVE_ONE});
export const removeCart = () => ({type: REMOVE_CART});

/* thunk creators */

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
    }
    default:
      return statePart;
  }
};
