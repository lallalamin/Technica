import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function CustomProgressBar({ value, goal }) {
  return (
    <Box sx={{ width: '100%', padding: '20px', textAlign: 'center', backgroundColor: '#f0f4fa', borderRadius: '10px' }}>
      <Typography variant="body1" gutterBottom>
        You are so close!
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