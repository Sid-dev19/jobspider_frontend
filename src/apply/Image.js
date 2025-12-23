import logo from "../assets/companylogo.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import companylogo from "../assets/companyadvertisement.png";
import { serverURL } from "../services/FetchNodeServices";

export default function Image({ job }) {
  if (!job) return null;

  return (
    <div style={{ padding: 12, fontFamily: "Ubuntu" }}>
      {/* MAIN CARD */}
      <div
        style={{
          padding: 20,
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "20px",
          width: "100%",
          minHeight: "360px",
          marginTop: "40px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* TOP ICON */}
        <div>
          <img src="/spider.png" style={{ width: 40 }} alt="icon" />
        </div>

        {/* CONTENT */}
        <div>
          <div
            style={{
              fontSize: "15px",
              lineHeight: "22px",
              opacity: 0.9,
              marginBottom: "10px",
            }}
          >
            Application for
          </div>

          <div
            style={{
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "28px",
            }}
          >
            {job.categoryname}
          </div>

          <div
            style={{
              fontWeight: 800,
              fontSize: "30px",
              lineHeight: "34px",
              marginTop: "4px",
            }}
          >
            {job.subcategoryname}
          </div>

          <div
            style={{
              fontWeight: 500,
              fontSize: "16px",
              marginTop: "4px",
            }}
          >
            {job.jobtype} Job
          </div>
        </div>

        {/* COMPANY */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "18px",
          }}
        >
          <div
            style={{
              width: "78px",
              height: "30px",
              backgroundColor: "#fff",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={`${serverURL}/images/${job.logo}`}
              alt="company logo"
              style={{ maxWidth: "42px", objectFit: "contain" }}
            />
          </div>

          <div style={{ fontWeight: 500, fontSize: "14px" }}>
            {job.companyname}
          </div>
        </div>

        {/* SALARY */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "10px",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
          <span>
            {job.minsalary} – {job.maxsalary} per month
          </span>
        </div>

        <div style={{ fontSize: "13px", opacity: 0.85 }}>
          (Fixed + incentives)
        </div>
      </div>

      {/* COMPANY AD */}
      <div style={{ paddingTop: 30 }}>
        <img
          src={companylogo}
          alt="company advertisement"
          style={{ width: "100%", borderRadius: "14px" }}
        />
      </div>
    </div>
  );
}
