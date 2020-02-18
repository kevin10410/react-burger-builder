const mockPosts = [
  {
    orderId: 1,
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
    customer: {
      name: 'OTree',
      address: 'address1',
      email: 'kevin10410@gmail.com',
      zipCode: '132',
      delivery: 'mail',
    },
    price: 5.80,
  },
  {
    orderId: 2,
    ingredients: {
      salad: 1,
      bacon: 2,
      cheese: 2,
      meat: 1,
    },
    customer: {
      name: 'Kevin',
      address: 'address2',
      email: 'kevin10410@gmail.com',
      zipCode: '123',
      delivery: 'express',
    },
    price: 4.00,
  },
  {
    orderId: 3,
    ingredients: {
      salad: 0,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
    customer: {
      name: 'OTree',
      address: 'address3',
      email: 'kevin10410@gmail.com',
      zipCode: '231',
      delivery: 'express',
    },
    price: 2.40,
  },
];

export default mockPosts;
