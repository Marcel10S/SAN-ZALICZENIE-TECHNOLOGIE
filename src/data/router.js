import React from "react";
import { createBrowserRouter } from "react-router-dom";

import routeList from "./routeList.js";
import Home from "../pages/Home";
import Test from "../pages/Test";
import Currency from "../pages/Currency";
import Details from "../pages/Details";
import Report from "../pages/Report";
import Error from "../pages/Error";

export default createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      { path: routeList.currency.path, element: <Currency /> },
      { path: routeList.details.path, element: <Details /> },
      { path: routeList.example.path, element: <Report /> },
      { path: routeList.home.path, element: <Home /> },
      { path: routeList.test.path, element: <Test /> },
    ],
  }
]);