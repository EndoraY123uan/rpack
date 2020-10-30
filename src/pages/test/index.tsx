import React from "react";
import { Link } from "react-router-dom";

const Test = (props) => {
  console.log("这是test页面");

  return (
    <div>
      这是测试页面组件
      <Link to="/test/two">two</Link>
      {props.children}
    </div>
  );
};

export default Test;
