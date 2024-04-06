import React, { useState, ReactNode } from "react";
import { Menu } from "antd";

import IconMap from "../../../config/icon";

import RootMenuList from "../../utils/menu";

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
  const [openKeys, setopenKeys] = useState<string[]>([RootMenuList[0]]);

  const onOpenChange = (openKeysArr: any[]) => {
    const latestOpenKey = openKeysArr.find(
      (key: any) => openKeys.indexOf(key) === -1
    );
    if (RootMenuList.indexOf(latestOpenKey) === -1) {
      setopenKeys(openKeysArr);
    } else {
      const keyArr = latestOpenKey ? [latestOpenKey] : [];
      setopenKeys(keyArr);
    }
  };

  const getIcon = (icon?: string) => {
    if (!icon) return null;
    const Icon = IconMap[icon];
    if (!Icon) return null;
    return Icon;
  };

  const menuItemRender = (menu: menuItemProps) => {
    const { path, name, children, icon } = menu;
    if (!path) return null;
    if (children) {
      return (
        <SubMenu key={path} icon={getIcon(icon)} title={name}>
          {children.map((item: any) => {
            return menuItemRender(item);
          })}
        </SubMenu>
      );
    }
    return (
      <Item key={path} icon={getIcon(icon)}>
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
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        {menuList.map((item: any, key) => menuItemRender(item))}
      </Menu>
    </div>
  );
};

export default MenuList;
