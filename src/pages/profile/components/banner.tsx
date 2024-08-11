import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <div className="flex flex-col content-center gap-y-4 overflow-visible">
      <Card className="relative h-48 overflow-hidden p-5 drop-shadow-xl shadow-black border-none">
        <img
          src="https://images.pexels.com/photos/640907/pexels-photo-640907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="absolute bottom-0 left-0 right-0 top-0 z-0 size-full object-cover w-full h-full"
          alt="Profile Banner"
        />
        <div className="aspect-square h-full shrink-0 content-center">
          <img
            src="https://github.com/shadcn.png"
            className="z-1 relative aspect-square size-full rounded-full border bg-cover border-border"
            width={500}
            height={500}
            alt="Profile Image"
          />
        </div>
      </Card>
      <div className="flex flex-col content-center justify-between gap-y-5">
        <div className="flex items-center justify-between pl-7">
          <div className="flex flex-col">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Display Name
            </h3>
            <h5>Username</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
