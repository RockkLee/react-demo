// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar/TopNavBar';
import MainPage from './components/MainPage/MainPage';
import RickRoll from './components/RickRoll/RickRoll';
import NyanCat from './components/NyanCat/NyanCat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/rickroll" element={<RickRoll />} />
          <Route path="/nyancat" element={<NyanCat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
