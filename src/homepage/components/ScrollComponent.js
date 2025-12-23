import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import JobComponent from "./JobComponent"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

export default function ScrollComponent({ data = [] }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const sliderRef = useRef(null)

  const settings = {
    dots: isMobile,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    centerMode: false,
  }

  return (
    <div style={{ position: "relative", padding: "10px 0" }}>
      
      {/* LEFT ARROW – WEB */}
      {!isMobile && (
        <div
          onClick={() => sliderRef.current?.slickPrev()}
          style={{
            position: "absolute",
            top: "50%",
            left: -20,
            transform: "translateY(-50%)",
            zIndex: 5,
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#b03a84",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <KeyboardArrowLeftIcon sx={{ fontSize: 30, color: "#fff" }} />
        </div>
      )}

      {/* 🔥 IMPORTANT WRAPPER */}
      <div
        style={{
          margin: "0 -12px",   // ✅ outer negative margin
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                padding: isMobile ? "0 8px" : "0 12px", // ✅ GAP BETWEEN CARDS
              }}
            >
              <JobComponent item={item} />
            </div>
          ))}
        </Slider>
      </div>

      {/* RIGHT ARROW – WEB */}
      {!isMobile && (
        <div
          onClick={() => sliderRef.current?.slickNext()}
          style={{
            position: "absolute",
            top: "50%",
            right: -20,
            transform: "translateY(-50%)",
            zIndex: 5,
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#b03a84",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <KeyboardArrowRightIcon sx={{ fontSize: 30, color: "#fff" }} />
        </div>
      )}
    </div>
  )
}
