import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentUpdateComponent from "./RecentUpdateComponent";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function UpdateScroll({ items = [] }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sref = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: isMobile ? 1 : 4,   // ✅ RESPONSIVE
    slidesToScroll: isMobile ? 1 : 2, // ✅ RESPONSIVE
    arrows: false,
    centerMode: true,
    centerPadding: isMobile ? "20px" : "0px",
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const showUpdate = () =>
    items.map((item, index) => (
      <div key={index}>
        {/* GAP BETWEEN CARDS */}
        <div style={{ padding: "0 10px" }}>
          <RecentUpdateComponent item={item} />
        </div>
      </div>
    ));

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Slider ref={sref} {...settings}>
        {showUpdate()}
      </Slider>
    </div>
  );
}
