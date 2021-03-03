export const initialState = {
  products: {
    cupcakes: [
      {
        _id: '1',
        title: 'Fluffy unicorn',
        img: 'cupcake1.jpg',
        price: 30,
      },
      {
        _id: '2',
        title: 'Chocolaty delight',
        img: 'cupcake2.jpg',
        price: 25,
      },
      {
        _id: '3',
        title: 'Hot strawberry',
        img: 'cupcake3.jpg',
        price: 20,
      },
      {
        _id: '4',
        title: 'M&M\'s hedgehog',
        img: 'cupcake4.jpg',
        price: 25,
      },
      {
        _id: '5',
        title: 'Oreo dream',
        img: 'cupcake5.jpg',
        price: 30,
      },
      {
        _id: '6',
        title: 'Strawberry love',
        img: 'cupcake6.jpg',
        price: 27,
      },
    ],
    cakes: [
      {
        _id: '7',
        title: 'Fruit madness',
        img: 'cake7.jpg',
        price: 90,
      },
      {
        _id: '2',
        title: 'Explosion of colours',
        img: 'cake2.jpeg',
        price: 120,
      },
      {
        _id: '3',
        title: 'Unicorn',
        img: 'cake3.jpg',
        price: 100,
      },
      {
        _id: '4',
        title: 'Rainbow',
        img: 'cake4.jpg',
        price: 120,
      },
      {
        _id: '5',
        title: 'Red velvet',
        img: 'cake5.jpg',
        price: 80,
      },
      {
        _id: '6',
        title: 'M&M\'s barrel',
        img: 'cake6.jpg',
        price: 110,
      },
      {
        _id: '1',
        title: 'Purple cubes',
        img: 'cake1.jpeg',
        price: 140,
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: [],
  orders: [],
};
