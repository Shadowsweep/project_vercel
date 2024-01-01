import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";
import SquareWithText from "./SquareWithText";
const IntrestProp = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#EBFFFD", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000", fontSize: "35px", fontWeight: "bold" ,fontFamily: 'system-ui, sans-serif'}}
          >
            Why Choose Us 
          </Typography>
          
        </PropertiesTextBox>
        <Box
      sx={{
        display: 'flex',
        gap: '20px', 
        flexWrap: 'wrap',// Adjust the gap between the squares
      }}
    >
      <SquareWithText
        squareSize="90px"
        marginLeft="10px"
        title="Hassle-Free Searching"
        subtitle="Your one-stop real estate destination for buying, renting, and selling properties."
      />

      <SquareWithText
        squareSize="90px"
        marginLeft="10px"
        title="Hassle-Free Searching"
        subtitle="Your one-stop real estate destination for buying, renting, and selling properties."
      />
      <SquareWithText
        squareSize="80px"
        marginLeft="10px"
        title="Hassle-Free Searching"
        subtitle="Your one-stop real estate destination for buying, renting, and selling properties."
      />
      <SquareWithText
        squareSize="80px"
        marginLeft="10px"
        title="Hassle-Free Searching"
        subtitle="Your one-stop real estate destination for buying, renting, and selling properties."
      />
      <SquareWithText
        squareSize="80px"
        marginLeft="10px"
        title="Hassle-Free Searching"
        subtitle="Your one-stop real estate destination for buying, renting, and selling properties."
      />
      <SquareWithText
        squareSize="80px"
        marginLeft="10px"
        title="Hassle-Free Searching"
        subtitle="Your one-stop real estate destination for buying, renting, and selling properties."
      />
    </Box>
    
      </Container>

    </Box>
    
  );
};

export default IntrestProp;
