// import React from "react";
import styled from "styled-components";
// import { Link } from "gatsby";

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};



export const LogoWrapper = styled.img`
  padding: 0;
  margin: 0 0 0 -20px;
`;
export const HeaderWrapper = styled.ul`

  list-style-type: none;
  padding: 1em 0;
  margin: 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;

  a {
    color:  darkgrey ;
    text-decoration: none;
    font-family: "HelveticaNeue-Medium";
    font-size: 0.8em;
    font-weight: 100;
    padding: 0 0.4em;
    font-weight: thin;
    

    &:hover {
      color: lightgrey;
    }
    
    &.selected {
      color: white;
    }
  }

  @media ${device.tablet} { 
    /* max-width: 800px; */
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  }
`;


export const ThreeColumns = styled.div`

  display: flex;
  flex-flow: column;
  flex: 1 1 1;
  color: white;
  
  @media ${device.tablet} { 
    display: flex;
    flex-flow: row nowrap;
    flex: 1 1 1;
    color: white;
  // border: 1px solid #ff00ff;
  }

`;

// export const LayoutWrapper = styled.div`
//   // margin: 0;
//   // maxWidth: 800px;
//   // padding: 0;
//   // overflow: hidden;
//   // width: '5px';
//   // background-color: red;
// `;

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

  & img {
    width:100%
  }
`;

export const SideMenuStyle = styled.div`
  // min-width: 20%;
  color: #dedede;
  flex: 1 1 20%;
  padding: 0.5em 0.5em;

  order: 2;
`;

export const SideLeftMenuStyle = styled.div`
/* border: 1px solid whitesmoke; */
border-width: 1px;
  border-style: solid;
  border-image: 
    linear-gradient(
      to bottom, 
      whitesmoke, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
  // min-width: 20%;
  color: #dedede;
  flex: 1 1 20%;
  padding: 0.5em 0.5em;
  order: 4;
  @media ${device.tablet} { 
    order: 4;
  }
`;

export const GridWithPics = styled.div`
  // grid-auto-flow: row;
  grid-template-columns: repeat(2, 12px);
  grid-template-rows: repeat(2, 12px);
`;

export const GamesList = styled.div`
  // grid-auto-flow: row;
  // grid-template-columns: repeat(2, 12px);
  // grid-template-rows: repeat(2, 12px);
  display: grid;
`;
export const SimpleLink = styled.div`
  color: white;
  text-decoration: none;
  font-family: "HelveticaNeue-Medium";
  font-weight: 100;
  padding: 0 0.4em;
  font-weight: thin;

  &:hover {
    color: yellow;
    // transform: scaleY(1.2);
    // transform: rotate(180deg);
  }
`;

export const Pic = styled.img`
  width: 49%;
  padding: 0 6px;
`;

export const GameTitle = styled.div`
  color: yellow;
  // color: white;
  text-decoration: none;
  // font-size: 0.8em;
  font-weight: 100;
  padding: 0 0.4em;
  font-style:italic;

  font-family: 'Playfair Display', serif;
  font-weight: 200;

  &:hover {
    color: yellow;
    // transform: scaleY(1.2);
    // transform: rotate(180deg);
  }
  // border: 1ps solid red;
`;

export const DownloadButton = styled.button`
  padding: 12px 24px;
  margin: 24px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  background-color: grey;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
}`;

// export const LinkStyled = styled.Link`
//   // width: 100%;
// `;
