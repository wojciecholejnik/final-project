import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getOrders = ({orders}) => orders;

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const LOAD_ORDERS = createActionName('LOAD_ORDERS');

/* action creators */
export const fetchStarted = () => ({ type: FETCH_START });
export const fetchSuccess = () => ({ type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const loadOrders = payload => ({ payload, type: LOAD_ORDERS });

/* thunk creators */
export const loadOrdersRequest = () => {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      let orders = await axios.get(`${API_URL}/orders`);
      await dispatch(loadOrders(orders.data));
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
    case LOAD_ORDERS: {
      return {
        ...statePart,
        orders: action.payload,
      };
    }
    default:
      return statePart;
  }
};
