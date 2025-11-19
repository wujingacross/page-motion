import Transition from "../components/Transition";
import { Button } from "@/components/ui/button";

const Home = Transition(() => {
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </div>
  );
});

export default Home;
