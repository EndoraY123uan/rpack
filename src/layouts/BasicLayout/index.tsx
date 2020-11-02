import React, { ReactChildren, useState } from "react";
import { Layout, Button } from "antd";

import SilderLayout from "../SliderLayout";
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
import History from "history";

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
  };

  return (
    <Layout className={styles.basic}>
      <Sider theme="light" collapsible collapsed={collapsed}>
        <SilderLayout {...sliderProps} />
      </Sider>
      <Layout>
        <Header>
          <Button type="primary" onClick={changeCollapsed}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
            )}
          </Button>
        </Header>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
