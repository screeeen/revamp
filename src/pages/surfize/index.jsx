import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import MidMenu from '../../components/MidMenu'
import RightMenu from '../../components/RightMenu'
import LeftMenu from '../../components/LeftMenu'
import GifPlayer from 'react-gif-player'
import surfize1 from '../../images/surfize_1.gif'
import surfize2 from '../../images/surfize_2.gif'
import surfize3 from '../../images/surfize_3.gif'
import surfize4 from '../../images/surfize_4.gif'
import surfizePET from '../../images/surfize_PET.png'

export default function index() {

  const iFrameStyle = {
    width: "100%",
    height: "165",
    frameBorder: "0",
  }

  const imageStyle = {
    width: '100%',
  }

  const grid = {
    columnCount: '2',
  }


  return (
    <Layout url='https://vimeo.com/99716958'>
      <SEO title="Home" />
      <LeftMenu />
      <MidMenu>
        <div style={grid}>
          <GifPlayer gif={surfize1} still={surfize1} style={iFrameStyle} />
          <GifPlayer gif={surfize2} still={surfize2} style={iFrameStyle} />
          <GifPlayer gif={surfize3} still={surfize3} style={iFrameStyle} />
          <GifPlayer gif={surfize4} still={surfize4} style={iFrameStyle} />
        </div>
        {/* <img style={imageStyle} src={surfizePET} /> */}

        <iframe style={iFrameStyle} src="https://itch.io/embed/432?border_width=0&amp;bg_color=000000&amp;link_color=ffffff" ></iframe>
      </MidMenu>
      <RightMenu>
        <h3>SURFIZE</h3>
        <p> Surfize is an arcade unfinished lo-fi game inspired on the grindcore sounds. Beat your score by killing crazy creatures.
    Surfize simulates hypothetical battles that occurred in a near past and unknown to the media. Set in random locations, the battles follow archaic gameplay with a twist. Darkness is a palpable value in the game, its retro-palpable and mysterious. Ruled by simple and dark settings, this gameplay narrates hidden extraterrestrial stories in our planet.</p>

      </RightMenu >
    </Layout >
  )
}
