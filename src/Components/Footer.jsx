import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import bgImg from "../media/BuildingIllustration.png"
import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    // backgroundColor: "transparent", /* Set background to transparent */
   
     /* Remove any background images */
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "20px",
    fontFamily: 'system-ui, sans-serif',
    color: "#fff",
    fontWeight: "400",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box   sx={{
      py: 10,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})`,
      // backgroundSize: 'cover',
      backgroundSize: '100vh 100vw, cover',
      backgroundPosition: 'center',
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)', /* Add the black shadow */
    }}>
      <CustomContainer>
        {/* <CustomContainer> */}
          <Box>
            <Typography
              sx={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: "20px",
                color: "#fff",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Products
            </Typography>

            <FooterLink>Listing</FooterLink>
            <br />
            <FooterLink>Properties</FooterLink>
            <br />
            <FooterLink>Agents</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: "20px",
                color: "#fff",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Resources
            </Typography>

            <FooterLink>Our Homes</FooterLink>
            <br />
            <FooterLink>Stories</FooterLink>
            <br />
            <FooterLink>Video</FooterLink>
            <br />
            <FooterLink>Free Trial</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: "20px",
                color: "#fff",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>Partnerships</FooterLink>
            <br />
            <FooterLink>Terms of use</FooterLink>
            
           
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: "20px",
                color: "#fff",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            

            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        {/* </CustomContainer> */}
      </CustomContainer>
    </Box>
  );
};

export default Footer;
