import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import MidMenu from '../../components/MidMenu'
import LeftMenu from '../../components/LeftMenu'
import RightMenu from '../../components/RightMenu'
import monumentPic from '../../images/monument.png'
import awardsPic from '../../images/Awards_layer_vert.png'

const imageStyle ={
  width:'80%',
}

const iFrameStyle = {
  width:"100%",
  height:"165",
  frameBorder:"0",
  marginLeft:"5%"
}

export default function index() {
  return (
    <Layout url={'https://vimeo.com/152825032'}>
    <SEO title="Home" />
      <LeftMenu />
      <MidMenu >
      <img style={imageStyle} src={awardsPic} />
      <img  style={imageStyle} src={monumentPic} />
      <iframe style ={iFrameStyle} src="https://itch.io/embed/72601?border_width=0&amp;bg_color=000000" ></iframe>
      </MidMenu>
      <RightMenu> 
        <h3>DOWNHILL* CHAPTER ONE (iOS / ANDROID)</h3>
        <p>
          Downhill* is an endless free fall on a minimal landscape full strange
          sculptures and environments. A game with extraordinary graphics and
          addictive gameplay.
        </p>
        <p>◊◊◊◊◊◊</p>
        <p>Features:</p>
        <ul>
          <li>Fast & Smooth Scrolling Action</li>
          <li>Beautiful Architecture Graphics</li>
          <li>Avant-Garde Tunes</li>
          <li>Special Stages</li>
          <li>Game Center Support</li>
          <li>Easter Eggs!</li>
        </ul>
        <ul>
          <li>Official Selection Tokio Game Show 2016</li>
          <li>Official Selection Radius festival Wien 2016</li>
          <li>Official Selection Game Happens! Genoa 2016</li>
          <li>Official Selection AZPlay Bilbao Spain 2015</li>
          <li>Official Selection Busan Indie Connect South Korea 2015</li>
          <li>Official Selection Casual Connect Tel Aviv 2015</li>
          <li>Official Selection AZPlay Bilbao Spain 2015</li>
        </ul>
      </RightMenu> 
      
  </Layout>
  )
}
