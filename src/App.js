import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';

function App() {
  return (
    <div className="wrapper">
      <h1>Application Header/Navbar</h1>
      <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
