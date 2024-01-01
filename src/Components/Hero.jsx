import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";
import NewButton from "./NewButton";
import { useState } from "react";
import SearchButton from "./SearchButton";

const Hero = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Perform the search using the searchTerm
    console.log('Searching for:', searchTerm);
    // You can add your search logic here, such as making an API call or updating the state.
  };

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    maxWidth:'100vw'
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ 
      backgroundColor:'#fff',
    //  "#E6F0FF",
      minHeight: "80vh" ,maxWidth:'100'}}>
      {/* <Navbar /> */}
      {/* <Container> */}
      {/* <Navbar /> */}
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              
            </Typography>
            <Title variant="h2" 
  style={{marginLeft:'20%' ,fontFamily: 'system-ui, sans-serif',
  '@media (max-width: 768px)': {
    marginLeft: '0', // Reset the margin for smaller screens
    textAlign: 'center', // Center the text on smaller screens
    
  },
}}
                      >
            Discover Your Dream Home
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "23px", color: "#5A6473", my: 4 ,marginLeft:'20%', fontFamily: 'system-ui, sans-serif',
              '@media (max-width: 768px)': {
                marginLeft: '0', // Reset the margin for smaller screens
                textAlign: 'center', // Center the text on smaller screens
                alignItems:'center',
                display:'flex'
              },}}
            >
              Your one-stop real estate destination for buying, renting, and selling properties.
            </Typography>
            {/* <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            /> */}
           
            
          

          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" ,maxHeight: "70%" }}
            />
          </Box>
          
        </CustomBox>
        <Box style={{
  display: 'flex',
  justifyContent: 'center',
  padding: '1%',
  backgroundColor: '#F2F2F2',
  width: '80%',
  margin: '0 auto',
  alignItems: 'center',
  boxShadow: '0px -5px 10px rgba(0, 0, 0, 0.2)',
  flexWrap: 'wrap', // Allow items to wrap to the next line

  '@media (min-width: 768px)': {
    flexDirection: 'row', // Stack items horizontally on larger screens
    maxWidth: '1200px',
  },
}}>
            <CustomButton
             backgroundColor="#F7B501"
             color="#fff"
              buttonText="For Sale"
              heroBtn={true}
              style={{ marginLeft: '100px' }} // Adjust the spacing as needed
            />
          
            <NewButton
              backgroundColor="#F7B501"
              color="#fff"
              buttonText="For rent"
              heroBtn={true}
             // Adjust the spacing as needed
            />
          
            <NewButton
              backgroundColor="#F7B501"
              color="#fff"
              buttonText="For investment"
              heroBtn={true}
            />

           <input
          type="text"
          placeholder="Enter your search term"
            value={searchTerm}
           onChange={handleInputChange}
           style={{
            height: '50px',
            width :'250px',
            borderRadius: '10px',
            outlineColor: 'yellow', // Set the outline color to yellow
            borderColor: 'yellow',
            // backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent white background
            paddingLeft: '10px',
            marginRight: '10px'
            ,marginBottom: '10px'
          }}
           
        />
      <SearchButton 
      backgroundColor="#F7B501"
      color="#fff"
      buttonText="Search"
      heroBtn={true}
      onClick={handleSearchClick}/>

          </Box>
      {/* </Container> */}
    </Box>
  );
};

export default Hero;
