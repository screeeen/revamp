import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import MidMenu from '../../components/MidMenu'
import RightMenu from '../../components/RightMenu'
import LeftMenu from '../../components/LeftMenu'
import monumentPic from '../../images/monument.png'
import awardsPic from '../../images/Awards_layer_vert.png'
import arenaLogo from '../../images/arena_banner.png'
import arena1 from '../../images/arena_1.png'
import arena2 from '../../images/arena_2.png'
import arena3 from '../../images/arena_3.png'
import arena4 from '../../images/arena_4.png'

const imageStyle = {
  width: '100%',
}

const grid = {
  columnCount: '2',
}

export default function index() {
  return (
    <Layout url={'https://vimeo.com/128135792'}>
      <SEO title="Home" />
      <LeftMenu>
      </LeftMenu>
      <MidMenu >
        <div style={grid}>
          <img style={imageStyle} src={arenaLogo} />
          <img style={imageStyle} src={arena1} />
          <img style={imageStyle} src={arena2} />
          <img style={imageStyle} src={arena3} />
          <img style={imageStyle} src={arena4} />
          {/* <img style={imageStyle} src={awardsPic} /> */}
          {/* <iframe style={iFrameStyle} src="https://itch.io/embed/432?border_width=0&amp;bg_color=000000&amp;link_color=ffffff" ></iframe> */}
        </div>

      </MidMenu>
      <RightMenu>
        <h3>ARENA MONSTER ALIEN SHOOTING CHAOS</h3>
        Arena Monster Alien Shooting Chaos challenges players to chase their highest score on short games of maximum 2 minutes period with an addictive loop between every game session.
        Arena Monster Alien Shooting Chaos captures the magic of classic arcade games together with the contemporary feeling providing an outstanding mobile gaming experience. It’s a fast game, with sessions from 10” to 2’. It’s innovative, the one and only game bringing the auto-lock feature in a shooting arena: the interplanetary combat capsule Zionsk - 10119 will shoot automatically every threatening life form approaching. The resources on the arena remain on every game session thus creating an endless game session loop. Moreover, the 5 special weapons designed to endure the attacks will delight those players looking for an action game with reminiscences of the arcade glorious past.
      </RightMenu>
    </Layout>
  )
}
