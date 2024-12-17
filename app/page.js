import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Ingredients from "./components/Ingredients";
import NewsSection from "./components/NewsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Ingredients />
      <NewsSection />
      <Footer />
    </main>
  );
}
