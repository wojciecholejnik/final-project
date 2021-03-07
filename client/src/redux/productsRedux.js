import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getProductStats = ({products}) => products.loading;
export const getCakes = ({products}) => products.products.cakes;
export const getCupcakes = ({products}) => products.products.cupcakes;
export const getOne = ({products, id, type}) => {
  if(type === 'cake'){
    return products.cakes.find(product => product._id === id);
  } else {
    return products.cupcakes.find(product => product._id === id);
  }
};

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');


/* action creators */
export const fetchStarted = () => ({ type: FETCH_START });
export const fetchSuccess = () => ({ type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* thunk creators */
export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      let cakes = await axios.get(`${API_URL}/cakes`);
      let cupcakes = await axios.get(`${API_URL}/cupcakes`);
      const products = {
        cakes: cakes.data,
        cupcakes: cupcakes.data,
      };
      await dispatch(loadProducts(products));
      await dispatch(fetchSuccess());
    } catch(e) {
      dispatch(fetchError(e.message));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case LOAD_PRODUCTS: {
      return {
        ...statePart,
        products: action.payload,
      };
    }
    default:
      return statePart;
  }
};
