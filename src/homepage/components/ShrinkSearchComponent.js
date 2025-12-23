import {
  TextField,
  InputAdornment,
  Button,
  Box,
  Popper
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

export default function ShrinkSearchComponent() {
  const navigate = useNavigate();

  /* ================= DATA ================= */
  const experience = [
    { expid: 0, exp: "Fresher" },
    { expid: 1, exp: "1 year" },
    { expid: 2, exp: "2 years" },
    { expid: 3, exp: "3 years" },
    { expid: 4, exp: "4 years" },
    { expid: 5, exp: "5 years" },
    { expid: 6, exp: "6 years" },
    { expid: 7, exp: "7 years" },
    { expid: 8, exp: "8 years" },
    { expid: 9, exp: "9+ years" }
  ];

  const worklocation = [
    { cityid: 1, cityname: "Mumbai" },
    { cityid: 2, cityname: "Delhi" },
    { cityid: 3, cityname: "Bangalore" },
    { cityid: 4, cityname: "Hyderabad" },
    { cityid: 5, cityname: "Chennai" },
    { cityid: 6, cityname: "Pune" }
  ];

  /* ================= STATE ================= */
  const [company, setCompany] = useState("");
  const [exp, setExp] = useState(null);
  const [city, setCity] = useState(null);

  /* ================= POPPER ================= */
  const CustomPopper = (props) => (
    <Popper {...props} placement="bottom-start" />
  );

  /* ================= SEARCH ================= */
  const handleSearch = () => {
    const params = {
      skills: company,
      exp: exp?.expid || 0,
      cityid: city?.cityid || 0,
      cityname: city?.cityname || ""
    };
    navigate(`/myfilter?${new URLSearchParams(params).toString()}`);
  };

  /* ================= COMMON INPUT STYLE ================= */
  const inputStyle = {
    backgroundColor: "#f4f2f6",
    borderRadius: "10px",
    height: 48,
    px: 1.2,
    display: "flex",
    justifyContent: "center"
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 420,
        margin: "auto",
        padding: "12px",
        background: "#fff"
      }}
    >
      <Grid container spacing={1.3}>

        {/* ===== COMPANY ===== */}
        <Grid size={12}>
          <TextField
            fullWidth
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Search jobs by 'company'"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#7f8c8d" }} />
                </InputAdornment>
              )
            }}
            sx={inputStyle}
          />
        </Grid>

        {/* ===== EXPERIENCE ===== */}
        <Grid size={12}>
          <Autocomplete
            fullWidth
            options={experience}
            value={exp}
            onChange={(e, v) => setExp(v)}
            PopperComponent={CustomPopper}
            getOptionLabel={(o) => o.exp}
            popupIcon={<KeyboardArrowDownIcon />}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Your Experience"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <WorkOutlineOutlinedIcon sx={{ color: "#7f8c8d" }} />
                    </InputAdornment>
                  )
                }}
                sx={inputStyle}
              />
            )}
          />
        </Grid>

        {/* ===== CITY ===== */}
        <Grid size={12}>
          <Autocomplete
            fullWidth
            options={worklocation}
            value={city}
            onChange={(e, v) => setCity(v)}
            PopperComponent={CustomPopper}
            getOptionLabel={(o) => o.cityname}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search for an area or city"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <RoomOutlinedIcon sx={{ color: "#7f8c8d" }} />
                    </InputAdornment>
                  )
                }}
                sx={inputStyle}
              />
            )}
          />
        </Grid>

        {/* ===== BUTTON ===== */}
        <Grid size={12}>
          <Button
            fullWidth
            onClick={handleSearch}
            sx={{
              height: 46,
              borderRadius: "8px",
              backgroundColor: "#218c74",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "15px",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#1e7d67"
              }
            }}
          >
            Search jobs
          </Button>
        </Grid>

      </Grid>
    </Box>
  );
}
