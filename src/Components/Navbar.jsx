import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logol.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faDollarSign ,faBuilding} from '@fortawesome/free-solid-svg-icons';

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { LinkOffTwoTone } from "@mui/icons-material";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Features", "Services", "Listed", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  // const NavLink = styled(Typography)(({ theme }) => ({
  //   fontSize: "25px",
  //   fontFamily: 'system-ui, sans-serif',
  //   color: "#000",
  //   fontWeight: "400",
  //   cursor: "pointer",
  //   "&:hover": {
  //     backgroundColor: "#E6F0FF",
      
  //   },
  // }));

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: '25px',
    fontFamily: 'system-ui, sans-serif',
    color: '#000',
    fontWeight: '400',
    cursor: 'pointer',
    position: 'relative',
    "&:hover": {
      backgroundColor: '#E6F0FF',
      "&:before": {
        content: '""',
        position: 'absolute',
        left: '-20px', // Adjust the position as needed
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '20px',
        color: theme.palette.primary.main, // Change the color as needed
      },
    },
  }));
  

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    backgroundColor: '#fff',
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
    width: '100vw',
    height: '80px',
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    // marginRight: '10px',
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (

    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
            // style={{backgroundColor:'#000'}}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={logoImg} alt="logo" style={{height:'60px'}} />
        </Box>

        <NavbarLinksBox>
          
          <NavLink variant="body2">
          <FontAwesomeIcon icon={faHome} style={{fontSize:'20px'}} />
       
            Home</NavLink>
          <NavLink variant="body2">
          <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '20px' }} />
      
            For Sale</NavLink>
          <NavLink variant="body2">
          {/* <FontAwesomeIcon icon={faBuilding} style={{ fontSize: '20px' }} /> */}
      
            For Rent</NavLink>
          <NavLink variant="body2">For investment</NavLink>
          <NavLink variant="body2">Blog</NavLink>
          <NavLink variant="body2">Sign in </NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {/* <NavLink variant="body2"   >Sign Up</NavLink> */}
        <CustomButton
          backgroundColor="#F7B501"
          color="#fff"
          // style ={{fontFamily: 'system-ui, sans-serif',
          // fontWeight: "bold",}}
          buttonText="Add Listing"
        />
        



      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
