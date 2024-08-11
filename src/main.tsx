import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import { ThemeVisualizer } from "@/pages/theme-visualizer";
import { Profile } from "@/pages/profile";
import { Home } from "@/pages/home.tsx";
import { Explore } from "@/pages/explore/index.tsx";
import { Create } from "@/pages/create/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "theme",
        element: <ThemeVisualizer />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={"Hi there"} />
  </StrictMode>
);
