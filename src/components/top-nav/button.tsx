import { NavLink } from "react-router-dom";
import { createIcon, exploreIcon, homeIcon } from "./svg";

export default function TopNavButton({
  variant,
  selection,
  to,
}: {
  variant: "home" | "explore" | "create";
  selection?: boolean;
  to: string;
}) {
  return (
    <NavLink to={to} className="px-4 py-2 text-secondary-foreground">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === "home" && homeIcon}
        {variant === "explore" && exploreIcon}
        {variant === "create" && createIcon}
      </svg>
    </NavLink>
  );
}
