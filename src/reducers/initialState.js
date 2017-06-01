export default {
  routesPermissions: {
    requireAuth: [
      '/admin'
    ],
    routesRequireAdmin: [
      '/admin'
    ]
  },
  routing: {},
  user: {
    isAdmin: undefined
  },
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
  ajaxCallsInProgress: 0,
  requests: {
    products: [
      {
        type: 'plane ticket',
        departureDate: 'Monday',
        departureAirport: 'JCA',
        returnDate: 'Tuesday',
        returnAirport: 'DPE',
        id: 1,
        custom: true
      }, {
        type: 'plane ticket',
        departureDate: 'Monday',
        departureAirport: 'CQF',
        returnDate: 'Tuesday',
        returnAirport: 'LRH',
        id: 2,
        custom: true
      }
    ],
    types: [
      { type: 'plane ticket', id: 1 },
      { type: 'Madeleine', id: 2 },
      { type: 'Hivy T-shirt', id: 3 }
    ]
  }
};
