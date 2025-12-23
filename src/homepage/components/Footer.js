import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#190A28",
        padding: matches ? 3 : 6,
        display: "flex",
        flexDirection: matches ? "column" : "row",
        gap: 4,
        color: "#fff",
      }}
    >
      {/* LEFT SECTION */}
      <Box sx={{ flex: 1 }}>
        {/* LOGO */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src="/spider.png" style={{ width: 55 }} />
          <Typography fontSize={26} fontWeight={700}>
            JobSpider
          </Typography>
        </Box>

        {/* SOCIAL */}
        <Box sx={{ marginTop: 3 }}>
          <Typography fontSize={22} fontWeight={700} gutterBottom>
            Follow us on social media
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: matches ? "center" : "flex-start",
              marginTop: 1,
            }}
          >
            <FacebookIcon sx={{ fontSize: 34 }} />
            <LinkedInIcon sx={{ fontSize: 34 }} />
            <InstagramIcon sx={{ fontSize: 34 }} />
            <TwitterIcon sx={{ fontSize: 34 }} />
            <YouTubeIcon sx={{ fontSize: 34 }} />
          </Box>
        </Box>

        {/* DIVIDER */}
        <Divider sx={{ backgroundColor: "#fff", marginY: 3 }} />

        {/* FOOTER LINKS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: matches ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            textAlign: matches ? "center" : "left",
          }}
        >
          <Typography fontSize={14}>
            © Copyright SoftCareWeb | All rights reserved
          </Typography>
          <Typography fontSize={14}>Designed by SoftCareWeb</Typography>
          <Typography fontSize={14}>Terms & Conditions</Typography>
        </Box>
      </Box>

      {/* RIGHT CARD (HIDDEN ON MOBILE) */}
      {!matches && (
        <Box
          sx={{
            width: 420,
            backgroundColor: "#fff",
            borderRadius: 3,
            padding: 3,
            color: "#000",
          }}
        >
          <Typography fontWeight="bold" fontSize={20}>
            Apply on the go
          </Typography>
          <Typography fontSize={16} marginTop={1}>
            Get real-time job updates on our App
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
            <img src="playstore.png" style={{ width: 150 }} />
            <img
              src="qrcode.png"
              style={{ width: 90, marginLeft: "auto" }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}
