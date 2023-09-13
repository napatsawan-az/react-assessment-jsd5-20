import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"
import HomeUser from "./HomeUser";
import HomeAdmin from "./HomeAdmin";
import Owner from "./Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homeuser",
    element: <HomeUser />,
  },
  {
    path: "/homeadmin",
    element: <HomeAdmin />,
  },
  {
    path: "/owner",
    element: <Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
