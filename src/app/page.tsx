import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Opportunities from "@/components/Opportunities";
import AgenticFoundation from "@/components/AgenticFoundation";
import HowItWorks from "@/components/HowItWorks";
import SellerExample from "@/components/SellerExample";
import Developers from "@/components/Developers";
import CommerceOfAgents from "@/components/CommerceOfAgents";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Opportunities />
        <AgenticFoundation />
        <HowItWorks />
        <SellerExample />
        <Developers />
        <CommerceOfAgents />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
