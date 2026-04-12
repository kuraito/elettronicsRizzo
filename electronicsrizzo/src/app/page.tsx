"use client";

import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import Prodotti from "@/components/Prodotti";
import Recensioni from "@/components/Recensioni";
import Contatti from "@/components/Contatti";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <ChiSiamo />
      <Prodotti />
      <Recensioni />
      <Contatti />
    </>
  );
}
