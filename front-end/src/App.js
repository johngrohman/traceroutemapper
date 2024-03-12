import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import './App.scss';

export default function App() {
  return (
    <div className='App'>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
