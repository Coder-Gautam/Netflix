import React from "react";
import '../HomePage/Home.css'
import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import MailBtn from "../../components/mail/MailBtn";
import TrendingHeader from "../../components/trendingHeader/TrendingHeader";
import SimpleSlider from "../../components/trendingSlider/TrendingSlider";

const Home = () => {
  return (
    <div className="home-page-main-con">
      <Header />
      <HeroSection />
      <MailBtn />
      <TrendingHeader />
      <SimpleSlider />
    </div>
  );
};

export default Home;
