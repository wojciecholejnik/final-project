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
  // account: {
  //   name: 'Wojciech',
  //   email: 'wojciecholejnik5@gmail.com"',
  //   img: 'https://lh3.googleusercontent.com/a-/AOh14GhnbqLWdIP7zhBfhJn7VMCZilNM0VUjopPkPjPW=s96-c',
  // }
  account: {
    name: null,
    email: null,
    img: null,
  }
};

