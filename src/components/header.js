import React, { useState } from "react";
import Link from "gatsby-link";
import logo from "../images/sc_anim_glitch-2.gif";
import { LogoWrapper, HeaderWrapper, Body } from "./styled/styledLayout";

const options = [
  { name: "ARENA", link: "/arena" },
  { name: "SURFIZE", link: "/surfize" },
  { name: "DESERT PEEKABOO", link: "/desert" },
  { name: "DOWNHILL*", link: "/downhill" },
  { name: "OUTPUT", link: "/output" },
];

export default () => {
  const initialState = "";
  const [selected, setSelected] = useState(initialState);

  return (
    <>
      <Link to="/">
        <LogoWrapper src={logo} alt="" />
      </Link>
      <HeaderWrapper>
        {options.map(option => (
          <li key={option.name}>
            <Link
              to={option.link}
              onClick={() => setSelected(option.name)}
              className={option.name === selected ? "selected" : ""}
            >
              {option.name}
            </Link>
          </li>
        ))}
      </HeaderWrapper>
    </>
  );
};
