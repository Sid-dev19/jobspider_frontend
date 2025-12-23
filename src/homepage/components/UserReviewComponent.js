import invertQuote from "../../assets/inverted-quote.png"
import { Paper } from "@mui/material"
import Rating from "@mui/material/Rating"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import Stack from "@mui/material/Stack"
import ReviewScroll from "./ReviewScroll"

export default function UserReviewComponent() {

  const user_review = [
    { userreviewid: 1, username: "Mehak", userrating: 5, userpicture: "mehak.webp", userreview: "Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app." },
    { userreviewid: 2, username: "Radha Gupta", userrating: 5, userpicture: "radha.jpg", userreview: "This app is very helpful if you are looking for a job and the team is also very supportive and friendly. They guided me through every stage. It is very easy to find a job on Apna because there are a lot of job options here for everyone." },
    { userreviewid: 3, username: "Rahul", userrating: 4.5, userpicture: "rahul.jpg", userreview: "It is definitely a great app with correct and true information on the job details. I am happy to use it and I would also recommend my friends to use it." },
    { userreviewid: 4, username: "Mayank Singh Tomar", userrating: 3.5, userpicture: "mayank.webp", userreview: "Good and helpful app, even for freshers who don't have good qualifications. There are jobs for Caretakers, Househelp and many more." },
    { userreviewid: 5, username: "Prachi Shrivastva", userrating: 2.5, userpicture: "Prachi.webp", userreview: "Good and helpful app. It's very easy to find jobs here. Thank you, Apna app!" },
  ]

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: matches ? "column" : "row",
        borderRadius: 24,
        overflow: "hidden",
        margin: "40px 0",
      }}
    >

      {/* LEFT SECTION */}
      <div
        style={{
          width: matches ? "100%" : "32%",
          background: "linear-gradient(160deg, #218c74, #1e7f67)",
          padding: matches ? "40px 24px" : "60px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={invertQuote}
          alt="quote"
          style={{
            width: 70,
            height: 70,
            marginBottom: 30,
          }}
        />

        <div
          style={{
            fontSize: matches ? 22 : 28,
            fontWeight: "bold",
            fontFamily: "Ubuntu",
            color: "#fff",
            lineHeight: 1.5,
          }}
        >
          Join the community of <br />
          5 crore satisfied <br />
          job seekers
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 16,
            fontFamily: "Ubuntu",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span>Play Store Ratings</span>
          <Stack spacing={1}>
            <Rating value={5} precision={0.5} readOnly />
          </Stack>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div
        style={{
          width: matches ? "100%" : "68%",
          backgroundColor: "#f4fdf6",
          padding: matches ? "30px 12px" : "30px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <ReviewScroll data={user_review} />
      </div>
    </div>
  )
}
