import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import MidMenu from '../../components/MidMenu'
import LeftMenu from '../../components/LeftMenu'
import RightMenu from '../../components/RightMenu'
import monumentPic from '../../images/monument.png'
import kao_Pic from '../../images/kao_.png'
import palc_Pic from '../../images/palc.png'
import pallozas_Pic from '../../images/pallozas.png'
import pico_Pic from '../../images/pico.png'
import vertical_Pic from '../../images/vertical.png'
import awardsPic from '../../images/Awards_layer_vert.png'
import { DownloadButton, Grid, IFrameStyle, ImageStyle } from '../../components/styled/styledLayout'


export default function index() {
  const url='https://vimeo.com/152825032';
  return (
    < >
      <SEO title="Downhill Chapter One" />
      <LeftMenu />
      <MidMenu >
        <ImageStyle src={awardsPic} />
        <Grid>
          <ImageStyle src={monumentPic} />
          <ImageStyle src={kao_Pic} />
          <ImageStyle src={palc_Pic} />
          <ImageStyle src={pallozas_Pic} />
          <ImageStyle src={pico_Pic} />
          <ImageStyle src={vertical_Pic} />
        </Grid>
        {/* <IFrameStyle src="https://itch.io/embed/72601?border_width=0&amp;bg_color=000000" ></IFrameStyle> */}
        <DownloadButton src="https://screenimplosion.itch.io/downhill-chapter-one">Download Downhill* at itchio</DownloadButton>
      </MidMenu>
      <RightMenu>
        <h3>DOWNHILL* CHAPTER ONE</h3>
        <p>
          Downhill* is an endless free fall on a minimal landscape full strange
          sculptures and environments. A game with extraordinary graphics and
          addictive gameplay.
        </p>
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
    </>
  )
}
