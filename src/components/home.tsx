import Navbar from "./navbar";
import HeroSection from "./hero-section";
import DoveMangiare from "./dove-mangiare";
import Competizioni from "./competizioni";
import Footer from "./footer";

function Home() {
  return (
    <div className="w-screen min-h-screen bg-[#F5F5DC]">
      <Navbar />
      <HeroSection />
      <DoveMangiare />
      <Competizioni />
      <Footer />
    </div>
  );
}

export default Home;
