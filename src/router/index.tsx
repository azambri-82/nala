import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routerMap";
import TabMenu from "../components/tap-menu/TapMenu";

const Routes = () => useRoutes(routes);
const Router = () => {
  return (
    <BrowserRouter>
      <TabMenu />
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
