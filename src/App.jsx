import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutUsPage } from "./screens/AboutUsPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AboutUsPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
