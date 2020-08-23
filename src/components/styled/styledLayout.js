import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const LogoWrapper = styled.img`
  padding: 0;
  margin: 0 0 0 -20px;
`;
export const HeaderWrapper = styled.ul`
  list-style-type: none;
  padding: 1em 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  a {
    color: white;
    text-decoration: none;
    font-family: "HelveticaNeue-Medium";
    font-size: 0.8em;
    font-weight: 100;
    padding: 0 0.4em;
    font-weight: thin;

    &:hover {
      color: yellow;
      transform: scaleY(10);
      transform: rotate(180deg);
    }
  }
`;
export const ThreeColumns = styled.div`
  display: flex;
  flexflow: row nowrap;
  flex: 1 1 1;
  color: white;
  // border: 1px solid #ff00ff;
`;

export const LayoutWrapper = styled.div`
  // margin: 0;
  // maxWidth: 800px;
  // padding: 0;
  // overflow: hidden;
  // width: '5px';
  // background-color: red;
`;

export const IFrameStyle = styled.div`
  width: 100%;
  height: 165;
  frameBorder: 0;
  max-width: 100%;
  padding-top:.5em;
}`;

export const ImageStyle = styled.img`
  // min-width: 10%;
  max-width: 100%;
}`;

export const Grid = styled.div`
column-count: 2;
}`;

export const CentroStyle = styled.div`
  // border: 1px solid white;
  // box-sizing: content-box;
  text-align: center;
  overflow: auto;
  flex: 1 1 60%;
  padding: 0.5em 0.5em;
`;

export const SideMenuStyle = styled.div`
  // border: 0px solid white,
  // min-width: 20%;
  flex: 1 1 20%;
  padding: 0.5em 0.5em;
`;

// export const LinkStyled = styled.Link`
//   // width: 100%;
// `;
