import React, { useState, ReactNode } from "react";
import { Menu } from "antd";

import IconMap from "../../../config/icon";

const { SubMenu, Item } = Menu;

interface Props {
  inlineCollapsed: boolean;
  menuList: object[];
  history: History;
}

interface menuItemProps {
  path: string;
  name: string;
  children: object[];
  icon: string;
}

const MenuList = (props: Props) => {
  const { menuList, history } = props;

  const [rootSubmenuKeysList, setrootSubmenuKeysList] = useState<string[]>([]);
  const [openKeys, setopenKeys] = useState(rootSubmenuKeysList[0]);

  const getRootSubmenuKeys = (path: string) => {
    const arr = path.split("/");
    arr.length > 2 ? null : rootSubmenuKeysList.push(`/${arr[1]}`);
    // return rootRoute;
  };

  const onOpenChange = (openKeys: String[]) => {
    const latestOpenKey = openKeys.find((key) => openKeys.indexOf(key) === -1);
    console.log("openkey--------", latestOpenKey);

    // if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //   setState({ openKeys });

    // } else {
    //   setState({
    //     openKeys: latestOpenKey ? [latestOpenKey] : [],
    //   });
    // }
  };

  const getIcon = (icon?: string) => {
    if (!icon) return null;
    const Icon = IconMap[icon];
    if (!Icon) return null;
    return IconMap[icon];
  };

  const menuItemRender = (menu: menuItemProps) => {
    const { path, name, children, icon } = menu;
    getRootSubmenuKeys(path);
    if (!path) return null;
    if (children) {
      return (
        <SubMenu key={String(path)} icon={getIcon(icon)} title={name}>
          {children.map((item: any) => {
            return menuItemRender(item);
          })}
        </SubMenu>
      );
    }
    return (
      <Item key={String(path)} icon={getIcon(icon)}>
        {name}
      </Item>
    );
  };

  return (
    <div style={{ width: 200 }}>
      <Menu
        {...props}
        defaultSelectedKeys={["/home"]}
        onSelect={({ key }) => {
          history.push(key);
        }}
        onOpenChange={() => onOpenChange}
      >
        {menuList.map((item: any, key) => menuItemRender(item))}
      </Menu>
    </div>
  );
};

export default MenuList;
