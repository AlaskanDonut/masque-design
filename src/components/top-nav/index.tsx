import { ModeToggle } from "../mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TopNavButton from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useTheme } from "../providers/theme-provider";

const MenuItemStyle = "px-5 py-3";

export function TopNav() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex w-full h-full justify-between px-8 items-center">
      <TopNavButton to="/" variant="home" />
      <TopNavButton to="/explore" variant="explore" />
      <TopNavButton to="/create" variant="create" />
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar className="size-8 hover:cursor-pointer stroke-2 border-primary border-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-5 my-5 p-5 border-primary text-secondary-foreground">
          <DropdownMenuItem className={MenuItemStyle}>
            <Link to="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className={MenuItemStyle}>
            Messages
          </DropdownMenuItem>
          <DropdownMenuItem className={MenuItemStyle}>
            Subscriptions
          </DropdownMenuItem>
          <DropdownMenuItem
            className={MenuItemStyle}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </DropdownMenuItem>
          <DropdownMenuItem className={MenuItemStyle}>
            Settings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
