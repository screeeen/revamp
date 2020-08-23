import React from 'react';
import { SideMenuStyle } from './styled/styledLayout';

export default function RightMenu({ children }) {

  return (
    <SideMenuStyle>
      {children}
    </SideMenuStyle>
  );
}
