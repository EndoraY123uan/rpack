import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("这是首页");

  return (
    <div>
      这是首页组件
      <Link to="/test/two">test</Link>
    </div>
  );
};

export default Home;
