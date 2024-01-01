import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SquareWithText = ({ squareSize, marginLeft, title, subtitle }) => {
  return (
    <Box
      sx={{
        width: '100%', // Full width on small screens
        maxWidth: '550px', // Adjust the width for larger screens
        height: 'auto', // Auto height for responsiveness
        backgroundColor: '#fff',
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, row on larger screens
        alignItems: 'center', // Center items vertically
        padding: '20px', // Add padding for better visual appeal
        textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens, align left on larger screens
      }}
    >
      <Box
        sx={{
          width: squareSize,
          height: squareSize,
          backgroundColor: 'black',
          borderRadius: '15%',
          margin: { xs: '0 auto 10px', sm: '0 10px 0 0' }, // Center on small screens, add margin on larger screens
        }}
      />
      <Box
        sx={{
          marginLeft: { xs: '0', sm: marginLeft }, // Adjust the space between the square and text
        }}
      >
        <Typography
          sx={{ fontSize: { xs: '18px', sm: '20px' }, color: '#5A6473', fontFamily: 'system-ui, sans-serif', fontWeight: 'bold' }}
        >
          {title}
        </Typography>

        <Typography
          sx={{ fontSize: { xs: '14px', sm: '16px' }, color: '#5A6473', fontFamily: 'system-ui, sans-serif', marginTop: '8px' }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default SquareWithText;
