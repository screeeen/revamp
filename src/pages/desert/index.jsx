import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import MidMenu from '../../components/MidMenu'
import LeftMenu from '../../components/LeftMenu'
import RightMenu from '../../components/RightMenu'
import desertPic from '../../images/desert.png'
import { ImageStyle, IFrameStyle, DownloadButton } from '../../components/styled/styledLayout'
export default function index() {
const url='https://vimeo.com/129374993';
  return (
    <>
      <SEO title="Home" />
      <LeftMenu />
      <MidMenu>
        <ImageStyle src={desertPic} />
        <DownloadButton href="https://screenimplosion.itch.io/desert-peekaboo">Download Desert Peekaboo at itchio</DownloadButton>        {/* <IFrameStyle frameBorder="0" src="https://itch.io/embed/26785?border_width=0&amp;bg_color=000000" width="100%" height="165"></IFrameStyle> */}
      </MidMenu>
      <RightMenu>


        <h3>DESERT PEEKABOO VR (PC/MAC)</h3>
        <p>A non-game for VR Glasses made at Shayla Games with  music made by John Brown from BoneLoaf.</p>
      </RightMenu>
    </>
  )
}
