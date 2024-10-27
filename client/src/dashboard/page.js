// src/dashboard/page.js
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, List, ListItem } from '@mui/material';
import { addStatement, getStatementsFromUser } from '../service/StatementsAPI'; // Import the addStatement function
import PieChart from './piechart';
import DailyTip from '../component/DailyTip';
import ProgressBar from '../component/ProgressBar';
import AddBudgetDialog from '../component/AddBudgetDialog';


const data = [
    { name: 'Food', value: 9 },
    { name: 'Gas', value: 16 },
    { name: 'Electricity', value: 20 },
    { name: 'Rent', value: 55 },
];

const progressValue = 20;

function Dashboard() {
    const [open, setOpen] = useState(false);
    const [budgetItems, setBudgetItems] = useState([]);

    const hardcodedUserId = '12345'; // Hardcoded user ID for development

    // Handle opening the dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Handle closing the dialog
    const handleClose = () => {
        setOpen(false);
    };

    // Handle form submission
    const handleAddBudgetItem = async (newItem) => {
        const itemWithUserId = {
            ...newItem,
            user_id: hardcodedUserId, // Add the hardcoded user ID
        };

        try {
            // Call the API to add the new statement
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
            // Update the local state with the new item
            setBudgetItems([...budgetItems, savedItem]);
            handleClose();
        } catch (error) {
            console.error("Error adding budget item:", error);
        }
    };

    useEffect(() => {
        const fetchStatements = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/statements/${hardcodedUserId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const statements = await response.json();
                console.log( "Statements fetched successfully:" ,statements);
                setBudgetItems(statements);
                
            } catch (error) {
                console.error("Error fetching statements:", error);
            }
        };

        fetchStatements();
        }, []);

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f0f4fa', minHeight: '100vh', maxWidth: '100%' }}>
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
                                                    color: item.type === 'Income' ? 'green' : 'red'
                                                }}
                                            >
                                                {item.type === 'Income' ? `+ $${item.amount}` : `- $${item.amount}`} 
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
                    Your Monthly Expenses
                  </Typography>
                  <PieChart data={data} />
                </Card>
              </Grid> 
            </Grid>
            {/* D3 Pie Chart Section */}
            

            <AddBudgetDialog open={open} onClose={handleClose} onSubmit={handleAddBudgetItem} />
        </Box>
    );
}

export default Dashboard;
