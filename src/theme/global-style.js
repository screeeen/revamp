import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import CooperHewittLight from "../fonts/CooperHewitt-Light.otf";
import CooperHewittMedium from "../fonts/CooperHewitt-Medium.otf";
import HelveticaNeueMedium from "../fonts/HelveticaNeue-Medium.otf";
import HelveticaNeueThin from "../fonts/HelveticaNeue-Thin.otf";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'CooperHewitt-Light';
    src: local('CooperHewitt-Light'), url(../fonts/CooperHewitt-Light.otf) format('embedded-opentype');

  }

  @font-face {
    font-family: 'CooperHewitt-Medium';
    src: local('CooperHewitt-Medium'), url(../fonts/CooperHewitt-Medium.otf) format('embedded-opentype');

  }

  @font-face {
      font-family: 'HelveticaNeue-Medium';
      src: local('HelveticaNeue-Medium'), url(../fonts/HelveticaNeue-Medium.otf) format('embedded-opentype');
    }

  }

  @font-face {
    font-family: 'HelveticaNeue-Thin';
    src: local('HelveticaNeue-Thin'), url(../fonts/HelveticaNeue-Thin.otf) format('embedded-opentype');
  }
}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'CooperHewitt-Light';
    // font-size: 16px;
    color: '#1a202c';
  }

  body {
    font-family: 'HelveticaNeue-Medium';
    line-height: 1.5;
    letter-spacing: 0;
    background-color: black;
  
    justify-content: space-around;
    display: flex;
    flex-flow: column wrap;
  }


  h1 {
    font-family: 'HelveticaNeue-Medium';
  }
  h2 {
    font-family: 'HelveticaNeue-Medium';
  }
  h3 {
    font-family: 'CooperHewitt-Medium';
  }

  p {
    font-family: 'HelveticaNeue-Thin';
    font-size: 0.8em;
    font-variant: slashed-zero;
    font-stretch: normal;
    font-weight:100;
    font-kerning: normal;
    // line-height:1em;
    padding: 1em 0;
  }

`;
