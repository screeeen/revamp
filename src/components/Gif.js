import React from "react";
import GifPlayer from "react-gif-player";
import { IFrameStyle } from "./styled/styledLayout";

export const gifo = {
  // border: "3px solid cornflowerblue",
  maxWidth: "100%",
};

const Gif = ({ gif, still }) => {
  return (
    <IFrameStyle>
      <GifPlayer gif={gif} still={still} style={gifo} />
    </IFrameStyle>
  );
};

export default Gif;
