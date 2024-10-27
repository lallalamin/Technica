import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@propelauth/react";

const AuthProviderWrapper = () => {
  const authUrl = "https://18116208.propelauthtest.com";
  console.log("authUrl:", authUrl);
  return (
    <AuthProvider authUrl={authUrl}>
      <App />
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProviderWrapper />
);