import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ReviewCommponent from "./ReviewComponet"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

export default function ReviewScroll({ data = [] }) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  const sref = useRef()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: matches ? 1 : 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 5000,
  }

  const showReview = () =>
    data.map((item, index) => (
      <div key={index}>
        {/* ✅ SPACING WRAPPER */}
        <div style={{ padding: matches ? "5px" : "5px" }}>
          <ReviewCommponent item={item} />
        </div>
      </div>
    ))

  return (
    <div
      style={{
        width: "100%",
        padding: matches ? "0" : "10px 0",
      }}
    >
      <Slider ref={sref} {...settings}>
        {showReview()}
      </Slider>
    </div>
  )
}
