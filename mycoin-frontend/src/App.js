import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './components/Home';
import CreateWallet from './components/CreateWallet';
import AccessWallet from './components/AccessWallet';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route path="/access-wallet" element={<AccessWallet />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
