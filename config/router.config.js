export default [
  {
    path: '/',
    component: '../layouts/index.js',
    routes: [
      { path: '/', redirect: '/market' },
      {
        path: '/market',
        exact: true,
        component: './market',
      },
      {
        path: '/trade',
        exact: true,
        component: './trade',
      },
      {
        path: '/trade/:symbol',
        component: './trade',
      },
    ]
  }
];
