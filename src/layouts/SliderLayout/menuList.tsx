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

  const getIcon = (icon?: string) => {
    if (!icon) return null;
    const Icon = IconMap[icon];
    if (!Icon) return null;
    return IconMap[icon];
  };

  const menuItemRender = (menu: menuItemProps) => {
    const { path, name, children, icon } = menu;
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
      >
        {menuList.map((item: any, key) => menuItemRender(item))}
      </Menu>
    </div>
  );
};

export default MenuList;
