import React from "react";
import { Link } from "gatsby";
import arenaIcon from "./../images/arena_icon.png";
import surfizeIcon from "./../images/surfize_icon.png";
import downhillIcon from "./../images/downhill_icon.png";
import cupMinute from "./../images/cupMinute.gif";
import { ImageStyle } from "./styled/styledLayout";

const links = [
  { path: "/arena", src: arenaIcon },
  { path: "/surfize", src: surfizeIcon },
  { path: "/downhill", src: downhillIcon },
  { path: "/eagleCup", src: cupMinute },
];

const OtherGames = () => (
  <>
    <h3>OTHER GAMES</h3>
    <Link to="/">
            <ImageStyle src={links[3].src} />
      </Link>
    {/* {links.map(page => { */}
      {/* return (
        // document !== null &&
        // document !== undefined && 
        // page.path !== document.location.pathname && (

      //   )
      // );
    // }
    )})} */}
  </>
);

export default OtherGames;
