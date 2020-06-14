import React from 'react';
import { Link } from 'gatsby';

export default function LeftMenu() {
  return (
    <div style={{ border: '1px solid white', flex: '1' }}>
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
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>OTHER GAMES</h3>
      <Link to="">
        <img src="" alt="" />
      </Link>
      <Link to="">
        <img src="" alt="" />
      </Link>
    </div>
  );
}
