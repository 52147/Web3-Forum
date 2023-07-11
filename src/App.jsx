import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutUsPage } from "./screens/AboutUsPage";
import { HomePage } from "./screens/HomePage";
import {PostFeedPage} from "./screens/PostFeedPage";
import {LogIn} from "./screens/LogIn"

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AboutUsPage />,
  },{
    element: <HomePage />,
  },{
    path: "feed",
    element: <PostFeedPage/>
  },{
    path: "login",
    element: <LogIn/>
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
