import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAccount = ({account}) => account;

/* action name creator */
const reducerName = 'account';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_ACCOUNT = createActionName('CHANGE_ACCOUNT');

/* action creators */
export const changeAccount = payload => ({payload, type: CHANGE_ACCOUNT});

/* thunk creators */

export const loadAccountRquest = () => {
  return async () => {
    try {
      let account = await axios.get(`${API_URL}/cakes`);
      changeAccount(account)
    } catch(e) {
      console.log(e);
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {

  switch (action.type) {
    case CHANGE_ACCOUNT: {
      return {
        name: action.payload.name,
        email: action.payload.email,
        img: createActionName.payload.img,
      }
    }
    default:
      return statePart;
  }
};
