import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Banner } from "./components/banner";
import Post from "@/components/post";

export function Profile() {
  return (
    <div className="flex w-full flex-col gap-y-7 pb-7 overflow-visible">
      <Banner />
      <Separator />
      {Array.from({ length: 6 }, (_, i) => (
        <Post />
      ))}
    </div>
  );
}
