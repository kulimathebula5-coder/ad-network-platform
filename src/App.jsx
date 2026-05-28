import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import AdCampaigns from './pages/AdCampaigns';
import CreatorMonetization from './pages/CreatorMonetization';
import Analytics from './pages/Analytics';
import Login from './pages/Login';
import './index.css';

function App() {
  const [userType, setUserType] = useState(localStorage.getItem('userType') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = (type) => {
    setUserType(type);
    setIsAuthenticated(true);
    localStorage.setItem('userType', type);
    localStorage.setItem('token', 'mock-token-' + Date.now());
  };

  const handleLogout = () => {
    setUserType(null);
    setIsAuthenticated(false);
    localStorage.removeItem('userType');
    localStorage.removeItem('token');
  };

  // Apply premium theme
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.colorScheme = 'dark';
    const style = document.createElement('style');
    style.textContent = `
      * { transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
      html { scroll-behavior: smooth; }
    `;
    document.head.appendChild(style);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Navigation userType={userType} onLogout={handleLogout} />
        <main className="transition-all duration-300 ease-in-out">
          <Routes>
            <Route path="/" element={<Dashboard userType={userType} />} />
            <Route path="/ads" element={<AdCampaigns userType={userType} />} />
            <Route path="/monetization" element={<CreatorMonetization userType={userType} />} />
            <Route path="/analytics" element={<Analytics userType={userType} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
