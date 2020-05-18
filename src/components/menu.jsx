import React from 'react'
import Link from 'gatsby-link'

export default function Menu() {
  return (
    <>
      <ul style ={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        <li><Link to=''>HOME</Link></li>
        <li><Link to='/arena'>ARENA</Link></li>
        <li><Link to='/surfize'>SURFIZE</Link></li>
        <li><Link to='/desert'>DESERT PEEKABOO VR</Link></li>
        <li><Link to='/downhill'>DOWNHILL*</Link></li>
        <li><Link to='/output'>OUTPUT</Link></li>
        <li><Link to='/presskit'>PRESSKIT</Link></li>
        <li><Link to='/devlog'>DEVLOG</Link></li>
      </ul>
    </>
  )
}
