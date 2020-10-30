/*
 * @Author: jinzi.yuan
 * @description: 入口文件
 * @Date: 2020-08-21 12:15:25
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-10-30 17:00:04
 * @FilePath: \rpack\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, NavLink } from "react-router-dom";

import history from "./utils/history";
import routes from "../config/routes";

const App = () => {
  // const loopRoute = (route, key) => {
  //   console.log("loop route", route);
  //   const { component: Comp, path, exact = true, children } = route;
  //   if (children) {
  //     console.log("children", children);
  //     console.log("yes", path);
  //     return (
  //       <Route
  //         path={path}
  //         key={key}
  //         exact={exact}
  //         render={(rest) => {
  //           return (
  //             <Comp {...rest}>
  //               {children.map((routeItem, childKey) => {
  //                 console.log("child route", routeItem);
  //                 return loopRoute(routeItem, childKey);
  //               })}
  //             </Comp>
  //           );
  //         }}
  //       ></Route>
  //     );
  //   } else {
  //     console.log("no", path);
  //     return (
  //       <Route
  //         key={key}
  //         path={path}
  //         exact={exact}
  //         render={(rest) => {
  //           return <Comp {...rest} />;
  //         }}
  //       ></Route>
  //     );
  //   }
  // };

  function RouteWithSubRoutes(route, key) {
    console.log("子组件", route.children);

    return (
      <Route
        exact
        key={key}
        path={route.path}
        render={(props) => (
          // pass the sub-routes down to keep nesting
          <route.component {...props}>
            {route.children &&
              route.children.map((item, childKey) => {
                console.log("yes", item);
                return RouteWithSubRoutes(item, childKey);
              })}
          </route.component>
        )}
      />
    );
  }

  return (
    <Router history={history}>
      {routes.map((route, key) => {
        return RouteWithSubRoutes(route, key);
      })}
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
