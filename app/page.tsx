import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
