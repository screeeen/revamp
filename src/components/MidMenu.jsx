import React from 'react';


const centroStyle = { 
  border: '4px solid red',
boxSizing:'content-box',
textAlign: 'center',
// display:'flex',
// flexFlow: 'column nowrap',
// justifyContent: 'space-between',
// alignItems: 'start',
flex: '1 1 60%',
 }


export default function MidMenu({ children }) {
  return (
    <div style={centroStyle}>
     {children}
    </div>
  );
}
