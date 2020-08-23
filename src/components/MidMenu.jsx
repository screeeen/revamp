import React from 'react';
import { CentroStyle } from './styled/styledLayout';


export default function MidMenu({ children }) {
  return (
    <CentroStyle>
      {children}
    </CentroStyle>
  );
}
