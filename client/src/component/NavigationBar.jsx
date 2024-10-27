import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material";
import UserInfo from './UserInfo';

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
                    <UserInfo />
                </div>
                
            </Toolbar>
        </AppBar>
  )
}

export default NavigationBar