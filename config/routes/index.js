/*
 * @Author: jinzi.yuan
 * @description: 路由配置
 * @Date: 2020-10-28 14:37:53
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-02 17:29:36
 * @FilePath: \rpack\config\routes\index.js
 */
import BasicRoutes from "./basic";

import BasicLayout from "../../src/layouts/BasicLayout";

const routes = [
  {
    path: "/",
    component: BasicLayout,
    children: BasicRoutes,
  },
];
export default routes;
