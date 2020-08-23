// import { Link } from "gatsby"
import PropTypes from "prop-types";
import React from "react";
import Link from "gatsby-link";
import logo from "../images/sc_anim_glitch-2.gif";
import { LogoWrapper, HeaderWrapper } from "./styled/styledLayout";
import styled from "styled-components";

export default () => (
  <HeaderWrapper>
    <li>
      <Link to="/">
        <LogoWrapper src={logo} alt="" />
      </Link>
    </li>
    <li>
      <Link to="/arena">ARENA</Link>
    </li>
    <li>
      <Link to="/surfize">SURFIZE</Link>
    </li>
    <li>
      <Link to="/desert">DESERT PEEKABOO VR</Link>
    </li>
    <li>
      <Link to="/downhill">DOWNHILL</Link>
    </li>
    <li>
      <Link to="/output">OUTPUT</Link>
    </li>
    <li>
      <Link to="/presskit">PRESSKIT</Link>
    </li>
    <li>
      <Link to="/devlog">DEVLOG</Link>
    </li>
  </HeaderWrapper>
);

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: '',
// };
