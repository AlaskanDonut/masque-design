import { createBrowserRouter } from "react-router-dom";
// Pages
import { Home } from "@/pages/home";
import { ThemeVisualizer } from "@/pages/theme-visualizer";
import { Profile } from "./pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/theme",
    element: <ThemeVisualizer />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
