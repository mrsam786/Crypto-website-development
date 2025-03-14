import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";
import HeroSection from "../Components/HeroSection.jsx";
import Roadmap from "../Components/Roadmap.jsx";
import Blockchain from "../Components/Blockchain.jsx";
import Video from "../Components/Video.jsx";
import DiamondHands from "../Components/DiamondHands.jsx";
import BenefitsDesc from "../Components/BenefitsDesc.jsx";
import How from "../Components/How.jsx";
import Giveaways from "../Components/Giveaways.jsx";
import Buy from "../Components/Buy.jsx";
import Visionaries from "../Components/Visionaries.jsx";

const LandingPage = () => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="relative flex justify-center flex-col w-full bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <Header />
        <Blockchain />
        <Video />
        <DiamondHands />
        <BenefitsDesc />
        <How />
        <Giveaways />
        <Roadmap />
        <Buy />
        <Visionaries />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
};
export default LandingPage;
