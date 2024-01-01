import { Button, styled } from "@mui/material";
import React from "react";
import LabelIcon from '@mui/icons-material/Label'

const NewButton = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const NewButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: '#000',
    fontWeight: "600",
    fontFamily: 'system-ui, sans-serif',
    // color: "#000",
    // fontWeight: "400",,
    fontSize:'20px',
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    marginLeft:"100",
    margin: '10px 10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
    border: "2px solid transparent",
    borderColor: "yellow",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <NewButton>

     {buttonText}</NewButton>;
};

export default NewButton;
