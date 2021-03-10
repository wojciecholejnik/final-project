import axios from 'axios';
import { API_URL} from '../config';

/* selectors */
export const getProductStats = ({products}) => products.loading;
export const getCakes = ({products}) => products.products.cakes;
export const getCupcakes = ({products}) => products.products.cupcakes;
export const getOne = ({products}) => products.product;

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const LOAD_ONE = createActionName('LOAD_ONE');


/* action creators */
export const fetchStarted = () => ({ type: FETCH_START });
export const fetchSuccess = () => ({ type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadOne = payload => ({ payload, type: LOAD_ONE });

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

export const getOneRequest = (id, type) => {
  return async dispatch => {
    dispatch(fetchStarted());
    if(type === 'cake'){
          try {
            let product = await axios.get(`${API_URL}/cakes/${id}`);
            await dispatch(loadOne(product.data));
            await dispatch(fetchSuccess());
          } catch(e) {
            dispatch(fetchError(e.message));
          }
    } else if(type === 'cupcake'){
        try {
          let product = await axios.get(`${API_URL}/cupcakes/${id}`);
          await dispatch(loadOne(product.data));
          await dispatch(fetchSuccess());
        } catch(e) {
          dispatch(fetchError(e.message));
        }
    }
  }
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
    case LOAD_ONE: {
      return {
        ...statePart,
        product: action.payload,
      }
    }
    default:
      return statePart;
  }
};
