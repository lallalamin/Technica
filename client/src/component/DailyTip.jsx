import React from 'react'
import { Grid, Card, Typography } from '@mui/material'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const tips = [
    "Pay yourself first by setting aside a portion of your income for savings before spending on anything else.",
    "Automate your savings to make building wealth a habit, not an afterthought.",
    "Avoid lifestyle inflation; keep your expenses in check even when your income increases.",
    "Start investing early to maximize the benefits of compound interest over time.",
    "Build an emergency fund with at least 3-6 months' worth of living expenses.",
    "Use the 50/30/20 rule for budgeting: 50% for needs, 30% for wants, and 20% for savings.",
    "Pay off high-interest debt as soon as possible to reduce the overall cost of borrowing.",
    "Track your expenses regularly to identify areas where you can cut back and save more.",
    "Diversify your investment portfolio to spread risk and improve long-term returns.",
    "Set specific financial goals to stay motivated and keep your spending in check.",
    "Take advantage of employer-matching contributions in retirement plans like a 401(k).",
    "Avoid emotional investing; stick to your financial plan even during market fluctuations.",
    "Review your insurance policies regularly to ensure adequate coverage for your needs.",
    "Negotiate your bills and subscriptions; you might get discounts or better deals.",
    "Use credit cards wisely; pay off the balance in full each month to avoid interest.",
    "Invest in low-cost index funds to keep investment fees and expenses down.",
    "Limit impulse purchases by waiting 24 hours before buying something you want.",
    "Set up separate savings accounts for different goals, like vacations or a new car.",
    "Educate yourself about personal finance; knowledge is key to making smart decisions.",
    "Regularly review your financial plan and make adjustments as your goals or circumstances change."
  ];

function DailyTip () {
    const today = new Date();
    const randomIndex = today.getDate() % tips.length;
  
    const dailyTip = tips[randomIndex];
  
    return (
      <Grid item xs={12}>
        <Card sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', textAlign: 'center', marginBottom: '20px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TipsAndUpdatesIcon sx={{ color: '#F1D76E', marginRight: '15px' }} />
            Daily Tip!
          </Typography>
          <Typography variant="body1" sx={{ color: '#5f6368' }}>
            {dailyTip}
          </Typography>
        </Card>
      </Grid>
    );
}

export default DailyTip