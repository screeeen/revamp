import React from 'react'

const white = {
  color:'white',
  // border:'1px solid yellow',
  padding: '10px 10px'
}

export default function Footer() {
  
  return (
<footer style={white}>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          SCREEN IMPLOSION
          {' '}
        </footer>
  )
}
