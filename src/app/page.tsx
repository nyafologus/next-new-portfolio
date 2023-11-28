"use client";
import React from "react";
import ProgressLoader from "@/app/ui/progressloader";
import Hero from "@/app/ui/hero";
import About from "@/app/ui/about";
import Projects from "./ui/projects";

export default function Home() {
  const [isProgressActive, setProgressActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = 50;
      setProgressActive(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Projects />
      <ProgressLoader isProgressActive={isProgressActive} />
    </main>
  );
}
