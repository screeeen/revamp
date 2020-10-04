import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import MidMenu from '../../components/MidMenu'
import LeftMenu from '../../components/LeftMenu'
import RightMenu from '../../components/RightMenu'
import { GridWithPics, Pic, GamesList, SimpleLink, GameTitle } from '../../components/styled/styledLayout'

const importAll = (r) => {
  let cache = {};
  r.keys().forEach(key => cache[key] = r(key));
  return cache;
}
export default function index() {
  const images = importAll(require.context('../../images_output', false, /\.(png|jpg|svg)$/));
  return (
    <>
      <SEO title="Output Documentary Manifesto" />
      <LeftMenu />
      <MidMenu >
        <GridWithPics>
          {Object.values(images).map((image, i) => <Pic src={image} key={i}></Pic>)}
          {/* console.log(images[0]) */}
        </GridWithPics>
        <GamesList>
          Videogames (in order of appearance)
          <SimpleLink href="http://berrygarden.mennostas.com/"><GameTitle>The Berry Garden</GameTitle>by Menno Stas NE</SimpleLink>
          <SimpleLink href="http://www.ooooovr.com/"><GameTitle> OOOOO </GameTitle>by Polysoul DE</SimpleLink>
          <SimpleLink href="http://www.wearemuesli.it/siheyu4n"><GameTitle>Siheyu4n </GameTitle>by We Are Müesli IT</SimpleLink>
          <SimpleLink href="https://www.farfromnoi.se/"><GameTitle>Far from Noise </GameTitle>by Geroge Batchelor UK</SimpleLink>
          <SimpleLink href="http://www.futureunfolding.com/"><GameTitle>Future Unfolding </GameTitle>by Spaces of Play DE</SimpleLink>
          <SimpleLink href="http://bokida.com/"><GameTitle>Bokida Hearfelt Reunion </GameTitle>by Rice Cooker Republic FR</SimpleLink>
          <SimpleLink href="http://store.steampowered.com/app/461170/agecheck"><GameTitle>Bucket Detective </GameTitle>by The Whale Husband USA</SimpleLink>
          <SimpleLink href="https://ratking.itch.io/solitude"><GameTitle>Solitune </GameTitle>by Rat King DE</SimpleLink>
          <SimpleLink href="http://molleindustria.org/gaze/"><GameTitle>A Short History Of The Gaze </GameTitle>by Molleindustria USA</SimpleLink>
          <SimpleLink href="http://steamcommunity.com/sharedfiles/filedetails/?id=852072788"><GameTitle>Fugl </GameTitle>by Team Fugl NO</SimpleLink>
          <SimpleLink href="https://www.zhdk.ch/en/news/563"><GameTitle>Playful Collisions </GameTitle>by zHdk & Cologne Gamelab DE/CH</SimpleLink>
          <SimpleLink href="http://goliathvr.com/"><GameTitle>Goliath VR </GameTitle>by Wolfgang Tschauko DE</SimpleLink>
          <SimpleLink href="https://pierrec.itch.io/magical-love-love-arcade"><GameTitle>Magical Love Love Arcade </GameTitle>by Inès Jérôme, Julie Martinez Elizabeth Maler, Baptiste Billet Amos Wenger, Pierre Corbinais, with help fro Aline Triqueneaux, Sebastien Dumetz Myriam Bechikh and Julien Berthou FR</SimpleLink>
          <SimpleLink href="http://www.oikospiel.com/"><GameTitle>OἾΚΟΣPIEL Book 1 </GameTitle>by David Kanaga USA</SimpleLink>
          <SimpleLink href="http://www.surpriseattackgames.com/portfolio-items/orwell-ignorance-is-strength/"><GameTitle>ORWELL </GameTitle>by Osmotic Studios DE</SimpleLink>
          <SimpleLink href="http://henning.website/leaks/"><GameTitle>Close The Leaks </GameTitle>by Henning Steinbock & Samuel Chapman DE</SimpleLink>
          <SimpleLink href="https://zerbamine.itch.io/noodles"><GameTitle>Noodles </GameTitle>by Zerbamine | Erwin Kho NE</SimpleLink>
          <SimpleLink href="https://www.facebook.com/karambolagame/"><GameTitle>Karambola </GameTitle>by Agata Nawrot PL</SimpleLink>
          <SimpleLink href="http://frugame.com/"><GameTitle>FRU </GameTitle>by Through Games NE</SimpleLink>
          <SimpleLink href="http://www.thewildeternal.com/"><GameTitle>The Wild Eternal </GameTitle>by Ilsanjo USA</SimpleLink>
          <SimpleLink href="https://crdmrn.itch.io/whisper"><GameTitle>Whisper </GameTitle>by CRDMRN DE</SimpleLink>
          <SimpleLink href="https://causacreations.itch.io/the-fallen"><GameTitle>The Fallen </GameTitle>by Gold Extra AT</SimpleLink>
          <SimpleLink href="http://sens.arte.tv/e"><GameTitle>Sens VR </GameTitle>by Red Corner FR</SimpleLink>
          <SimpleLink href="http://gnosisthegame.com/"><GameTitle>Gnosis </GameTitle>by Fathomable Ltd IR</SimpleLink>
          <SimpleLink href="http://vrpigeons.party/"><GameTitle>Pigeons VR </GameTitle>by Maestro Pivetta DE</SimpleLink>
          <SimpleLink href="http://cargocollective.com/q_dork/2016/Consume-Me"><GameTitle>Comsume Me </GameTitle>by Jenny Jiao Hsia USA</SimpleLink>
          <SimpleLink href="https://q_dork.itch.io/wobble-yoga"><GameTitle>Wobble Yoda </GameTitle>by Jenny Jiao Hsia USA</SimpleLink>
          <SimpleLink href="http://store.steampowered.com/app/508790/Flat_Heroes/"><GameTitle>Flat Heroes </GameTitle>by Parallel Circles UK</SimpleLink>
          <SimpleLink href="https://dziff.itch.io/floragram"><GameTitle>Floragram </GameTitle>by Armel Gibson, Théo Le Du, Maxime Conquy, Delphine Fourneau FR</SimpleLink>
          <SimpleLink href="http://sewergadget.tumblr.com/flippaper_eng"><GameTitle>Flippaper </GameTitle>by Jérémie Cortial + Roman Miletitch FR</SimpleLink>
          <SimpleLink href="http://www.everything-game.com/"><GameTitle>Everything </GameTitle>by David OReilly USA</SimpleLink>
          <SimpleLink href="http://unicornycopia.com/"><GameTitle>Everything is going to Be Ok </GameTitle>by Nathalie Lawhead USA</SimpleLink>
          <SimpleLink href="http://perfectlyparanormal.com/"><GameTitle>Manual Samuel </GameTitle>by Perfectly Paranormal NO</SimpleLink>
          <SimpleLink href="http://vinylos.io/"><GameTitle>Vynil OS</GameTitle>by Josef Who? & Jonas Bo! AT</SimpleLink>
      <p>--------◊◊◊◊--------</p>
      <p>Screening Agenda</p>
      <SimpleLink href="http://www.amaze-johannesburg.co.za/"> 13/10/2017 @ A Maze./Johannesburg 2017</SimpleLink>
        <SimpleLink href="http://www.azplaybilbao.com/"> 28/11/2017 @ AZPlay Bilbao</SimpleLink>
        <SimpleLink href="https://www.screenshake.be/"> 2018 @ Screenshake Antwerp</SimpleLink>
        <SimpleLink href="http://amaze-berlin.de/"> 26/4/2018 @ A Maze./Berlin</SimpleLink>
      <p>--------◊◊◊◊--------</p>
        <font color="gray">Interested in screening OUTPUT?</font>
        <font color="gray">Write me to: info <i>at</i><SimpleLink href="http://screenimplosion.com/"> screenimplosion</SimpleLink> <i>dot</i> com </font>
      <p>--------◊◊◊◊--------</p>
    </GamesList>
      {/* <a href="http://www.screenimplosion.com"> <img src="logo.png"></img></a> */}
  </MidMenu >
      <RightMenu>
        <h3>OUTPUT</h3>
        <p>A manifesto about computer arts and games made by Miguel Alva with the help of Diego Delgado, Sara Besnard and music of Volta x Suite
      Filmed during A Maze./Berlin April from 23rd till 28th 2017 To be viewed by April 2067.</p>
      </RightMenu>
    </ >
    );
}
