import React from 'react';
import ReactPlayer from 'react-player';

// Render a YouTube video player
export default ({ url }) => (
  <ReactPlayer width={960} height={540}
    url="https://vimeo.com/152825032"
    config={{
      vimeo: {
        playerOptions: {
        width: 960,
        }
      }
    }}
  />

);
