import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div >
      <p>video</p>
    </div>
    <div style={{
      display: 'flex'
    }}>
      <div style={{
        border: '1px solid white',
        flex: '1'
      }}>
        <h3>SCREEN IMPLOSION</h3>
        <p>Screen Implosion is a games label and producer of classic arcade games with a contemporary twist.
      Screen Implosion is based in Berlin and founded in 2015</p>
        <h3>SUBSCRIBE NOW</h3>
        <p>news, chronicles and easter eggs!!</p>
        {/* <form onSubmit={null}>
          <label HTMLfor='mail'>
          <input type="mail" name ='mail' value='mail' placeholder='Enter your email here' onChange={null} />
          </label>
          <input type='submit' value='Submit'>Subscribe</input>
        </form> */}
        <form>
          <label>
            Name:
    <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h3>OTHER GAMES</h3>
        <Link to=''><img src="" alt="" /></Link>
        <Link to=''><img src="" alt="" /></Link>
      </div>
      <div style={{
        border: '1px solid white',
        flex: '1'
      }}>centro</div>
      <div style={{
        border: '1px solid white',
        flex: '1'
      }}>
        <h3>DOWNHILL* CHAPTER ONE (iOS / ANDROID)</h3>
        <p>Downhill* is an endless free fall on a minimal landscape full strange sculptures and environments. A game with extraordinary graphics and addictive gameplay.</p>
        <p>◊◊◊◊◊◊</p>
        <p>Features:</p>

        <ul>
          <li>* Fast & Smooth Scrolling Action</li>
          <li>* Beautiful Architecture Graphics</li>
          <li>* Avant-Garde Tunes</li>
          <li>* Special Stages</li>
          <li>* Game Center Support</li>
          <li>* Easter Eggs!</li>
        </ul>
        <ul>
          <li>* Official Selection Tokio Game Show 2016</li>
          <li>* Official Selection Radius festival Wien 2016</li>
          <li>* Official Selection Game Happens! Genoa 2016</li>
          <li>* Official Selection AZPlay Bilbao Spain 2015</li>
          <li>* Official Selection Busan Indie Connect South Korea 2015</li>
          <li>* Official Selection Casual Connect Tel Aviv 2015</li>
          <li>* Official Selection AZPlay Bilbao Spain 2015</li>
        </ul>
      </div>
    </div>
  </Layout >
)

export default IndexPage
