import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';
import adhkar from './data/Adhkar';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/counter" element={
        <CounterPage adhkar={adhkar} />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;