import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';

const Counter = ({ adhkar, onCounterClick }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const adhkarItem = adhkar[currentCount % adhkar.length];
  const audioSrc = adhkarItem.audio;

  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(() => {
        setCurrentCount(prevCount => prevCount + 1);
      }, adhkarItem.duration);
    }
    return () => clearInterval(interval);
  }, [isCounting, adhkarItem]);

  const handleCounterClick = () => {
    onCounterClick();
    setIsCounting(false);
  };

  const handlePauseResumeClick = () => {
    setIsCounting(prevIsCounting => !prevIsCounting);
  };

  const handleRestartClick = () => {
    setCurrentCount(0);
    setIsCounting(false);
  };

  return (
    <div>
      <div>
        <h1>{adhkarItem.arabic}</h1>
        <h3>{adhkarItem.transliteration}</h3>
        <p>{adhkarItem.translation}</p>
      </div>
      <AudioPlayer audioSrc={audioSrc} playbackSpeed={1} />
      <div>
        <button onClick={handleCounterClick}>Count</button>
        <button onClick={handlePauseResumeClick}>{isCounting ? 'Pause' : 'Resume'}</button>
        <button onClick={handleRestartClick}>Restart</button>
      </div>
    </div>
  );
};

export default Counter;