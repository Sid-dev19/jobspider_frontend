import { Button } from "@mui/material"
import left from "../../assets/img-left.webp"
import right from "../../assets/img-right.webp"
import leaf from "../../assets/overleaf-green.svg"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

export default function GetResumeHelp() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  if (matches) return null

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f3f4ff",
        marginTop: 30,
        padding: "60px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ✅ LEFT IMAGE – TOP LEFT CORNER */}
      <img
  src={left}
  alt=""
  style={{
    position: "absolute",
    left: 0,
    bottom: -1,
    height: 280,
    objectFit: "contain",
  }}
/>


      {/* ✅ RIGHT IMAGE – BOTTOM RIGHT CORNER */}
     <img
  src={right}
  alt=""
  style={{
    position: "absolute",
    right: 0,
    top: -10,      
    height: 280,
    objectFit: "contain",
  }}
/>


      {/* CENTER CONTENT */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          padding: "0 40px",
          position: "relative",
          zIndex: 2, // 👈 images ke upar content
        }}
      >
        <div
          style={{
            maxWidth: 600,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: "bold" }}>
            Already have a resume? Get help <br />
            making it stand out to employers
          </div>

          <div style={{ fontSize: 16, marginTop: 10, lineHeight: 1.6 }}>
            Match with a career coach who knows your industry for an expert
            <br />
            resume review
          </div>

          <a
            href="https://www.overleaf.com/login?id=49581886&latexEngine=pdflatex&mainFile=resume_faangpath.tex&templateName=FAANGPath%20Simple%20Template&texImage=texlive-full%3A2024.1"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="contained"
              style={{
                fontSize: 16,
                backgroundColor: "#9c0f68",
                borderRadius: 25,
                color: "#ffffff",
                textTransform: "none",
                marginTop: 24,
                padding: "10px 28px",
              }}
            >
              <b>Get Resume Help</b>
            </Button>
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 16,
              fontSize: 16,
            }}
          >
            A service of
            <img
              src={leaf}
              alt=""
              style={{
                width: 40,
                height: 40,
                marginLeft: 6,
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
