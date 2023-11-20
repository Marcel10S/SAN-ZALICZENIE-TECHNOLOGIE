import React from "react";
import { createBrowserRouter } from "react-router-dom";

import routeList from "./routeList.js";
import Home from "../pages/Home";
import Test from "../pages/Test";
import Currency from "../pages/Currency";
import Details from "../pages/Details";
import Example from "../pages/Example";

export default createBrowserRouter([
  {
    errorElement: <div>Erorora</div>,
    children: [
      { path: routeList.currency.path, element: <Currency /> },
      { path: routeList.details.path, element: <Details /> },
      { path: routeList.example.path, element: <Example /> },
      { path: routeList.home.path, element: <Home /> },
      { path: routeList.test.path, element: <Test /> },
    ],
  }
]);