/*
 * @Author: jinzi.yuan
 * @description: 路由配置
 * @Date: 2020-10-28 14:37:53
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-10-29 17:43:01
 * @FilePath: \rpack\config\routes\index.js
 */
import Home from "../../src/pages/home";
import Test from "../../src/pages/test";

const routes = [
  {
    path: "/test",
    // component: Test,
    children: [
      {
        path: "/test/two",
        component: Test,
      },
      // {
      //   path: "/test/two",
      //   component: Home,
      // },
      // {
      //   path: "/three",
      //   component: Test,
      //   children: [
      //     {
      //       path: "/four",
      //       component: Home,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: "/",
    component: Home,
    exact: true,
  },
];
export default routes;
