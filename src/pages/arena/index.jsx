import React from "react";
import VideoBox from "../../components/VideoBox";
import SEO from "../../components/seo";
import MidMenu from "../../components/MidMenu";
import RightMenu from "../../components/RightMenu";
import LeftMenu from "../../components/LeftMenu";
import monumentPic from "../../images/monument.png";
import awardsPic from "../../images/Awards_layer_vert.png";
import arenaLogo from "../../images/arena_banner.png";
import arena1 from "../../images/arena_1.png";
import arena2 from "../../images/arena_2.png";
import arena3 from "../../images/arena_3.png";
import arena4 from "../../images/arena_4.png";
import { ImageStyle, Grid } from "../../components/styled/styledLayout";

export default function index() {
  const url = "https://vimeo.com/128135792";

  return (
    <>
      <SEO title="Home" />
      <MidMenu>
        <VideoBox url={url} />
        <Grid>
          <ImageStyle src={arenaLogo} />
          <ImageStyle src={arena1} />
          <ImageStyle src={arena2} />
          <ImageStyle src={arena3} />
          <ImageStyle src={arena4} />
          {/* <img style={imageStyle} src={awardsPic} /> */}
        </Grid>
      </MidMenu>
      <RightMenu>
        <h3>ARENA MONSTER ALIEN SHOOTING CHAOS</h3>
        <p>
          Arena Monster Alien Shooting Chaos challenges players to chase their
          highest score on short games of maximum 2 minutes period with an
          addictive loop between every game session. Arena Monster Alien
          Shooting Chaos captures the magic of classic arcade games together
          with the contemporary feeling providing an outstanding mobile gaming
          experience. It’s a fast game, with sessions from 10” to 2’. It’s
          innovative, the one and only game bringing the auto-lock feature in a
          shooting arena: the interplanetary combat capsule Zionsk - 10119 will
          shoot automatically every threatening life form approaching. The
          resources on the arena remain on every game session thus creating an
          endless game session loop. Moreover, the 5 special weapons designed to
          endure the attacks will delight those players looking for an action
          game with reminiscences of the arcade glorious past.
        </p>
      </RightMenu>
    </>
  );
}
