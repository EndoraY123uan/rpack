import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.less";

const Test2 = (props) => {
  return (
    <div className={styles.content}>
      {props.children}
    </div>
  );
};

export default Test2;
