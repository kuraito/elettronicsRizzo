import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import Prodotti from "@/components/Prodotti";
import Recensioni from "@/components/Recensioni";
import Contatti from "@/components/Contatti";
import ScrollRevealTrigger from "@/components/ScrollRevealTrigger";
import { getOrari } from "@/lib/orari";

export default function Home() {
  const orari = getOrari();

  return (
    <>
      <ScrollRevealTrigger />
      <Hero />
      <ChiSiamo />
      <Prodotti />
      <Recensioni />
      <Contatti orari={orari} />
    </>
  );
}
