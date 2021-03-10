import axios from 'axios';
import { USER_URL } from '../config';

/* selectors */
export const getAccount = ({account}) => account;

/* action name creator */
const reducerName = 'account';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_ACCOUNT = createActionName('CHANGE_ACCOUNT');

/* action creators */
export const changeAccount = payload => ({ payload, type: CHANGE_ACCOUNT});

/* thunk creators */

export const loadAccountRequest = () => {
  return async () => {
    try {
      let account = await axios.get(`${USER_URL}`);
      changeAccount(account.data);
    } catch(e) {
      console.log(e);
    }
  };
};


export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
     case CHANGE_ACCOUNT: {
        return {
          name: action.payload.name,
          email: action.payload.email,
          img: action.payload.avatar,
      };
    }
    default:
      return statePart;
  }
};


