import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import houseCard from "../media/houseCard.png";
import BlogCard from "./CardComponent";
import { useState,useEffect , useRef} from "react";
import "./marquee.css"


const Details = () => {
  
 

 
  // const [position, setPosition] = useState(0);

  // useEffect(() => {
  //   const cardWidth = 320; // Adjust the card width as needed
  //   const numCards = 4; // Adjust the number of cards in the row
  //   const maxPosition = -(cardWidth * numCards);

  //   const intervalId = setInterval(() => {
  //     setPosition((prevPosition) => {
  //       const newPosition = prevPosition - cardWidth;

  //       // Reset to the beginning when it reaches the end
  //       return newPosition < maxPosition ? 0 : newPosition;
  //     });
  //   }, 3000); // Adjust the interval as needed

  //   return () => clearInterval(intervalId);
  // }, []);
  // const CustomBox = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   gap: theme.spacing(10),
  //   alignItems: "center",
  //   [theme.breakpoints.down("md")]: {
  //     flexDirection: "column",
  //     textAlign: "center",
  //   },
  // }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  // const cardStyle = {
  //   padding: '10px', // Adjust the padding as needed
  //   boxSizing: 'border-box', // Include padding in the element's total width and height
  //   flex: '1 0 100%', // Allow cards to take up full width on smaller screens
  //   transition: 'transform 0.5s ease', 
  //   maxWidth: '300px', // Limit the maximum width of cards
  // };

  // const rowStyle = {
  //   // Allow cards to wrap to the next line on smaller screens
  //   justifyContent: 'space-between', // You can change this to 'space-around' or 'space-evenly' for different spacing options
  //   marginTop: '5px',
    
  //   display: 'flex',
  //   // transition: 'transform 0.5s ease', // CSS transition for smooth movement
  //   // transform: isHovered ? 'translateX(0)' : 'translateX(-100%)', // Move the row
  //   flexWrap: 'wrap', 
  //   overflowX: 'auto', // Enable horizontal scrolling
  //   whiteSpace: 'nowrap', 
  // };


  // Yahi chala hia abhi 
  // const cardStyle = {
  //   padding: '10px',
  //   boxSizing: 'border-box',
  //   flex: '1 0 300px', // Adjust the width of each card as needed
  //   transition: 'transform 0.5s ease',
  //   margin: '0 10px', // Adjust the margin between cards as needed
  // };

  // const rowStyle = {
  //   display: 'flex',
  //   justifyContent: 'space-between', // Adjust as needed
  //   marginTop: '5px',
  //   transform: `translateX(${position}px)`, // Update the transform property
  //   transition: 'transform 0.5s ease',
  //   flexWrap: 'nowrap', // Prevent cards from wrapping to the next line
  //   overflowX: 'hidden', // Hide the overflow to prevent scrollbars
  // };


  const cardStyle = {
    padding: '10px',
    boxSizing: 'border-box',
    flex: '1 0 300px', // Adjust the width of each card as needed
    margin: '0 10px', // Adjust the margin between cards as needed
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Adjust as needed
    marginTop: '5px',
    // transform: `translateX(${position}px)`, // Update the transform property
    transition: 'transform 0.5s ease',
    flexWrap: 'nowrap', // Prevent cards from wrapping to the next line
    overflow: 'hidden', // Hide the overflow to prevent scrollbars
  };

  return (

    <Box><Typography
    sx={{ color: "#000", fontSize: "35px",marginLeft:'5%',fontWeight: "bold" ,fontFamily: 'system-ui, sans-serif'}}
  >
    Blog
  </Typography>
    <Box sx={{ py: 10 }}>
      {/* <Container> */}
        

        <div style={rowStyle} className="marquee" >
      <BlogCard style={cardStyle} />
      <BlogCard style={cardStyle} />
      <BlogCard style={cardStyle} />
      <BlogCard style={cardStyle} />
    </div>


        <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>2500+</LargeText>
            <SmallText>Homes For Sale</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3000+</LargeText>
            <SmallText>Properties Rented</SmallText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3000+</LargeText>
            <SmallText>Properties Rented</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3500+</LargeText>
            <SmallText>Homes Sold</SmallText>
          </Box>
        </TextFlexbox>
        
      {/* </Container> */}
    </Box>
    </Box>
  );
};

export default Details;
