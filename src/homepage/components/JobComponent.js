import { serverURL } from "../../services/FetchNodeServices"
import { Button, Paper } from "@mui/material"
import { useState } from "react"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

export default function JobComponent({ item }) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  const [bk, setBk] = useState("#f1f2f6")
  const [btnProps, setBtnProps] = useState({
    v: "text",
    bk: "",
    c: "#b03a84",
  })

  const handleColorChangeOver = () => {
    setBk("#ffffff")
    setBtnProps({ v: "contained", bk: "#b03a84", c: "#fff" })
  }

  const handleColorChangeLeave = () => {
    setBk("#f1f2f6")
    setBtnProps({ v: "text", bk: "", c: "#b03a84" })
  }

  return (
    <div
      style={{
        padding: "12px", // ✅ gap between cards
      }}
    >
      <Paper
        onMouseLeave={handleColorChangeLeave}
        onMouseOver={handleColorChangeOver}
        elevation={0}
        style={{
          width: matches ? 280 : 280, // ⬅️ slightly smaller
          height: 260,               // ⬅️ smaller
          padding: "24px",
          borderRadius: 18,
          backgroundColor: bk,
          border: "0.5px solid #e0e0e0",
          transition: "all 0.3s ease",
        }}
      >
        {/* LOGO */}
        <img
          src={`${serverURL}/images/${item.logo}`}
          alt=""
          style={{
            width: 120,   // ⬅️ smaller logo
            marginBottom: 16,
          }}
        />

        {/* COMPANY NAME */}
        <div
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 8,
          }}
        >
          {item.companyname.length > 28
            ? item.companyname.substring(0, 25) + "..."
            : item.companyname}
        </div>

        {/* DESCRIPTION */}
        <div
          style={{
            fontSize: 14,
            color: "#555",
            lineHeight: 1.5,
            minHeight: 40,
          }}
        >
          {item.descripition}
        </div>

        {/* BUTTON */}
        <div style={{ marginTop: 32 }}>
          <Button
            variant={btnProps.v}
            style={{
              color: btnProps.c,
              textTransform: "capitalize",
              fontSize: 15,
              fontWeight: "bold",
              background: btnProps.bk,
            }}
          >
            View Jobs &gt;
          </Button>
        </div>
      </Paper>
    </div>
  )
}
