import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //   name: 'CRUD示例',
    //   path: '/table',
    //   component: './Table',
    // },
    {
      name: '多频道聊天室',
      path: '/my-form',
      component: './MyForm',
    },
  ],
  npmClient: 'pnpm',
});
