import React from 'react';
import ReactPlayer from 'react-player';

// Render a YouTube video player
export default (url) => {
  return (
    <ReactPlayer 
    // width={520} height={300}
    width={'100%'}
      url={url.url} 
      config={{
        vimeo: {
          playerOptions: {
            width: 1200,
          }
        }
      }}
    />
  )
};
