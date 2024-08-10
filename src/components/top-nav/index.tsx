import { ModeToggle } from "../mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import TopNavButton from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MenuItemStyle = "px-5 py-3";

export function TopNav() {
  return (
    <nav className="flex w-full h-full justify-between px-8 items-center">
      <ModeToggle />
      <TopNavButton variant="home" />
      <TopNavButton variant="explore" />
      <TopNavButton variant="create" />

      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          {" "}
          <Avatar className="size-8 hover:cursor-pointer stroke-2 border-primary border-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-5 my-5 p-5 border-primary text-primary">
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator /> */}
          <DropdownMenuItem className={MenuItemStyle}>Profile</DropdownMenuItem>
          <DropdownMenuItem className={MenuItemStyle}>
            Messages
          </DropdownMenuItem>
          <DropdownMenuItem className={MenuItemStyle}>
            Subscriptions
          </DropdownMenuItem>
          <DropdownMenuItem className={MenuItemStyle}>Display</DropdownMenuItem>
          <DropdownMenuItem className={MenuItemStyle}>
            Settings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
