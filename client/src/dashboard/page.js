// src/dashboard/page.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import PieChart from './piechart';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const data = [
  { name: 'Food', value: 9 },
  { name: 'Gas', value: 16 },
  { name: 'Electricity', value: 20 },
  { name: 'Rent', value: 55 },
];

function Dashboard() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f0f4fa', minHeight: '100vh' }}>
      <Grid container spacing={3}>
        {/* Budget Tracking Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ border: '1px solid #2E46CD', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ textAlign: 'center', backgroundColor: '#E6E6FA', padding: '10px' }}>
                Budget Track
              </Typography>
              <Box sx={{ padding: '20px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li>Income - $1000</li>
                  <li>Food - -$100</li>
                  <li>Gas - -$100</li>
                  <li>Electricity - -$50</li>
                  <li>Rent - -$400</li>
                  <li>List Item - $100+</li>
                </ul>
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
          <Card sx={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Your Monthly Expenses
            </Typography>
            <PieChart data={data} />
          </Card>
        </Grid>

        {/* Daily Tip Section */}
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TipsAndUpdatesIcon sx={{ color: '#F1D76E', marginRight: '15px' }} />
               Daily Tip!
            </Typography>
            <Typography variant="body1" sx={{ color: '#5f6368' }}>
              Pay yourself first by setting aside a portion of your income for savings before spending on anything else.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
