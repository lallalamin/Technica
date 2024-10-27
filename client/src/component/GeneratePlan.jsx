// src/component/GeneratePlan.jsx
import React, { useState, useEffect } from 'react';
import AddGoalForm from '../component/GoalForm';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
//import { generatePlan } from '../service/OpenAIService';
import PlanDisplay from './PlanDisplay';

const userId = 12345
function GeneratePlan({ formData }) {
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

useEffect(() => {
    const fetchPlan = async () => {
      setLoading(true);
      setError(null);
    
      try {
        const response = await fetch(`http://localhost:5000/api/plan/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch plan');
        }

        const fetchedPlan = await response.json();
        console.log('Fetched plan:', fetchedPlan);
        setPlan(fetchedPlan[0]);
      } catch (err) {
        console.error('Error fetching plan:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchPlan(); // Fetch the plan when userId is available
    }
  }, [userId]);

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f0f4fa', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Financial Goal Planner
      </Typography>
      {/* <AddGoalForm /> */}
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {plan && <PlanDisplay plan={plan} />} {/* Render the PlanDisplay component if plan is available */}
    </Box>
  );
}

export default GeneratePlan;





