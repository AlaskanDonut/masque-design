import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <p>Home</p>
      <Link to="/theme">Theme</Link>
    </div>
  );
}
