import React from 'react';
import { SideMenuStyle, ImageStyle } from "./styled/styledLayout";
import OtherGames from './OtherGamesWidget'

export default function LeftMenu() {

  return (
    <SideMenuStyle>
      <h3>SCREEN IMPLOSION</h3>
      <p>
        Screen Implosion is a games label and producer of classic arcade games
        with a contemporary twist.
        Screen Implosion is based in Berlin and founded in 2015
      </p>
      <h3>SUBSCRIBE NOW</h3>
      <p>news, chronicles and easter eggs!!</p>
      {/* <form onSubmit={null}>
        <label HTMLfor='mail'>
        <input type="mail" name ='mail' value='mail' placeholder='Enter your email here' onChange={null} />
        </label>
        <input type='submit' value='Submit'>Subscribe</input>
      </form> */}

      <form>
        <label>
          <p>Name:</p>
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
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
