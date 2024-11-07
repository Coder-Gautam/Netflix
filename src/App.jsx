import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import MailBtn from "./components/mail/MailBtn";
import TrendingHeader from "./components/trendingHeader/TrendingHeader";
import SimpleSlider from "./components/trendingSlider/TrendingSlider";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MailBtn />
      <TrendingHeader />
      <SimpleSlider />
    </>
  );
}

export default App;
