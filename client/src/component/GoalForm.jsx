// src/components/GoalForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function GoalForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    goal: '',
    targetAmount: '',
    timeFrame: '',
    income: '',
    currentSavings: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass formData to the parent component via onSubmit prop
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
    >
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Your Savings Goal
      </Typography>
      <TextField
        label="What are you saving for?"
        name="goal"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.goal}
        onChange={handleChange}
        required
      />
      <TextField
        label="Target Amount ($)"
        name="targetAmount"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.targetAmount}
        onChange={handleChange}
        required
      />
      <TextField
        label="Time Frame (months)"
        name="timeFrame"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.timeFrame}
        onChange={handleChange}
        required
      />
      <TextField
        label="Monthly Income ($)"
        name="income"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.income}
        onChange={handleChange}
        required
      />
      <TextField
        label="Current Savings ($)"
        name="currentSavings"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.currentSavings}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: '20px' }}
      >
        Generate Plan
      </Button>
    </Box>
  );
}

export default GoalForm;
