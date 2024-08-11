import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Banner } from "./components/banner";

export function Profile() {
  return (
    <div className="flex w-full flex-col gap-y-7 pb-7 overflow-visible">
      <Banner />
      <Separator />
      <Link to="/">Home</Link>
      <div className="py-2">Content</div>
      {Array.from({ length: 100 }, (_, i) => (
        <p key={i}>This is paragraph {i + 1}</p>
      ))}
    </div>
  );
}
