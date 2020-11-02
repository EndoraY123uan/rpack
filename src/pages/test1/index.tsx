import React from "react";
import { Link } from "react-router-dom";

const Test1 = (props) => {
  console.log("这是test页面");

  return (
    <div>
      这是测试一组件
      {props.children}
    </div>
  );
};

export default Test1;
