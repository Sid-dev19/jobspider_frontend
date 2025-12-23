import Image from "./Image";
import ApplyDetails from "./ApplyDetails";
import { Box, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router-dom";

export default function ApplyForms() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const jobData = location?.state?.data;

  if (!jobData) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f1f2f6",
        }}
      >
        No job data available
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f1f2f6",
        py: { xs: 2, md: 4 },
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* LEFT IMAGE (DESKTOP ONLY) */}
          {!isMobile && (
            <Grid item md={4}>
              <Box
                sx={{
                  position: "sticky",
                  top: 100,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ maxWidth: 360, width: "100%" }}>
                  <Image job={jobData} />
                </Box>
              </Box>
            </Grid>
          )}

          {/* RIGHT FORM */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                maxWidth: 720,
                mx: "auto",
                backgroundColor: "#ffffff",
                borderRadius: 3,
                p: { xs: 2, sm: 3, md: 4 },
                boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
              }}
            >
              <ApplyDetails job={jobData} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
