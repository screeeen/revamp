import React from 'react';
import ReactPlayer from 'react-player';

// Render a YouTube video player
export default (url) => {
  console.log(url.url)
  return (
    <ReactPlayer width={460} height={300}
      // url="https://vimeo.com/152825032" //downhill
      // https://vimeo.com/99716958 //surfize
      url={url.url} // arena
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
