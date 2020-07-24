import React from 'react';


const centroStyle = { border: '1px solid white', flex: '1' }


export default function MidMenu({text}) {
  return (
    <div style={centroStyle}>
      <p>{text}</p>
    </div>
  );
}
