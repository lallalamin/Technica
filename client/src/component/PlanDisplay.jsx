// src/components/PlanDisplay.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function PlanDisplay({ plan }) {
  const {
    goal,
    targetAmount,
    timeFrame,
    income,
    currentSavings,
    generatedPlan,
    dateCreated,
  } = plan;
  
  const { monthlySavingsNeeded, suggestedBudget, advice, tailoredAdvice } = generatedPlan;

  return (
    <Box sx={{ marginTop: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h6">Generated Financial Plan</Typography>
      <Typography variant="body1">
        <strong>Goal:</strong> {goal}
      </Typography>
      <Typography variant="body1">
        <strong>Target Amount:</strong> ${targetAmount}
      </Typography>
      <Typography variant="body1">
        <strong>Time Frame:</strong> {timeFrame} months
      </Typography>
      <Typography variant="body1">
        <strong>Monthly Income:</strong> ${income}
      </Typography>
      <Typography variant="body1">
        <strong>Current Savings:</strong> ${currentSavings}
      </Typography>
      <Typography variant="body1">
        <strong>Monthly Savings Needed:</strong> ${monthlySavingsNeeded}
      </Typography>
      <Typography variant="h6" sx={{ marginTop: '20px' }}>Suggested Budget</Typography>
      <Typography variant="body1">
        <strong>Essential Expenses:</strong> {suggestedBudget.essentialExpenses.percentage}% - ${suggestedBudget.essentialExpenses.amount}
      </Typography>
      <Typography variant="body1">
        <strong>Savings for Goal:</strong> {suggestedBudget.savingsForGoal.percentage}% - ${suggestedBudget.savingsForGoal.amount}
      </Typography>
      <Typography variant="body1">
        <strong>Discretionary Spending:</strong> {suggestedBudget.discretionarySpending.percentage}% - ${suggestedBudget.discretionarySpending.amount}
      </Typography>
      <Typography variant="h6" sx={{ marginTop: '20px' }}>Advice</Typography>
      {advice.map((item, index) => (
        <Typography key={index} variant="body1">- {item}</Typography>
      ))}
      <Typography variant="h6" sx={{ marginTop: '20px' }}>Tailored Advice</Typography>
      {tailoredAdvice.map((item, index) => (
        <Typography key={index} variant="body1">- {item}</Typography>
      ))}
      <Typography variant="body2" sx={{ marginTop: '10px', fontStyle: 'italic' }}>
        Plan created on: {new Date(dateCreated).toLocaleDateString()}
      </Typography>
    </Box>
  );
}

export default PlanDisplay;
