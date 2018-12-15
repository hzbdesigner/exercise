export default [
  {
    path: '/',
    component: '../layouts/index.js',
    routes: [
      { path: '/', redirect: '/market' },
      {
        path: '/market',
        name: 'market',
        component: './market',
      },
      {
        path: '/trade',
        name: 'trade',
        component: './trade',
      }
    ]
  }
];
