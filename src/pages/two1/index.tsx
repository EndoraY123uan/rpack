import React from "react";
import HashRouter from "@/router/hashRouter";

const Two1 = (props) => {
  window.HashRouter = new HashRouter();
  let content = document.getElementById("content");

  const changeBgC = (color: string) => {
    console.log("路由改变了");
    content.style.backgroundColor = color;
  };

  window.HashRouter.route("/apple", () => {
    changeBgC("red");
  });
  window.HashRouter.route("/peach", () => {
    changeBgC("pink");
  });
  console.log("这是test页面");

  return (
    <div id="content">
      <div>
        <a href="#/apple"> /apple</a>
      </div>
      <div>
        <a href="#/peach"> /peach</a>
      </div>
    </div>
  );
};

export default Two1;
