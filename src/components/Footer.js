import React from "react";
import { FooterStyle } from "./styled/styledLayout";

const white = {
  color: "white",
  // border:'1px solid yellow',
  padding: "10px 10px",
};

export default function Footer() {
  return (
    <FooterStyle style={white}>
      <h3>SCREEN IMPLOSION</h3>
      <p>
        Screen Implosion is a games label and producer of classic arcade games
        with a contemporary twist. Screen Implosion is based in Berlin and
        founded in 2015
      </p>
      <form>
        <label>
          <input type="text" name="name" placeholder="your name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>SUBSCRIBE NOW</h3>
      <p>news, chronicles and easter eggs!!</p>© {new Date().getFullYear()}{" "}
      SCREEN IMPLOSION{" "}
    </FooterStyle>
  );
}
