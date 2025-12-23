import React, { useEffect, useState } from "react"
import { Divider } from "@mui/material"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SearchBarComponent from "./components/SearchBarComponent"
import TrendingJobsComponent from "./components/TrendingJobsComponent"
import ScrollComponent from "./components/ScrollComponent"
import UserReviewComponent from "./components/UserReviewComponent"
import SpiderComponent from "./components/SpiderComponent"
import TwoPeopleHireComponent from "./components/TwoPeopleHireComponent"
import UpdateScroll from "./components/UpdateScroll"
import GetResumeHelp from "./components/GetResumeHelp"
import JobCity from "./components/JobCity"
import HireCity from "./components/HireCity"
import PopularJobs from "./components/PopularJobs"
import JobsByDepartment from "./components/JobsByDepartment"
import Links from "./components/Links"

import { getData } from "../services/FetchNodeServices"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

export default function CreateAccountFirst() {
  const [topCompanies, setTopCompanies] = useState([])
  const [trendingJobs, setTrendingJobs] = useState([])

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const update = [
    { userimage: "sid.jpg", message: "Siddharth got job 6 hours ago" },
    { userimage: "mayank.webp", message: "Vidhi Sharma 6 hours ago" },
    { userimage: "Prachi.webp", message: "Kuldeep Singh got job 2 hours ago" },
    { userimage: "Rahul.jpg", message: "rahul got job 4 hours ago" },
  ]

  const color = ["#e67e22", "#ffeaa7", "#fd79a8", "#74b9ff", "#2ecc71"]

  useEffect(() => {
    fetchTopCompanies()
    fetchTrendingJobs()
  }, [])

  const fetchTopCompanies = async () => {
    const res = await getData("userinterface/user_top_company_display")
    setTopCompanies(res.data)
  }

  const fetchTrendingJobs = async () => {
    const res = await getData("userinterface/trending_jobs")
    setTrendingJobs(res.data)
  }

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* HEADER */}
      <Header />

      {/* SEARCH */}
      <div style={{ width: "100%" }}>
        <SearchBarComponent />
      </div>

      <Divider />

      {/* TRENDING JOBS */}
      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: isMobile ? "40px 0" : "60px 0",
        }}
      >
        <div style={{ width: isMobile ? "100%" : "90%" }}>
          <TrendingJobsComponent items={trendingJobs} colors={color} />
        </div>
      </section>

      {/* TOP COMPANIES */}
      <section
        style={{
          width: "100%",
          background: "#DFF2EB",
          padding: isMobile ? "40px 0" : "80px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: isMobile ? 22 : 32, fontWeight: "bold" }}>
          Job Openings in Top Companies
        </h2>

        <div style={{ width: isMobile ? "95%" : "90%", marginTop: 30 }}>
          <ScrollComponent data={topCompanies} />
        </div>
      </section>

      {/* USER REVIEWS */}
      <section style={{ marginTop: 80 }}>
        <UserReviewComponent />
      </section>

      {/* SPIDER */}
      <section style={{ marginTop: 80, display: "flex", justifyContent: "center" }}>
        <SpiderComponent />
      </section>

      {/* HIRING */}
      <section style={{ marginTop: 80, display: "flex", justifyContent: "center" }}>
        <TwoPeopleHireComponent />
      </section>

      {/* LIVE UPDATES */}
      <section style={{ marginTop: 80 }}>
        <h2
          style={{
            fontSize: isMobile ? 26 : 42,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Trending Job Updates on Spider
        </h2>
        <UpdateScroll items={update} />
      </section>

      {/* RESUME HELP */}
      <section style={{ marginTop: 80 }}>
        <GetResumeHelp />
      </section>

      {/* CITIES & LINKS */}
      <section
        style={{
          width: "100%",
          background: "rgb(244,242,246)",
          padding: "60px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
        }}
      >
        <div style={{ width: isMobile ? "95%" : "80%" }}><JobCity /></div>
        <div style={{ width: isMobile ? "95%" : "80%" }}><HireCity /></div>
        <div style={{ width: isMobile ? "95%" : "80%" }}><PopularJobs /></div>
        <div style={{ width: isMobile ? "95%" : "80%" }}><JobsByDepartment /></div>
        <div style={{ width: isMobile ? "95%" : "80%" }}><Links /></div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
