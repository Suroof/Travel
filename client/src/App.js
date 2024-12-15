import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Tours from './pages/Tours';
import About from './pages/About';
import Contact from './pages/Contact';
import TravelDiary from './pages/TravelDiary';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/travel-diary" element={<TravelDiary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;