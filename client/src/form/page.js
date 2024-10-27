// src/pages/FormPage.js
import React from 'react';
import GoalForm from '../component/GoalForm';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function page() {
  //const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Here, you can perform additional actions, such as saving the data to a server
    // or generating a savings plan for the user.
    
    // Navigate back to the dashboard or a different page after submission
  };

  return (
    <Box sx={{ padding: '20px', minHeight: '100vh', marginTop: '80px' }}>
      <GoalForm onSubmit={handleFormSubmit} />
    </Box>
  );
}

export default page;
