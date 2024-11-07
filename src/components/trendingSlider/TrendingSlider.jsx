import React from "react";
import "../trendingSlider/TrendingSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KhelImg from "../../assets/sliderImgs/KhelKhelMain.jpeg";
import Img1 from "../../assets/sliderImgs/img1.jpeg";
import Img2 from "../../assets/sliderImgs/img2.jpeg";
import Img3 from "../../assets/sliderImgs/img3.jpeg";
import Img4 from "../../assets/sliderImgs/img4.jpeg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    gap: 5,
  };
  return (
    <div className="main-con-slider mt-10">
      <Slider {...settings}>
        <div className="p-1">
          <img
            src={KhelImg}
            alt="Khel_Khel_Main_img"
            className="img-max-height"
          />
        </div>
        <div className="p-1">
          <img src={Img1} alt="Khel_Khel_Main_img" className="img-max-height" />
        </div>
        <div className="p-1">
          <img src={Img2} alt="Khel_Khel_Main_img" className="img-max-height" />
        </div>
        <div className="p-1">
          <img src={Img3} alt="Khel_Khel_Main_img" className="img-max-height" />
        </div>
        <div className="p-1">
          <img src={Img4} alt="Khel_Khel_Main_img" className="img-max-height" />
        </div>
        <div className="p-1">
          <img
            src={KhelImg}
            alt="Khel_Khel_Main_img"
            className="img-max-height"
          />
        </div>
        <div className="p-1">
          <img src={Img1} alt="Khel_Khel_Main_img" className="img-max-height" />
        </div>
        <div className="p-1">
          <img src={Img2} alt="Khel_Khel_Main_img" className="img-max-height" />
        </div>
        <div className="p-1">
          <img src={Img3} alt="Khel_Khel_Main_img" className="img-max-height" />
        </div>
        <div className="p-1">
          <img src={Img4} alt="Khel_Khel_Main_img" className="img-max-height" />
        </div>
      </Slider>
    </div>
  );
}
