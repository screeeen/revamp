// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Link from "gatsby-link"
import logo from "../images/sc_anim_glitch-2.gif"

export default ({ siteTitle }) => (
  <ul
    style={{
      listStyle: "none",
      display: "flex",
      justifyContent: "space-between",
      // border: "1px solid white",
      alignItems: "flex-end",
      padding: "40px 0 0 0px",
    }}
  >
    <li>
      <Link to="/">
        <img src={logo} alt="" />
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
  </ul>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: '',
// };
