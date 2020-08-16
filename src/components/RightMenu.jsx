import React from 'react';




export default function RightMenu({ children }) {
  const rightMenuStyle = {
    // border: '1px solid white',
    flex: '1 1 20%'
  }

  return (
    <div style={rightMenuStyle}>
      {children}
    </div>
  );
}
