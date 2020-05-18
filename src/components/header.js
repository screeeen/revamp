// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "../components/menu"

const Header = ({ siteTitle }) => (
  <>
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
        <h1 style={{ margin: 0 }}>
          {siteTitle}
        </h1>
    <Menu />
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
