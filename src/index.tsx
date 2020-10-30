/*
 * @Author: jinzi.yuan
 * @description: 入口文件
 * @Date: 2020-08-21 12:15:25
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-10-30 18:30:35
 * @FilePath: \rpack\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import history from "./utils/history";
import routes from "../config/routes";

console.log("here=========", routes);

const App = () => {
  return (
    <Router history={history}>
      {/* <Switch> */}
        {routes.map((route, i) => {
          console.log(i);
          return <RouteWithSubRoutes key={i} route={route} />
        })}
      {/* </Switch> */}
    </Router>
  );
};

const RouteWithSubRoutes = ({ route }) => {
  console.log("start render", route);
  console.log("route =====", route);
  if (!route) return null;
  const { path, children = [], component: Component } = route;
  console.log(
    ">>>>",
    path,
    children.map((route) => route.path)
  );

  return (
    <Route
      exact={!!route.exact}
      path={path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <Component {...props}>
          {children.map((item, childKey) => {
            console.log("yes", item);
            return <RouteWithSubRoutes key={childKey} route={item} />;
          })}
        </Component>
      )}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
