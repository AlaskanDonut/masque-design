import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/providers/theme-provider";
import SideNav from "./components/side-nav";
import { TopNav } from "./components/top-nav";

function App() {
  return (
    <ThemeProvider>
      <div className="flex w-full flex-row justify-center  mt-20 md:mt-0">
        <div className="flex max-w-[1215px] w-full flex-row gap-x-7 justify-center  mx-7">
          <div className="w-64 shrink-0 hidden md:block bg-red-300">
            <div className="w-full py-7 sticky top-0 h-dvh">
              <SideNav />
            </div>
          </div>
          <main className="flex-grow text-sm max-w-lg">
            <Outlet />
          </main>
          <div className="w-64 shrink-0 hidden lg:block bg-yellow-300">
            <div className="w-full py-7 sticky top-0 max-h-dvh">Hi there</div>
          </div>
        </div>
      </div>
      <div className="pt-safe md:hidden w-full top-0 min-h-20 fixed left-0 right-0 flex flex-col justify-center backdrop-blur-lg">
        <TopNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
