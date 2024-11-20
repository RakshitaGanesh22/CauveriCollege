import React, { useState, useEffect, useRef } from "react";
import { Typography, Box, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PublicIcon from "@mui/icons-material/Public";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import Groups3Icon from "@mui/icons-material/Groups3";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useTheme } from "@mui/material/styles";

export default function Achievements() {
  const theme = useTheme(); // Access the theme using useTheme
  const [values, setValues] = useState({
    legacy: 0,
    honors: 0,
    endorsements: 0,
    beneficiaries: 0,
    scholars: 0,
    campuses: 0,
  });
  const [startCount, setStartCount] = useState(false); // Control when to start the count
  const targetValues = {
    legacy: 2,
    honors: 250,
    endorsements: 8,
    beneficiaries: 2500,
    scholars: 150,
    campuses: 6,
  };

  const sectionRef = useRef(null);

  // Increment values dynamically
  useEffect(() => {
    if (!startCount) return;

    const interval = setInterval(() => {
      setValues((prevValues) => {
        const updatedValues = {};
        Object.keys(prevValues).forEach((key) => {
          if (prevValues[key] < targetValues[key]) {
            updatedValues[key] = prevValues[key] + 1;
          } else {
            updatedValues[key] = prevValues[key];
          }
        });
        if (
          Object.values(updatedValues).every(
            (val, index) =>
              val === Object.values(targetValues)[index]
          )
        ) {
          clearInterval(interval); // Stop when all values reach their targets
        }
        return updatedValues;
      });
    }, 1);

    return () => clearInterval(interval);
  }, [startCount]);

  // Intersection Observer to trigger the animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true); // Start counting when the section is visible
          observer.disconnect(); // Stop observing after it's triggered
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const details = [
    {
      icon: (
        <SchoolIcon
          sx={{ fontSize: 100, marginRight: 1, color: "white" }}
        />
      ),
      value: values.legacy,
      title: "A Legacy of Educational Excellence",
    },
    {
      icon: <MilitaryTechIcon sx={{ fontSize: 100, color: "white" }} />,
      value: `${values.honors}+`,
      title: "Honors",
    },
    {
      icon: <PublicIcon sx={{ fontSize: 100, color: "white" }} />,
      value: values.endorsements,
      title: "National and Worldwide Endorsements",
    },
    {
      icon: (
        <CastForEducationIcon sx={{ fontSize: 100, color: "white" }} />
      ),
      value: `${values.beneficiaries}+`,
      title: "Beneficiary Students",
    },
    {
      icon: <Groups3Icon sx={{ fontSize: 100, color: "white" }} />,
      value: values.scholars,
      title: "Scholars and Educators",
    },
    {
      icon: (
        <AccountBalanceIcon sx={{ fontSize: 100, color: "white" }} />
      ),
      value: values.campuses,
      title: "Vast 20+ Acre Campuses",
    },
  ];

  return (
    <Box id="achievements">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        sx={{
          marginBottom: 5,
          fontWeight: "bold",
          color: "#1A4C90",
          marginTop: "3rem", // Primary color from the palette
        }}
      >
        The Cauvery Group of Institutions: A Tradition of Educational
        Excellence
      </Typography>
      <Box
        ref={sectionRef} // Attach the ref here
        sx={{
          maxWidth: "90vw",
          margin: "0 auto",
          padding: 5,
          backgroundColor: "#142D6D",
          borderRadius: 2,
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          {details.map((item) => (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
                alignItems: "center",
                margin: 2,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Use background from theme
                padding: 2,
                borderRadius: 10,
                boxShadow: 2,
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 5,
                },
              }}
              key={item.title}
            >
              <Box  sx={{ marginBottom: 1 }}>{item.icon}</Box>
              <Typography
                variant="h5"
                sx={{ color: "#F4F4F4", marginY: 0.5 }}
              >
                <Typography variant="h4" sx={{
                    color: "white", // Set text color to black
                    height: "60px", // Set the height
                    width: "300px", // Set the width (or adjust as needed)
                    borderRadius: 2, // Optional: Adjust the border radius if you want rounded corners
                    fontWeight: "bold", // Optional: Make the text bold
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 2,
                    fontSize: "1.2rem",// Optional: Add a subtle shadow
                  }}>{item.title}</Typography>
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#3498DB",
                  fontWeight: "bold",
                  letterSpacing: 1,
                  filter: "brightness(01.3)",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
