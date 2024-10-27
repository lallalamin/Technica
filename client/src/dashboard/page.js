// src/dashboard/page.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, List, ListItem} from '@mui/material';
import PieChart from './piechart';
import DailyTip from '../component/DailyTip';
import ProgressBar from '../component/ProgressBar';

const data = [
  { name: 'Food', value: 9 },
  { name: 'Gas', value: 16 },
  { name: 'Electricity', value: 20 },
  { name: 'Rent', value: 55 },
];

const budgetItems = [
  { label: 'Income', amount: '$1000' },
  { label: 'Food', amount: '-$100' },
  { label: 'Gas', amount: '-$100' },
  { label: 'Electricity', amount: '-$50' },
  { label: 'Rent', amount: '-$400' },
  { label: 'List Item', amount: '$100+' },
];

const progressValue = 20;

function Dashboard() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f0f4fa', minHeight: '100vh', maxWidth: '100%'}}>
      {/* Progress Bar Section */}  
      <ProgressBar value={progressValue} goal={100} />

      {/* Daily Tip Section */}
      <DailyTip />
      <Grid container spacing={3}>
        {/* Budget Tracking Section */}
        <Grid item xs={12} md={6}>
      <Card sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', maxHeight: '400px' }}>
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: 'center', backgroundColor: '#E6E6FA', padding: '10px' }}>
            Budget Track
          </Typography>
          <Box sx={{ padding: '20px', maxHeight: '200px', overflow: 'auto' }}>
            <List>
              {budgetItems.map((item, index) => (
                <ListItem key={index} disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontWeight: 'bold' }}>{item.label}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{item.amount}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: 'block',
              margin: '20px auto',
              backgroundColor: '#2E46CD',
              '&:hover': { backgroundColor: '#1E3AA1' },
            }}
          >
            Add
          </Button>
        </CardContent>
      </Card>
    </Grid>

        {/* D3 Pie Chart Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: '20px', textAlign: 'center', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" gutterBottom>
              Your Monthly Expenses
            </Typography>
            <PieChart data={data} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
