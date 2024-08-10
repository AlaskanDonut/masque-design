import { createIcon, exploreIcon, homeIcon } from "./svg";

export default function TopNavButton({
  variant,
  selection,
}: {
  variant: "home" | "explore" | "create";
  selection?: boolean;
}) {
  return (
    <button className="px-4 py-2 text-primary">
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
    </button>
  );
}
