import { serverURL } from "../../services/FetchNodeServices"
import { Button, Paper } from "@mui/material"
import { useState } from "react"
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function TrendingJobs({ item, colors }) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const [bk, setBk] = useState("#f1f2f6")
  const [move, setMove] = useState("text")
  const [color, setColor] = useState('')
  const [btnProps, setBtnProps] = useState({
    v: "text",
    bk: '#f1f2f6',
    c: "#b03a84",
    brc: '#f1f2f6'
  })

  const handleColorChangeOver = () => {
    setBk("#ffff")
    setColor(colors)
    setMove("textMove")
    setBtnProps({
      v: 'contained',
      bk: colors,
      c: '#ffff',
      brc: colors
    })
  }

  const handleColorChangeLeave = () => {
    setBk("#f1f2f6")
    setMove("text")
    setBtnProps({
      v: 'text',
      bk: "#f1f2f6",
      c: '#b03a84',
      brc: '#f1f2f6'
    })
  }

  return (
    <Paper
      onMouseLeave={handleColorChangeLeave}
      onMouseOver={handleColorChangeOver}
      elevation={0}
      style={{
        width: 300,
        height: 260,
        margin: matches ? 0 : 15,
        marginBottom: matches ? 15 : '',
        padding: '24px 18px',
        borderRadius: "18px",
        position: "relative",
        overflow: "hidden", // ✅ MAIN FIX
        background: `linear-gradient(0deg,${btnProps.bk} -80%, rgba(255,250,250,0.9) 83%)`,
        border: `0.5px solid ${btnProps.brc}`
      }}
    >
      {/* TEXT */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 16, color: "#7f8c8d" }}>
          {`Trending @ #${item.trending}`.toUpperCase()}
        </div>

        <div
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 28,
            marginBottom: 8
          }}
        >
          {item.jobtype}
        </div>

        <div
          style={{ color: "transparent", WebkitTextStroke: "0.3px gray" }}
          className={move}
        >
          {item.jobtype}
        </div>
      </div>

      {/* BUTTON */}
      <div style={{ marginTop: 35 }}>
        <Button
          variant={btnProps.v}
          style={{
            color: btnProps.c,
            textTransform: 'capitalize',
            fontSize: 16,
            fontWeight: "bold",
            background: btnProps.bk
          }}
        >
          View All &gt;
        </Button>
      </div>

      {/* IMAGE – fully inside card */}
      <img
        src={`${serverURL}/images/${item.picture}`}
        alt=""
        style={{
          width: 150,          // ⬅️ reduced
          height: 160,
          position: "absolute",
          right: 0,            // ⬅️ no negative
          bottom: 0,           // ⬅️ stick inside
          borderBottomRightRadius: '18px',
          zIndex: 2
        }}
      />
    </Paper>
  )
}
