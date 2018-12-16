import routes from './router.config.js'
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: false,
      title: 'Test Exchange',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  routes,
  hash:true,
  history: 'hash',
  //ref: https://umijs.org/zh/guide/deploy.html
  base:'/exercise',
  publicPath: "/exercise/"
}
