import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function CustomProgressBar({ value, goal, targetAmount, currentSavings, purpose }) {

  const getProgressMessage = () => {
    if (value < 10) {
      return "Just getting started, keep pushing!";
    } else if (value < 30) {
      return "You’re making progress, stay motivated!";
    } else if (value < 50) {
      return "Good job! You're almost halfway there!";
    } else if (value < 70) {
      return "Great work, more than halfway there!";
    } else if (value < 90) {
      return "You’re so close, just a little more effort!";
    } else if (value < 100) {
      return "Almost there, finish strong!";
    } else {
      return "Congratulations! You’ve reached your goal!";
    }
  };

  return (
    <Box sx={{ width: '100%', padding: '20px', textAlign: 'center', backgroundColor: '#f0f4fa', borderRadius: '10px' }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        {purpose}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {getProgressMessage()}
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: '10px' }}>
        Current Savings: ${currentSavings.toLocaleString()} / Target: ${targetAmount.toLocaleString()}
      </Typography>
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: '90%', margin: 'auto' }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: '20px',
            borderRadius: '10px',
            backgroundColor: 'white',
            flexGrow: 1,
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#FFBB28', // Customize the progress color
            },
          }}
        />
        <Box sx={{ position: 'absolute', right: '-30px', display: 'flex', alignItems: 'center' }}>
          <EmojiEventsIcon sx={{ color: 'black' }} />
          <Typography variant="body2" sx={{ marginLeft: '5px' }}>
            Goal
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomProgressBar;
