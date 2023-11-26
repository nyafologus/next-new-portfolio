"use client";
import React from "react";
import Image from "next/image";
import ProgressLoader from "@/app/ui/progressloader";
import Hero from "@/app/ui/hero";

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
      <ProgressLoader isProgressActive={isProgressActive} />
    </main>
  );
}
