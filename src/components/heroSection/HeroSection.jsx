import React from "react";
import "../heroSection/HeroSection.css";
import MainBg from "../../assets/homePage/homePageBG.jpg";
const HeroSection = () => {
  return (
    <>
      <div className="homePage-bg mt-6 relative">
        <div className="banner-img-effect-1 rounded-3xl">
          <img src={MainBg} alt="banner-bg" className="rounded-3xl" />
        </div>
        <div className="bg-inner absolute z-10">
          <div className="main-titles ">
            <div className="main-heading">
              <h1 className="main-title-of-home-page text-7xl font-black">
                Unlimited movies, TV shows and more
              </h1>
            </div>
            <div className="sub-heading">
              <h1 className="sub-title-of-home-page text-2xl font-sans">
                Starts at ₹149. Cancel at any time.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
