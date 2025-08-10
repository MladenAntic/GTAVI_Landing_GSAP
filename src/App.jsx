import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { FirstVideo } from "./sections/FirstVideo";
import { JasonDuval } from "./sections/JasonDuval";
import { SecondVideo } from "./sections/SecondVideo";
import { LuciaCaminos } from "./sections/LuciaCaminos";
import { PostCard } from "./sections/PostCard";
import { Final } from "./sections/Final";
import { Outro } from "./sections/Outro";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <JasonDuval />
      <SecondVideo />
      <LuciaCaminos />
      <PostCard />
      <Final />
      <Outro />
    </main>
  );
}
