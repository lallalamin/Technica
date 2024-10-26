import { AppBar, Toolbar, Typography } from "@mui/material";

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <AppBar position="static" className="nav-bar" sx={{ backgroundColor:'white'}}>
            <Toolbar className="tool-bar">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography className="logo-title" component="a" href="/" variant="h6" sx={{  textDecoration: 'none', color: 'black', paddingLeft: '10px', fontWeight: 'bold'}}>
                        FinTechstic
                    </Typography>
                </div>
                <div className="footer-right">
                    <div className="legal-stuff">
                        <Typography sx={{ fontWeight: 600, color: 'black', padding:'10px'}}>Privacy Policy</Typography>
                        <Typography sx={{ fontWeight: 600, color: 'black', padding:'10px'}}>Term of Services</Typography>
                    </div>
                    <div className="social-media">
                        <LinkedInIcon className="icon-black"></LinkedInIcon>
                        <YouTubeIcon className="icon-black"></YouTubeIcon>
                        <InstagramIcon className="icon-black"></InstagramIcon>
                    </div>
                </div>
                
                
            </Toolbar>
        </AppBar>
    );
}