import React from "react";
import { Link } from "react-router-dom";

const Test2 = (props) => {
  return (
    <div>
      这是测试二组件
      {props.children}
    </div>
  );
};

export default Test2;
