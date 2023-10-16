import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Login from './components/Login';
import Profile from './components/Profile';


function App() {
  return (
      <Router>
          <NavBar />
          <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
          </div>
      </Router> 
  );
}

export default App;
