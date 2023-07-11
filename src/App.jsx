import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutUsPage } from "./screens/AboutUsPage";
import { HomePage } from "./screens/HomePage";
import {PostFeedPage} from "./screens/PostFeedPage"

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AboutUsPage />,
  },{
    element: <HomePage />,
  },{
    path: "feed",
    element: <PostFeedPage/>
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
