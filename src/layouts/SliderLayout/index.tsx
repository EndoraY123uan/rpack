import React, { useState, ReactNode } from "react";
import { Menu, Button, Layout } from "antd";

import MenuList from "./menuList";
import UserInfo from "./components/userInfo";

import History from "history";

const { SubMenu, Item } = Menu;
const { Sider, Content, Header } = Layout;

interface Props {
  inlineCollapsed: boolean;
  menuList: object[];
  history: History;
  collapsed: false;
  theme: "light" | "dark" | undefined;
}

const SilderLayout = (props: Props) => {
  const { menuList, collapsed, theme } = props;

  return (
    <Sider theme={theme} collapsible collapsed={collapsed}>
      <UserInfo />
      <MenuList {...props} />
    </Sider>
  );
};

export default SilderLayout;
