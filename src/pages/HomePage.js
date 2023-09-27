import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Adkar Counter App</h1>
      <p>Click the buttonbelow to start counting your adhkar.</p>
      <Link to="/counter">Start Counting</Link>
    </div>
  );
};

export default HomePage;