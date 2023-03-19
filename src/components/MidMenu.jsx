import React from "react";
import { CentroStyle } from "./styled/styledLayout";
import cupMinute from "./../images/cupMinute.gif";

export default function MidMenu({ children }) {
  return (
    <CentroStyle>
      {!children ? (
        <>
          <img src={cupMinute}></img>
          <h1>WELCOME FRIENDS!</h1>
        </>
      ) : (
        children
      )}
    </CentroStyle>
  );
}
