import qr from "../../assets/qr.webp";
import spider from "../../assets/spiderapp.png";
import playstore from "../../assets/google.webp";
import mobile from "../../assets/download_mobile.png";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Spider_Mob from "./Spider_mob"; // ✅ mobile component

export default function SpiderComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        width: matches ? "100%" : 1300,
        height: matches ? "auto" : 430,
        backgroundColor: "#f9f4ff",
        borderRadius: 18,
        margin: "0 auto",
      }}
    >
      {/* ✅ NEW WRAPPER DIV */}
      <div style={{ padding: 20 }}>
        {/* ✅ MOBILE VIEW */}
        {matches ? (
          <Spider_Mob />
        ) : (
          <>
            {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}

            <div
              style={{
                fontSize: 38,
                color: "#3B3B98",
                fontWeight: "bolder",
                margin: 20,
              }}
            >
              Download Spider app!
            </div>

            <div
              style={{
                fontSize: 20,
                color: "#1e272e",
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Unlimited job applications | HRs contact you directly | Track your
              Applications
            </div>

            {/* QR BOX */}
            <div
              style={{
                borderRadius: 12,
                marginLeft: 20,
                marginTop: 60,
                width: "25%",
                background: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <p style={{ marginLeft: 15 }}>
                Scan QR to <br />
                download Spider <br />
                app
              </p>
              <img
                src={qr}
                alt="qr"
                style={{
                  width: 110,
                  height: 100,
                  margin: 15,
                  border: "1px solid #aaa",
                  borderRadius: 10,
                }}
              />
            </div>

            {/* APP IMAGE */}
            <img
              src={spider}
              alt="spider"
              style={{ height: 350, marginLeft: 700, marginTop: -248 }}
            />

            {/* RATING */}
            <div
              style={{
                width: 190,
                height: 100,
                marginLeft: 1040,
                marginTop: -260,
                background:
                  "linear-gradient(90deg, #f9f4ff 0%, #f3ebff 100%)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StarRoundedIcon
                  style={{ color: "#FFC312", fontSize: 40 }}
                />
                <div style={{ fontSize: 25, fontWeight: "bolder" }}>4.4</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#3B3B98",
                }}
              >
                5L reviews
              </div>
            </div>

            {/* DOWNLOADS */}
            <div
              style={{
                width: 190,
                height: 100,
                marginLeft: 1040,
                marginTop: 25,
                background:
                  "linear-gradient(90deg, #f9f4ff 0%, #f3ebff 100%)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginLeft: 20 }}>
                <DownloadForOfflineRoundedIcon
                  style={{ color: "#3B3B98", fontSize: 30 }}
                />
                <div
                  style={{
                    fontWeight: "bolder",
                    fontSize: 25,
                    marginLeft: 10,
                  }}
                >
                  1 cr+
                </div>
              </div>
              <div
                style={{
                  marginLeft: 30,
                  fontWeight: "bold",
                  color: "#3B3B98",
                }}
              >
                App downloads
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
