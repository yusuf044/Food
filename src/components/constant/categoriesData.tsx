export const categoriesData = [
  {
    id: 1,
    image: require('../../assets/image/pizzaFull.jpg'),
    name: 'Burger',
  },
  {
    id: 2,
    image: require('../../assets/image/pizzaFull.jpg'),
    name: 'Pizza',
  },
  {
    id: 3,
    image: require('../../assets/image/pizzaFull.jpg'),
    name: 'Hot Dog',
  },
  {
    id: 4,
    image: require('../../assets/image/pizzaFull.jpg'),
    name: 'French Fries',
  },
  {
    id: 5,
    image: require('../../assets/image/pizzaFull.jpg'),
    name: 'Cupcake',
  },
];
export const FeaturedData = [
  {
    id: 1,
    image: require('../../assets/image/bugerBanner.jpg'),
    name: 'Burger',
  },
  {
    id: 2,
    image: require('../../assets/image/bugerBanner.jpg'),
    name: 'Pizza',
  },
  {
    id: 3,
    image: require('../../assets/image/bugerBanner.jpg'),
    name: 'Hot Dog',
  },
  {
    id: 4,
    image: require('../../assets/image/bugerBanner.jpg'),
    name: 'French Fries',
  },
  {
    id: 5,
    image: require('../../assets/image/bugerBanner.jpg'),
    name: 'Cupcake',
  },
];
// export const featured = [
//   {
//     restaurant: {
//       name: 'Tasty Bites',
//       address: '456 Oak Avenue',
//       category: 'Casual Dining',
//     },

//     dishes: [
//       {
//         id: 1,
//         dish_name: 'Margherita Pizza',
//         price: 10.99,
//         description:
//           'Traditional pizza with tomato sauce, mozzarella cheese, and fresh basil.',
//         image_url: 'https://example.com/images/margherita_pizza.jpg',
//         reviews: [
//           {
//             username: 'pizzalover89',
//             rating: 5,
//             comment:
//               'Simple and delicious! Perfect crust and fresh ingredients.',
//           },

//           {
//             username: 'foodcritic2023',
//             rating: 4,
//             comment: 'Authentic taste, could use a bit more basil.',
//           },
//         ],
//       },

//       {
//         id: 2,

//         dish_name: 'BBQ Bacon Burger',

//         price: 13.5,

//         description:
//           'Juicy beef patty topped with BBQ sauce, crispy bacon, and cheddar cheese.',

//         image_url: 'https://example.com/images/bbq_bacon_burger.jpg',

//         reviews: [
//           {
//             username: 'burgerfanatic22',

//             rating: 5,

//             comment:
//               'Absolutely mouthwatering! The BBQ sauce adds a perfect tang.',
//           },

//           {
//             username: 'meatlover2022',

//             rating: 4,

//             comment: 'Great burger, but bacon could be crispier.',
//           },
//         ],
//       },

//       {
//         id: 3,

//         dish_name: 'Vegetarian Pizza',

//         price: 11.99,

//         description:
//           'Pizza loaded with fresh vegetables including bell peppers, onions, and olives.',

//         image_url: 'https://example.com/images/vegetarian_pizza.jpg',

//         reviews: [
//           {
//             username: 'veggieeater',

//             rating: 4,

//             comment: 'Fantastic veggie pizza! Fresh and flavorful.',
//           },

//           {
//             username: 'healthyliving101',

//             rating: 5,

//             comment: 'Delicious and satisfying. Perfect for vegetarians!',
//           },
//         ],
//       },

//       {
//         id: 4,

//         dish_name: 'Classic Cheeseburger',

//         price: 11.0,

//         description:
//           'All-beef patty with melted American cheese, lettuce, tomato, and pickles.',

//         image_url: 'https://example.com/images/classic_cheeseburger.jpg',

//         reviews: [
//           {
//             username: 'cheeseburgerlover',

//             rating: 4,

//             comment: 'Solid cheeseburger, classic flavors.',
//           },

//           {
//             username: 'burgerconnoisseur',

//             rating: 3,

//             comment: 'Decent, but could use more seasoning on the patty.',
//           },
//         ],
//       },
//     ],
//   },
// ];
export const featured = {
  id: 1,
  title: 'Hot and Spicy',
  description: 'soft and tender fried chicken',
  restaurants: [
    {
      id: 1,
      name: 'Papa Johns',
      image: require('../../assets/image/pizzaFull.jpg'),
      description: 'Hot and spicy pizzas',
      lng: 38.2145602,
      lat: -85.5324269,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../../assets/image/bugerBanner.jpg'),
        },
      ],
    },
  ],
};
