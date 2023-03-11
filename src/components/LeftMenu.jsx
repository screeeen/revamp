import React from "react";
import { SideMenuStyle, ImageStyle } from "./styled/styledLayout";
import OtherGames from "./OtherGamesWidget";
import Link from "gatsby-link";

export default function LeftMenu() {
  return (
    <SideMenuStyle>
      {/* <form onSubmit={null}>
        <label HTMLfor='mail'>
        <input type="mail" name ='mail' value='mail' placeholder='Enter your email here' onChange={null} />
        </label>
        <input type='submit' value='Submit'>Subscribe</input>
      </form> */}

      {/* <OtherGames /> */}
      {/* <Link to="/arena">
        <ImageStyle src={arenaIcon} />
      </Link>
      <Link to="/surfize">
        <ImageStyle src={surfizeIcon} />
      </Link> */}
    </SideMenuStyle>
  );
}
