import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";
import SquareWithText from "./SquareWithText";
import CustomerFeedBack from "./CustomerFeedBack";
import { useState,useEffect , useRef} from "react";

const FeedBack = () => {

  //   const [position, setPosition] = useState(0);
  // const rowRef = useRef(null);

  // useEffect(() => {
  //   const cardWidth = 320; // Adjust the card width as needed
  //   const numCards = 4; // Adjust the number of cards in the row
  //   const maxPosition = -(cardWidth * numCards);

  //   const handleTransitionEnd = () => {
  //     // Reset to the beginning when it reaches the end
  //     setPosition(0);
  //   };

  //   rowRef.current.addEventListener('transitionend', handleTransitionEnd);

  //   // Cleanup event listener
  //   return () => {
  //     rowRef.current.removeEventListener('transitionend', handleTransitionEnd);
  //   };
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setPosition((prevPosition) => prevPosition - 320); // Adjust the value based on card width
  //   }, 3000); // Adjust the interval as needed

  //   return () => clearInterval(intervalId);
  // }, []);

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




  const cardStyle = {
    padding: '10px',
    boxSizing: 'border-box',
    flex: '1 0 300px', // Adjust the width of each card as needed
    margin: '0 10px', // Adjust the margin between cards as needed
  };

  const rowStyle = {
    // padding:'10px',
    display: 'flex',
    justifyContent: 'space-between', // Adjust as needed
    marginTop: '5px',
    // transform: `translateX(${position}px)`, // Update the transform property
    transition: 'transform 0.5s ease',
    flexWrap: 'nowrap', // Prevent cards from wrapping to the next line
    overflow: 'hidden', // Hide the overflow to prevent scrollbars
  };

  return (
    <Box sx={{ mt: 5, backgroundColor: "#EBFFFD", py: 10 }}>
      {/* <Container> */}
        <PropertiesTextBox>
        <Typography
    sx={{ color: "#000", fontSize: "35px",marginLeft:'5%',fontWeight: "bold" ,fontFamily: 'system-ui, sans-serif'}}
  >
    Customer Feedback
  </Typography>
          
        </PropertiesTextBox>
        <Box
    //   sx={{
    //     display: 'flex',
    //     gap: '20px', 
    //     flexWrap: 'wrap',// Adjust the gap between the squares
    //     py:10
    //   }}
    >
    

       {/* <CustomerFeedBack/> */}

       <div style={rowStyle}    >
      <CustomerFeedBack style={cardStyle} />
      <CustomerFeedBack style={cardStyle} />
      <CustomerFeedBack style={cardStyle} />
      <CustomerFeedBack style={cardStyle} />
    </div>

       




    </Box>
    
      {/* </Container> */}

    </Box>
    
  );
};

export default FeedBack;
