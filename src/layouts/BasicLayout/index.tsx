import React, { ReactChildren, useState } from "react";
import { Layout, Button } from "antd";

import SilderLayout from "../SliderLayout";
import HeaderLayout from "../HeaderLayout";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

import BasicRoutes from "../../../config/routes/basic";

import styles from "./index.less";

const { Sider, Content, Header } = Layout;
interface Props {
  children: ReactChildren;
  history: History;
}

const BasicLayout = (props: Props) => {
  const { history } = props;
  const [collapsed, setcollapsed] = useState(false);

  const changeCollapsed = () => {
    setcollapsed(!collapsed);
  };

  const sliderProps = {
    inlineCollapsed: collapsed,
    menuList: BasicRoutes,
    mode: "inline",
    theme: "dark",
    history: history,
    collapsed: collapsed,
  };

  return (
    <Layout className={styles.basic}>
      <SilderLayout {...sliderProps} />
      <Layout>
        <Header className={styles.header}>
          <Button type="primary" onClick={changeCollapsed}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
            )}
          </Button>
          <HeaderLayout />
        </Header>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
