import React from 'react'
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
const NavigationBar = () => {
  return (
    <AppBar position="static" className="nav-bar" sx={{ backgroundColor:'white'}}>
            <Toolbar className="tool-bar">
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Typography className="logo-title" component="a" href="/" variant="h6" sx={{  textDecoration: 'none', color: 'black', paddingLeft: '10px', fontWeight: 'bold'}}>
                        FinTechstic
                    </Typography>
                </div>
                <div>
                    <Button color="inherit" href="/sign-up" className="button-white" sx={{ mr: 2, backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px', border: '1px solid black', '&:hover': {backgroundColor: '#e2e2e2',}, }}>Sign Up</Button>
                    <Button color="inherit" href="/sign-in" className="button-blue" sx={{ mr: 2, backgroundColor: '#2E46CD', color: 'white', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px', border: '1px solid #2E46CD', '&:hover': {backgroundColor: '#1565C0',}, }}>Login</Button>
                </div>
                
            </Toolbar>
        </AppBar>
  )
}

export default NavigationBar