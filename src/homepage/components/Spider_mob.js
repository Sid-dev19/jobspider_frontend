import StarRoundedIcon from "@mui/icons-material/StarRounded";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";

import playstore from "../../assets/google.webp";

import mobile from "../../assets/download_mobile.png";

export default function MobileSpiderCard() {
  return (
    <div
      style={{
        background: "#f6f0ff",
        borderRadius: 18,
        padding: 20,
        maxWidth: 360,
        margin: "auto",
        fontFamily: "Ubuntu",
      }}
    >
      <h2 style={{ color: "#5a2dbf" }}>Download Spider app!</h2>

      <ul>
        <li>Unlimited job applications</li>
        <li>HRs contact you directly</li>
        <li>Track your Applications</li>
      </ul>

      <img
        src={mobile}
        alt="App"
        style={{ width: "80%", display: "block", margin: "20px auto" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <StarRoundedIcon style={{ color: "#fbc531" }} /> <b>4.7</b>
          <div>7L reviews</div>
        </div>

        <div>
          <DownloadForOfflineRoundedIcon style={{ color: "#5a2dbf" }} />{" "}
          <b>5 cr+</b>
          <div>Downloads</div>
        </div>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: 12,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: "bold" }}>Download it from</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          
          <img src={playstore} alt="Playstore" style={{ width: 120 }} />
        </div>
      </div>
    </div>
  );
}
