import React from "react";
import GifPlayer from "react-gif-player";
import { IFrameStyle } from "./styled/styledLayout";

const Gif = ({ gif, still }) => {
  return (
    <IFrameStyle>
      <GifPlayer gif={gif} still={still} />;
    </IFrameStyle>
  );
};

export default Gif;
