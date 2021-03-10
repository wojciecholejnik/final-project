export const API_URL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:7000/api';
export const USER_URL = (process.env.NODE_ENV === 'production') ? '/user' : 'http://localhost:7000/user';
export const MAIN_URL = (process.env.NODE_ENV === 'production') ? '' : 'http://localhost:7000';

