/*
 * @Author: jinzi.yuan
 * @description: 入口文件
 * @Date: 2020-08-21 12:15:25
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-10-29 17:39:40
 * @FilePath: \rpack\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router";

import history from "./utils/history";
import routes from "../config/routes";
const App = () => {


  const loopRoute = (route) => {
    console.log("loop route", route);
    const { component: Comp, path, exact = true, children } = route;
    if (children) {
      console.log("children", children);
      console.log("yes", path);
      return (
        <Route path={path} exact={exact} component={Comp}>
          {children.map((routeItem, key) => {
            console.log("child route", routeItem);
            return loopRoute(routeItem);
          })}
        </Route>
      );
    } else {
      console.log("no", path);
      return <Route path={path} exact={exact} component={Comp}></Route>;
    }
  };

  return (
    <Router history={history}>
      <Switch>
      {routes.map((route) => {
        return loopRoute(route);
      })}
      </Switch>
      
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
