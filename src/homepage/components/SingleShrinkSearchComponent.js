import {
  InputAdornment,
  TextField,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SingleShrinkSearchComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [focused, setFocused] = useState(false);

  const handleNavigate = () => {
    setFocused(true);
    setTimeout(() => {
      navigate("/shrinkSearchComponent");
    }, 250);
  };

  return (
    <Grid container justifyContent="center">
      <Box
        sx={{
          width: focused
            ? isMobile
              ? "96%"
              : "72%"
            : isMobile
            ? "94%"
            : "52%",
          transition: "all 0.35s ease",
          transform: focused ? "scale(1.03)" : "scale(1)",
        }}
      >
        <TextField
          fullWidth
          variant="standard"
          placeholder="Search by city, job title, experience"
          onFocus={() => setFocused(true)}
          onClick={handleNavigate}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    fontSize: 26,
                    color: focused ? "#6C4AB6" : "#888",
                    transition: "0.3s",
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            background: "#F6F4FA",
            borderRadius: "16px",
            padding: "14px 20px",
            border: focused
              ? "2px solid #6C4AB6"
              : "1px solid #d0cde1",
            boxShadow: focused
              ? "0px 10px 34px rgba(108,74,182,0.28)"
              : "0px 6px 18px rgba(0,0,0,0.10)",
            transition: "all 0.35s ease",
            cursor: "pointer",

            "&:hover": {
              boxShadow:
                "0px 8px 26px rgba(108,74,182,0.20)",
            },

            "& input": {
              fontSize: "15.5px",
              fontFamily: "Ubuntu",
              paddingLeft: "6px",
              cursor: "pointer",
            },

            "& ::placeholder": {
              color: "#777",
              opacity: 1,
            },
          }}
        />
      </Box>
    </Grid>
  );
}
