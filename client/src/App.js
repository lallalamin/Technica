import './App.css';
import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Footer from './component/Footer';
import Dashboard from './dashboard/page';
import Form from './form/page';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div id='header' style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '80px' }}>
      <Box sx={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
        <div className="welcome-bg">
          <Typography className="welcome-title" variant="h3" component="h1" gutterBottom>
            FinTechstic Chronicles
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            A Journey to Wealth
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ fontSize: '18px', lineHeight: 1.6, color: '#5f6368' }}>
            Reach your financial goals effortlessly! Our platform offers personalized savings plans,
            goal tracking, and smart budgeting tools to help you stay on track. Whether saving for a
            trip, paying off debt, or planning for education, we provide tailored strategies and
            progress updates to make your journey simpler and more rewarding.
          </Typography>
        </div>
        <Button
          className="button-white"
          variant="contained"
          color="primary"
          sx={{ mt: 2, mr: 2, backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '10px', padding: '5px 15px', marginLeft: '10px', '&:hover': { backgroundColor: '#e2e2e2' } }}
          onClick={() => navigate('/dashboard')}
        >
          Get Started
        </Button>
        <Button
          className="button-blue"
          variant="outlined"
          color="primary"
          sx={{ mt: 2, backgroundColor: '#2E46CD', color: 'white', fontWeight: 600, borderRadius: '10px', padding: '5px 15px', marginLeft: '10px', '&:hover': { backgroundColor: '#1565C0' } }}
        >
          Learn More
        </Button>
        <img src="\image.jpg" alt="achievement" />
      </Box>
    </div>
  );
}

export default App;
