import { AnimatedBrain } from "@/components/home/animated-brain";
import { Main } from "@/components/home/main";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background ">
      <div className="hidden md:block">
        <AnimatedBrain />
      </div>
      <div className="block md:hidden">
        <Main />
      </div>
    </div>
  );
}
