import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import Prodotti from "@/components/Prodotti";
import Recensioni from "@/components/Recensioni";
import Contatti from "@/components/Contatti";
import ScrollRevealTrigger from "@/components/ScrollRevealTrigger";
import { getOrari } from "@/lib/orari";
import { getFeaturedProducts } from "@/app/actions/products";

export default async function Home() {
  const [orari, featuredProducts] = await Promise.all([
    getOrari(),
    getFeaturedProducts(),
  ]);

  return (
    <>
      <ScrollRevealTrigger />
      <Hero />
      <ChiSiamo />
      <Prodotti featuredProducts={featuredProducts} />
      <Recensioni />
      <Contatti orari={orari} />
    </>
  );
}
