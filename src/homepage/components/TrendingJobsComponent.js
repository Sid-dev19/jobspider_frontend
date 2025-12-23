import TrendingJobs from "./TrendingJobs";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TrendingJobsComponent({ items = [], colors = [] }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const showTrendingJobs = () => {
    return items.map((item, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          justifyContent: isMobile ? "center" : "unset",
          width: isMobile ? "100%" : "auto",
        }}
      >
        <TrendingJobs item={item} colors={colors[i]} />
      </div>
    ));
  };

  return (
    <div>
      <div
        style={{
          margin: 10,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        {/* TITLE CARD */}
        <div
          style={{
            width: 300,
            height: 260,
            margin: 15,
            padding: "30px 20px",
            borderRadius: "18px",
            fontWeight: "bold",
            fontFamily: "Ubuntu",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "38px" : "45px",   // 🔥 BIGGER ON MOBILE
              fontWeight: "inherit",
              lineHeight: 1.15,
              animation: isMobile
                ? "popFade 0.9s ease-out forwards"
                : "none",
            }}
          >
            Popular <br />
            Searches on <br />
            JobSpider
          </Typography>
        </div>

        {showTrendingJobs()}
      </div>

      {/* 🔥 CSS ANIMATION */}
      <style>
        {`
          @keyframes popFade {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(10px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
