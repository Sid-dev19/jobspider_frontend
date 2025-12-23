import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentUpdateComponent from "./RecentUpdateComponent";

export default function UpdateScroll({ items }) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const sref = useRef();

  const showUpdate = () =>
    items.map((item, index) => (
      <div key={index}>
        {/* ✅ YE WRAPPER GAP CREATE KARTA HAI */}
        <div style={{ padding: "0 10px" }}>
          <RecentUpdateComponent item={item} />
        </div>
      </div>
    ));

  return (
    <div style={{ width: "100%" }}>
      <Slider ref={sref} {...settings}>
        {showUpdate()}
      </Slider>
    </div>
  );
}
