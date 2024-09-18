import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; 
import Home from './Home'; 
import About from './About'; 
import Contact from './Contact'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* Navigation links */}
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
