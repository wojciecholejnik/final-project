export const initialState = {
  products: {
    products: {
      cakes: [],
      cupcakes: [],
    },
    getOne: {},
    loading: {
      active: false,
      error: false,
    },
  },
  cart: [],
  orders: {
    orders: [],
    loading: {
      active: false,
      error: false,
    },
  },
  account: {
    name: 'Wojtek',
    email: 'asdasd@asda.sd',
    img: null,
  }
};

