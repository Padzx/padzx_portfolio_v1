import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import Redirect from './untils/pageLink'; 
import Home from './pages/home';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Redirect to="/home" />} /> 
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
