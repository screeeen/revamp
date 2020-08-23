import React from "react";
import { Link } from "gatsby";
import arenaIcon from "./../images/arena_icon.png";
import surfizeIcon from "./../images/surfize_icon.png";
import downhillIcon from "./../images/downhill_icon.png";
import cupMinute from "./../images/cupMinute.gif";
import { ImageStyle } from "./styled/styledLayout";
import Gif from "./Gif";

const links = [
  { path: "/arena", src: arenaIcon },
  { path: "/surfize", src: surfizeIcon },
  { path: "/downhill", src: downhillIcon },
  { path: "/eagleCup", src: cupMinute },
];

const OtherGames = () => (
  <>
    <h3>OTHER GAMES</h3>
    {links.map(page => {
      return (
        page.path !== document.location.pathname && (
          <Link to="page.path">
            <ImageStyle src={page.src} />
          </Link>
        )
      );
    })}
  </>
);

export default OtherGames;
