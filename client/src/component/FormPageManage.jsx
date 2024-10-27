// src/components/ForrmPageManage.js
import React, { useState, useEffect } from 'react';
import GoalForm from './GoalForm';
import { Box, Typography } from '@mui/material';
import GeneratePlan from './GeneratePlan';
import PlanDisplay from './PlanDisplay';

function FormPageManage() {
  const [formData, setFormData] = useState(null);

  const userId = 12345;
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

//   const handleFormSubmit = async (formData) => {
//     setLoading(true);
//     try {
//       const generatedPlan = await fetch('http://localhost:5000/api/plan');

//       if (!generatedPlan.ok) {
//         throw new Error('Failed to generate plan');
//       }
//       const generatedPlanJson = await generatedPlan.json();
//       setPlan(generatedPlanJson);
//       console.log('Generated plan:', generatedPlanJson);
      
//     } catch (error) {
//       console.error('Error generating plan:', error);
//     } finally {
//       setLoading(false);
//     }
//   };


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

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    setFormData(data);
  };

  return (
    <Box sx={{ padding: '20px', minHeight: '100vh', marginTop: '80px' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Financial Goal Planner
      </Typography>
      <GoalForm onSubmit={handleFormSubmit} />
      {formData && <GeneratePlan formData={formData} />}
      {plan && <PlanDisplay plan={plan} />}
    </Box>
  );
}

export default FormPageManage
