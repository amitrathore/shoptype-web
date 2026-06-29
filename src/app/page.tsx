import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FiveCs from "@/components/FiveCs";
import Leapfrog from "@/components/Leapfrog";
import AgenticFoundation from "@/components/AgenticFoundation";
import CommerceOfAgents from "@/components/CommerceOfAgents";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <FiveCs />
        <Leapfrog />
        <AgenticFoundation />
        <HowItWorks />
        <WhoItsFor />
        <CommerceOfAgents />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
