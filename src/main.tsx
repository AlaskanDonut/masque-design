import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import { ThemeVisualizer } from "@/pages/theme-visualizer";
import { Profile } from "@/pages/profile";
import { Home } from "@/pages/home.tsx";

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
