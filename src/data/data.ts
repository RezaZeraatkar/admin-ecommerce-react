export const products = [
  {
    id: 1,
    name: 'T-Shirt',
    price: '20$',
    description: 'lorem ipsum ...',
    variants: [
      {
        color: {
          id: 1,
          value: 'red',
        },
        size: {
          id: 1,
          value: 's',
        },
        sleeves: {
          id: 1,
          value: 'short',
        },
        stock: 15,
      },
      {
        color: {
          id: 2,
          value: 'green',
        },
        size: {
          id: 2,
          value: 'm',
        },
        sleeves: {
          id: 2,
          value: 'short',
        },
        stock: 10,
      },
    ],
  },
  {
    id: 2,
    name: 'Hoodie',
    price: '50$',
    description: 'lorem ipsum ...',
    variants: [
      {
        color: {
          id: 1,
          value: 'red',
        },
        size: {
          id: 3,
          value: 'l',
        },
        sleeves: {
          id: 1,
          value: 'long',
        },
        stock: 20,
      },
      {
        color: {
          id: 2,
          value: 'green',
        },
        size: {
          id: 4,
          value: 'xl',
        },
        sleeves: {
          id: 1,
          value: 'long',
        },
        stock: 5,
      },
    ],
  },
];

export const attributes = {
  size: [
    {
      id: 1,
      value: 's',
    },
    {
      id: 2,
      value: 'm',
    },
    {
      id: 3,
      value: 'l',
    },
    {
      id: 4,
      value: 'xl',
    },
  ],
  colors: [
    {
      id: 1,
      value: 'red',
    },
    {
      id: 2,
      value: 'green',
    },
  ],
  sleeves: [
    {
      id: 1,
      value: 'long',
    },
    {
      id: 2,
      value: 'short',
    },
  ],
  models: ['size', 'colors', 'sleeves'],
};
