import { useState, useEffect } from "react";
import { Box, Container, Grid, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "./Footer";

import CartDetailsComponent from "./CartDetailsComponent";
import JobHightlight from "./JobHighlight";
import FAQ from "./FaqComponent";
import SimilarJobs from "./SimilarJobs";
import JobCity from "./JobCity";
import HireCity from "./HireCity";
import Popularjobs from "./PopularJobs";
import JobsByDepartment from "./JobsByDepartment";
import Links from "./Links";

import imp from "../../assets/imp.avif";
import login from "../../assets/login.png";
import afterlogin from "../../assets/afterlogin.png";

import { postData } from "../../services/FetchNodeServices";

export default function Descripition() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const reduxUser = useSelector(state => state.user);
  const localUser = localStorage.getItem("USER");
  const user = localUser ? JSON.parse(localUser) : reduxUser;

  const keys = new URLSearchParams(location.search);

  const data = {
    jobid: keys.get("jobid"),
    categoryname: keys.get("categoryname"),
    subcategoryname: keys.get("subcategoryname"),
    companyname: keys.get("companyname"),
    companyaddress: keys.get("companyaddress"),
    statename: keys.get("statename"),
    cityname: keys.get("cityname"),
    logo: keys.get("logo"),
    minsalary: keys.get("minsalary"),
    maxsalary: keys.get("maxsalary"),
    jobtype: keys.get("jobtype"),
    Experience: keys.get("Experience"),
    schedule: keys.get("schedule"),
    jobdeatails: keys.get("jobdeatails"),
    qualification: keys.get("Educationqualification"),
    benifits: keys.get("benifits"),
    worklocationcity: keys.get("worklocationcity"),
    supplementalpay: keys.get("supplementalpay"),
    applicationquestion: keys.get("applicationquestion"),
  };

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await postData("userinterface/select_all_skills", {
      skills: keys.get("skills"),
      skillid: keys.get("skillid"),
      categoryid: keys.get("categoryid"),
      subcategoryid: keys.get("subcategoryid"),
      jobid: keys.get("jobid"),
    });
    setJobs(res?.data || []);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f4f2f6", minHeight: "100vh" }}>
      <Header />

      {/* ================= MAIN CONTENT ================= */}
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 2 }}>
              <CartDetailsComponent data={data} />
            </Box>

            <Box sx={{ mb: 2 }}>
              <JobHightlight data={data} />
            </Box>

            <Box>
              <FAQ />
            </Box>
          </Grid>

          {/* RIGHT SIDEBAR (DESKTOP ONLY) */}
          {!isMobile && (
            <Grid item md={4}>
              <Box
                sx={{
                  position: "sticky",
                  top: 80,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <img
                  src={imp}
                  alt="important"
                  style={{ width: "100%", borderRadius: 10 }}
                />

                <SimilarJobs JobCart={jobs} />

                <a href="/readynextpage">
                  <img
                    src={user ? afterlogin : login}
                    alt="login"
                    style={{ width: "100%", borderRadius: 12 }}
                  />
                </a>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>

      <Divider sx={{ my: 3 }} />

      {/* ================= EXTRA SECTIONS ================= */}
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <JobCity />
          <HireCity />
          <Popularjobs />
          <JobsByDepartment />
          <Links />
        </Box>
      </Container>

      {/* ================= FOOTER ================= */}
      <Box sx={{ mt: 4 }}>
        <Footer />
      </Box>
    </Box>
  );
}
