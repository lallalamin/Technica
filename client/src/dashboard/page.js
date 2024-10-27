import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, List, ListItem } from '@mui/material';
import PieChart from './piechart';
import DailyTip from '../component/DailyTip';
import ProgressBar from '../component/ProgressBar';
import AddBudgetDialog from '../component/AddBudgetDialog';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useNavigate } from 'react-router-dom';
import { useAuthInfo, useRedirectFunctions } from '@propelauth/react';

const progressValue = 0;

function Dashboard() {
    const [open, setOpen] = useState(false);
    const [budgetItems, setBudgetItems] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [userId, setUserId] = useState(null);

    const { redirectToLoginPage } = useRedirectFunctions();
    const { user } = useAuthInfo();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setUserId(user.userId);
        } else if (user === null) {
            redirectToLoginPage();
        }
    }, [user]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddBudgetItem = async (newItem) => {
        if (!userId) return;  
        const itemWithUserId = {
            ...newItem,
            user_id: userId,
        };

        try {
            const response = await fetch(`http://localhost:5000/api/statements`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemWithUserId),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const savedItem = await response.json();
            const updatedItems = [...budgetItems, savedItem];
            setBudgetItems(updatedItems);
            updateChartData(updatedItems);
            handleClose();
        } catch (error) {
            console.error("Error adding budget item:", error);
        }
    };

    useEffect(() => {
        const fetchStatements = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/statements/${userId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const statements = await response.json();
                console.log("Statements fetched successfully:", statements);
                setBudgetItems(statements);
                updateChartData(statements);
            } catch (error) {
                console.error("Error fetching statements:", error);
            }
        };

        fetchStatements();
    }, [userId]);

    const updateChartData = (items) => {
        // Calculate totals for each type
        const totals = items.reduce((acc, item) => {
            const { type, amount, category } = item;
            if (type === 'Income') {
                acc.totalIncome += amount;
            } else if (type === 'Expense') {
                // Group expenses by category
                acc.expenses[category] = (acc.expenses[category] || 0) + amount;
            } else if (type === 'Savings') {
                acc.savings += amount;
            }
            return acc;
        }, { totalIncome: 0, expenses: {}, savings: 0 });

        // Update total income state
        setTotalIncome(totals.totalIncome);

        // Convert expenses object to array format
        const expenseData = Object.entries(totals.expenses).map(([category, amount]) => ({
            name: `${category} (Expense)`,
            value: amount
        }));

        // Add savings if there are any
        if (totals.savings > 0) {
            expenseData.push({
                name: 'Savings',
                value: totals.savings
            });
        }

        // Calculate remaining income (unallocated)
        const totalExpensesAndSavings = expenseData.reduce((sum, item) => sum + item.value, 0);
        const remainingIncome = totals.totalIncome - totalExpensesAndSavings;

        if (remainingIncome > 0) {
            expenseData.push({
                name: 'Remaining Income',
                value: remainingIncome
            });
        }

        console.log('Updated Chart Data:', expenseData);
        setChartData(expenseData);
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f0f4fa', minHeight: '100vh', maxWidth: '100%' }}>
            <Button 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '20px auto', 
                    backgroundColor: '#2E46CD', 
                    color: 'white', 
                    '&:hover': { backgroundColor: '#1E3AA1' } 
                }}
                onClick={() => navigate('/form')}
            >
                <AutoAwesomeIcon sx={{ marginRight: '5px', color: 'yellow' }} /> Add Goal
            </Button>
            <ProgressBar value={progressValue} goal={100} />
            <DailyTip />

            <Grid container spacing={3}>
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
                                            <Typography sx={{ fontWeight: 'bold' }}>{item.category}</Typography>
                                            <Typography 
                                                sx={{ 
                                                    color: item.type === 'Income' ? 'green' : item.type === 'Savings' ? 'blue' : 'red'
                                                }}
                                            >
                                                {item.type === 'Income' ? `+ $${item.amount}` : item.type === 'Savings' ? `$${item.amount}` : `- $${item.amount}`} 
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleClickOpen}
                                sx={{ display: 'block', margin: '20px auto', backgroundColor: '#2E46CD', '&:hover': { backgroundColor: '#1E3AA1' } }}
                            >
                                Add
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ padding: '20px', textAlign: 'center', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
                        <Typography variant="h6" gutterBottom>
                            Your Monthly Budget Distribution
                        </Typography>
                        <Box sx={{ 
                            backgroundColor: '#f5f5f5', 
                            padding: '10px', 
                            borderRadius: '8px',
                            marginBottom: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Total Income This Month:
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'green' }}>
                                ${totalIncome.toLocaleString()}
                            </Typography>
                        </Box>
                        <PieChart data={chartData} />
                    </Card>
                </Grid> 
            </Grid>

            <AddBudgetDialog open={open} onClose={handleClose} onSubmit={handleAddBudgetItem} />
        </Box>
    );
}

export default Dashboard;