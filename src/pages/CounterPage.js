import React from 'react';
import Counter from '../components/Counter';

const CounterPage = ({ adhkar }) => {
  const handleCounterClick = () => {
    // Handle counter click logic
  };

  return (
    <div>
      <Counter adhkar={adhkar} onCounterClick={handleCounterClick} />
    </div>
  );
};

export default CounterPage;