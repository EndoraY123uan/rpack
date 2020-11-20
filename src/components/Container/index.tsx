import React, { ReactNode, FC } from "react";
import styles from "./index.less";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
