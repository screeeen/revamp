import React from 'react';
import ReactPlayer from 'react-player';

// Render a YouTube video player
export default ({ url }) => (
  <ReactPlayer
    style={{
      border: '1px solid white',
    }}
    url="https://vimeo.com/152825032"
  />

);
