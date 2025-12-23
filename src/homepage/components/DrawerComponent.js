import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import Drawer from "@mui/material/Drawer";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Paper } from "@mui/material";

export default function DrawerComponent({ options, openDrawer, setOpenDrawer }) {

  const DrawerList = (
    <Paper
      elevation={0}
      style={{
        fontFamily: "Ubuntu",
        width: 280,
        position: "relative",
        paddingBottom: 20,
      }}
    >
      {/* ❌ CLOSE BUTTON */}
      <IconButton
        onClick={() => setOpenDrawer(false)}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "#555",
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* LOGO */}
      <div style={{ padding: "15px" }}>
        <img src="/spider.png" alt="logo" style={{ width: 50 }} />
      </div>

      {/* ================= JOBS ================= */}
      <Accordion disableGutters elevation={0} sx={{ boxShadow: "none", "&::before": { display: "none" } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <WorkOutlineOutlinedIcon sx={{ mr: 1, color: "#a5b1c2" }} />
            Jobs
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          {/* JOB TYPE */}
          <Accordion disableGutters elevation={0} sx={{ boxShadow: "none", "&::before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color="#a5b1c2">Jobs by type</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="#a5b1c2">Work From Home</Typography>
              <Typography color="#a5b1c2">Part Time Jobs</Typography>
              <Typography color="#a5b1c2">Freshers Jobs</Typography>
              <Typography color="#a5b1c2">Women Jobs</Typography>
              <Typography color="#a5b1c2">Full Time Jobs</Typography>
            </AccordionDetails>
          </Accordion>

          {/* JOB CITY */}
          <Accordion disableGutters elevation={0} sx={{ boxShadow: "none", "&::before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color="#a5b1c2">Jobs by city</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="#a5b1c2">Jobs in Mumbai</Typography>
              <Typography color="#a5b1c2">Jobs in Pune</Typography>
              <Typography color="#a5b1c2">Jobs in Bangalore</Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>

      {/* ================= CAREER ================= */}
      <Accordion disableGutters elevation={0} sx={{ boxShadow: "none", "&::before": { display: "none" } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <StarOutlineIcon sx={{ mr: 1, color: "#a5b1c2" }} />
            Career Compass
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#a5b1c2">Resume Builder</Typography>
          <Typography color="#a5b1c2">Cover Letter</Typography>
          <Typography color="#a5b1c2">Resume Checker</Typography>
        </AccordionDetails>
      </Accordion>

      {/* ================= OTHERS ================= */}
      <Typography sx={{ display: "flex", alignItems: "center", ml: 2, mt: 2 }}>
        <EmojiEventsIcon sx={{ mr: 1, color: "#a5b1c2" }} />
        Contests
      </Typography>

      <Typography sx={{ display: "flex", alignItems: "center", ml: 2, mt: 1 }}>
        <SchoolOutlinedIcon sx={{ mr: 1, color: "#a5b1c2" }} />
        Degree
      </Typography>

      <Typography sx={{ display: "flex", alignItems: "center", ml: 2, mt: 1 }}>
        <NotificationsNoneIcon sx={{ mr: 1, color: "#a5b1c2" }} />
        Free Job Alerts
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography sx={{ display: "flex", alignItems: "center", ml: 2 }}>
        <LocalPhoneOutlinedIcon sx={{ mr: 1, color: "#a5b1c2" }} />
        Contact Us
      </Typography>

      <Typography sx={{ display: "flex", alignItems: "center", ml: 2, mt: 1 }}>
        <FileDownloadOutlinedIcon sx={{ mr: 1, color: "#a5b1c2" }} />
        Download App
      </Typography>

      {/* ================= LOGIN ================= */}
      <Accordion defaultExpanded disableGutters elevation={0} sx={{ boxShadow: "none", "&::before": { display: "none" } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <PersonOutlinedIcon sx={{ mr: 1, color: "#a5b1c2" }} />
            Login
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#a5b1c2">Candidate</Typography>
          <Typography color="#a5b1c2">Employer</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );

  return (
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
