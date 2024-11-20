import React, { useState } from "react";
import principal from "../asset/principal.jpeg";
import { Typography, Box, useMediaQuery, Button } from "@mui/material";
import { Fade, Slide, Zoom } from "react-reveal";

const Principal = () => {
  const [showAllAchievements, setShowAllAchievements] = useState(false); // State to control the visibility of the full list
  const isMobile = useMediaQuery("(max-width:768px)");

  const achievements = [
    "Recipient of the prestigious Zilla Kannada Rajyotsava Award and Kannada Kalpatharu Award for excellence in education.",
    "Founder and President of Bright Education Trust® and Bright PU College, K.R. Nagara.",
    "Nearly two decades of experience as a Lecturer and Principal in reputed residential PU Colleges.",
    "Former General Secretary of the Karnataka State PU College Principals Association® (Mandya Unit).",
    "NEET Coordinator at Karnataka Examinations Authority (KEA).",
    "Resource person for online CET coaching on Chandana TV and member of the CET Key Answer Committee at KEA.",
    "Contributed as a member of the inspection committee for new PU Colleges in Karnataka.",
    "Conducted postgraduate-level teaching for M.Sc. students at Manasa Gangotri, University of Mysore.",
    "Taught Chemistry to over 25,000 students who excel in diverse fields globally.",
    "28+ years of teaching and administrative experience across renowned institutions in Karnataka.",
    "Former Principal of VV Degree and PU College, Bangalore, and Regional Manager/Administrator at Excel Academics, Bangalore.",
    "Coached students for CET, NEET, and JEE, producing 100+ doctors, 10,000 engineers, and civil servants.",
    "Addressed and inspired over 15,000 students through motivational sessions across Karnataka.",
  ];

  return (
    <>
      <Fade top>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            marginBottom: 5,
            fontWeight: "bold",
            color: "#1A4C90",
            marginTop: "3rem",
          }}
        >
          Our Principal
        </Typography>
      </Fade>

      <Box
        sx={{
          background: "#142D6D",
          padding: { xs: 3, md: 6 },
          borderRadius: "16px",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Principal Image with Enhanced Styling */}
        <Slide left>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 4,
              position: "relative",
            }}
          >
            <img
              src={principal}
              alt="principal"
              style={{
                width: isMobile ? "100%" : "60%",
                borderRadius: "16px",
                objectFit: "cover",
                filter: "brightness(1.1)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(45deg, #FE6E32 ,#142D6D)",
                padding: { xs: "8px 16px", sm: "12px 24px" },
                borderRadius: "50px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                textAlign: "center",
              }}
            >
              Excellence in Education
            </Box>
          </Box>
        </Slide>

        {/* Principal Info Section */}
        <Zoom>
          <Box
            sx={{
              textAlign: "center",
              background: "linear-gradient(90deg, #F6F6F6, #C6D8FE)",
              color: "#142D6D",
              borderRadius: "16px",
              padding: 4,
              marginBottom: 4,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", marginBottom: 1, color: "#142D6D" }}
            >
              N. R. Chandrashekara
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "medium", marginBottom: 1, color: "#FE6E32" }}
            >
              M.Sc, M.Phil, Chemistry
            </Typography>
            <Typography variant="body1">
              Principal/Director, Cauvery Excellence PU College
            </Typography>
          </Box>
        </Zoom>

        {/* Achievements Section */}
        <Fade bottom>
          <Box
            sx={{
              marginTop: 6,
              padding: { xs: 2, md: 4 },
              background: "linear-gradient(120deg, #0A4DF6, #C6D8FE)",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 4,
                color: "#fff",
              }}
            >
              Achievements and Contributions
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 3,
              }}
            >
              {achievements.slice(0, showAllAchievements ? achievements.length : 6).map((achievement, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    background: "linear-gradient(145deg, #F6F6F6, #C6D8FE)",
                    color: "#142D6D",
                    padding: 2,
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    fontSize: "1rem",
                    fontWeight: "medium",
                    textAlign: "left",
                  }}
                >
                  {achievement}
                </Typography>
              ))}
            </Box>

            {/* Read More / Show Less Button */}
            <Button
              onClick={() => setShowAllAchievements(!showAllAchievements)}
              sx={{
                display: "block",
                margin: "auto",
                backgroundColor: "#FE6E32",
                color: "#fff",
                padding: "8px 20px",
                fontWeight: "bold",
                borderRadius: "50px",
                marginTop: 3,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#142D6D",
                },
              }}
            >
              {showAllAchievements ? "Show Less" : "Read More"}
            </Button>
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default Principal;
