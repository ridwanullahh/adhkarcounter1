import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = ({ audioSrc, playbackSpeed }) => {
  return (
    <ReactAudioPlayer
      src={audioSrc}
      autoPlay={false}
      controls
      preload="auto"
      playbackRate={playbackSpeed}
    />
  );
};

export default AudioPlayer;