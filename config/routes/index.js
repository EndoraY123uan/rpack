/*
 * @Author: jinzi.yuan
 * @description: 路由配置
 * @Date: 2020-10-28 14:37:53
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-10-30 18:30:25
 * @FilePath: \rpack\config\routes\index.js
 */
import Home from "../../src/pages/home";
import Test from "../../src/pages/test";
import Two from "../../src/pages/two";

const routes = [
  {
    path: "/test",
    component: Test,
    children: [
      {
        path: "/test/two",
        exact: true,
        component: Two,
      },
    ],
  },
  {
    path: "/two",
    exact: true,
    component: Two,
  },
  {
    path: "/",
    component: Home,
    exact: true,
  },
];
export default routes;
