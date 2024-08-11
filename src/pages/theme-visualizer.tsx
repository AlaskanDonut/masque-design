import { ChevronRight, Link, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ThemeVisualizer() {
  return (
    <div className="flex flex-col space-y-5 py-7">
      <div className="flex flex-wrap gap-4">
        <div className="h-16 w-16 bg-background flex items-center justify-center text-gray-500 text-xs">
          background
        </div>
        <div className="h-16 w-16 bg-foreground flex items-center justify-center text-gray-500 text-xs">
          foreground
        </div>
        <div className="h-16 w-16 bg-card flex items-center justify-center text-gray-500 text-xs">
          card
        </div>
        <div className="h-16 w-16 bg-card-foreground flex items-center justify-center text-gray-500 text-xs">
          card-foreground
        </div>
        <div className="h-16 w-16 bg-popover flex items-center justify-center text-gray-500 text-xs">
          popover
        </div>
        <div className="h-16 w-16 bg-popover-foreground flex items-center justify-center text-gray-500 text-xs">
          popover-foreground
        </div>
        <div className="h-16 w-16 bg-primary flex items-center justify-center text-gray-500 text-xs">
          primary
        </div>
        <div className="h-16 w-16 bg-primary-foreground flex items-center justify-center text-gray-500 text-xs">
          primary-foreground
        </div>
        <div className="h-16 w-16 bg-secondary flex items-center justify-center text-gray-500 text-xs">
          secondary
        </div>
        <div className="h-16 w-16 bg-secondary-foreground flex items-center justify-center text-gray-500 text-xs">
          secondary-foreground
        </div>
        <div className="h-16 w-16 bg-muted flex items-center justify-center text-gray-500 text-xs">
          muted
        </div>
        <div className="h-16 w-16 bg-muted-foreground flex items-center justify-center text-gray-500 text-xs">
          muted-foreground
        </div>
        <div className="h-16 w-16 bg-accent flex items-center justify-center text-gray-500 text-xs">
          accent
        </div>
        <div className="h-16 w-16 bg-accent-foreground flex items-center justify-center text-gray-500 text-xs">
          accent-foreground
        </div>
        <div className="h-16 w-16 bg-destructive flex items-center justify-center text-gray-500 text-xs">
          destructive
        </div>
        <div className="h-16 w-16 bg-destructive-foreground flex items-center justify-center text-gray-500 text-xs">
          destructive-foreground
        </div>
        <div className="h-16 w-16 bg-border flex items-center justify-center text-gray-500 text-xs">
          border
        </div>
        <div className="h-16 w-16 bg-input flex items-center justify-center text-gray-500 text-xs">
          input
        </div>
        <div className="h-16 w-16 bg-ring flex items-center justify-center text-gray-500 text-xs">
          ring
        </div>
        <div className="h-16 w-16 bg-chart-1 flex items-center justify-center text-gray-500 text-xs">
          chart-1
        </div>
        <div className="h-16 w-16 bg-chart-2 flex items-center justify-center text-gray-500 text-xs">
          chart-2
        </div>
        <div className="h-16 w-16 bg-chart-3 flex items-center justify-center text-gray-500 text-xs">
          chart-3
        </div>
        <div className="h-16 w-16 bg-chart-4 flex items-center justify-center text-gray-500 text-xs">
          chart-4
        </div>
        <div className="h-16 w-16 bg-chart-5 flex items-center justify-center text-gray-500 text-xs">
          chart-5
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button>Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="outline">Outline</Button>
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Input type="email" placeholder="Email" />
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <Input disabled type="email" placeholder="Email" />
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
        <div>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
