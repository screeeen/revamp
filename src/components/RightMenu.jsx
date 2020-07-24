import React from 'react';


export const projectContent ={
  arena : `<h3>DOWNHILL* CHAPTER ONE (iOS / ANDROID)</h3>
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
</div>`
}

export default function RightMenu() {
  return (
    <div style={{ border: '1px solid white', width: '20%' }}>
      {projectContent.arena}
      </div>
  );
}
