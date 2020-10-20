import React, { useEffect } from "react";

import { Button } from "antd";

import Home from "./page/home";

import styles from "./App.less";
import test from "./page/test";



const App = () => {
  return (
    <div className={styles.app}>
      <h1>这是app测试组件</h1>
      <Home />
      <Button
        className={styles.btn}
      >
        antd按钮
      </Button>
    </div>
  );
};

export default App;
