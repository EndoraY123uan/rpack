import React, { useState, ReactNode } from "react";
import { Menu, Button } from "antd";

import MenuList from "./menuList";

import History from "history";

const { SubMenu, Item } = Menu;

interface Props {
  inlineCollapsed: boolean;
  menuList: object[];
  history: History;
}

const SilderLayout = (props: Props) => {
  const { menuList } = props;

  return (
    <div style={{ width: 200 }}>
      <MenuList {...props} />
    </div>
  );
};

export default SilderLayout;
