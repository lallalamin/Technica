import React from 'react';
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react';
import { Box, Typography, Button } from "@mui/material";

const UserInfo = withAuthInfo((props) => {
    const logoutFunction = useLogoutFunction();
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions();

    if (props.isLoggedIn) {
        return (
            <div>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ textDecoration: 'none', color: 'black' }}>
                        Welcome, {props.user.email}
                    </Typography>
                    <Button 
                        onClick={() => redirectToAccountPage()} 
                        color="inherit" 
                        className="button-white" 
                        sx={{ 
                        mr: 2, 
                        backgroundColor: 'white', 
                        color: 'black', 
                        fontWeight: 600, 
                        borderRadius: '10px', 
                        padding: '5px 15px', 
                        marginLeft: '10px', 
                        border: '1px solid black', 
                        '&:hover': { backgroundColor: '#e2e2e2' } 
                        }}
                    >
                        Account
                    </Button>
                    <Button 
                        onClick={() => logoutFunction(true)} 
                        color="inherit" 
                        className="button-blue" 
                        sx={{ 
                        mr: 2, 
                        backgroundColor: '#2E46CD', 
                        color: 'white', 
                        fontWeight: 600, 
                        borderRadius: '10px', 
                        padding: '5px 15px', 
                        marginLeft: '10px', 
                        border: '1px solid #2E46CD', 
                        '&:hover': { backgroundColor: '#1565C0' } 
                        }}
                    >
                        Logout
                    </Button>
                </Box>
            </div>
        );
    } else {
        return (
            <div>
                <Button onClick={() => redirectToSignupPage()} color="inherit" className="button-white" sx={{ mr: 2, backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px', border: '1px solid black', '&:hover': { backgroundColor: '#e2e2e2' } }}>Sign Up</Button>
                <Button onClick={() => redirectToLoginPage()} color="inherit" className="button-blue" sx={{ mr: 2, backgroundColor: '#2E46CD', color: 'white', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px', border: '1px solid #2E46CD', '&:hover': { backgroundColor: '#1565C0' } }}>Login</Button>
            </div>
        );
    }
});

export default UserInfo;
