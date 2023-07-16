import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { AboutUsPage } from "./screens/AboutUsPage";
import { OfficialPage } from "./screens/OfficialPage";
import { StartPost } from "./screens/StartPost";
import { PostFeedPage } from "./screens/PostFeedPage";
import { UserPageMain } from "./screens/UserPageMain";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  ,
  {
    path: "/official",
    element: <OfficialPage />,
  },
  {
    path: "/start",
    element: <StartPost />,
  },
  {
    path: "/feed",
    element: <PostFeedPage />,
  },
  {
    path: "/user",
    element: <UserPageMain />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
