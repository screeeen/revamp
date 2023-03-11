import React from "react";
import VideoBox from "../../components/VideoBox";
import SEO from "../../components/seo";
import MidMenu from "../../components/MidMenu";
import RightMenu from "../../components/RightMenu";
import LeftMenu from "../../components/LeftMenu";
import surfize1 from "../../images/surfize_1.gif";
import surfize2 from "../../images/surfize_2.gif";
import surfize3 from "../../images/surfize_3.gif";
import surfize4 from "../../images/surfize_4.gif";
// import surfizePET from '../../images/surfize_PET.png'
import {
  Grid,
  DownloadButton,
  ImageStyle,
} from "../../components/styled/styledLayout";
// import Gif from '../../components/Gif'

export default function index() {
  const url = "https://vimeo.com/99716958";
  return (
    <>
      <SEO title="Home" />
      <MidMenu>
        <VideoBox url={url} />
        <Grid>
          <ImageStyle src={surfize1} alt="" />
          <ImageStyle src={surfize2} alt="" />
          <ImageStyle src={surfize3} alt="" />
          <ImageStyle src={surfize4} alt="" />
        </Grid>
        {/* <IFrameStyle src="https://itch.io/embed/432?border_width=0&amp;bg_color=000000&amp;link_color=ffffff" ></IFrameStyle> */}
        {/* <img style={imageStyle} src={surfizePET} /> */}
        <DownloadButton href="https://screenimplosion.itch.io/surfize">
          Download Surfize on itchio
        </DownloadButton>
      </MidMenu>
      <RightMenu>
        <h3>SURFIZE</h3>
        <p>
          {" "}
          Surfize is an arcade unfinished lo-fi game inspired on the grindcore
          sounds. Beat your score by killing crazy creatures. Surfize simulates
          hypothetical battles that occurred in a near past and unknown to the
          media. Set in random locations, the battles follow archaic gameplay
          with a twist. Darkness is a palpable value in the game, its
          retro-palpable and mysterious. Ruled by simple and dark settings, this
          gameplay narrates hidden extraterrestrial stories in our planet.
        </p>
      </RightMenu>
    </>
  );
}
