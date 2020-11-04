/*
 * @Author: jinzi.yuan
 * @description: 菜单工具函数
 * @Date: 2020-11-03 10:27:32
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-03 11:06:44
 * @FilePath: \rpack\src\utils\menu.js
 */
import BasicRoutes from "../../config/routes/basic";

const getFirstMenuList = (menuList = []) => {
  const rootMenuList = [];
  menuList.map(({ path }) => {
    const arr = path.split("/");
    arr.length > 2 ? null : rootMenuList.push(`/${arr[1]}`);
  });

  return rootMenuList;
};

export default getFirstMenuList(BasicRoutes);
