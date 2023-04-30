import React from "react";
import { RouteObject } from "react-router-dom";
import StartPage from "../pages/start-page/index";
import OrganizationChart from "../pages/organization-chart";
import Collaborator from "../pages/collaborator";

const routerMap: RouteObject[] = [
  { path: "/inicio", element: <StartPage /> },
  { path: "/organigrama", element: <OrganizationChart /> },
  { path: "/colaborador", element: <Collaborator /> },
];
export default routerMap;
