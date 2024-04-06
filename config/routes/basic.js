/*
 * @Author: jinzi.yuan
 * @description: 路由配置
 * @Date: 2020-10-28 14:37:53
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-02 17:28:33
 * @FilePath: \rpack\config\routes\basic.js
 */

import Home from "../../src/pages/home";
import Test1 from "../../src/pages/test1";
import Test2 from "../../src/pages/test2";
import Two1 from "../../src/pages/two1";
import Two2 from "../../src/pages/two2";

const BasicRoutes = [
  {
    path: "/home",
    component: Home,
    name: "首页",
    icon: "DesktopOutlined",
  },
  {
    path: "/test1",
    component: Test1,
    name: "Test一级标题一",
    icon: "PieChartOutlined",
    children: [
      {
        path: "/test1/two1",
        ecact: true,
        name: "hash路由实现",
        icon: "DesktopOutlined",
        component: Two1,
      },
    ],
  },
  {
    path: "/test2",
    component: Test2,
    name: "Test一级标题二",
    icon: "DesktopOutlined",
    children: [
      {
        path: "/test2/two2",
        ecact: true,
        name: "Test二级标题二",
        icon: "PieChartOutlined",
        component: Two2,
      },
    ],
  },
];
export default BasicRoutes;
