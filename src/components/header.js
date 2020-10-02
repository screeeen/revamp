import React, {useState} from "react";
import Link from "gatsby-link";
import logo from "../images/sc_anim_glitch-2.gif";
import { LogoWrapper, HeaderWrapper } from "./styled/styledLayout";



  const options = [
    { name:'ARENA',link:'/arena'},
   { name:'SURFIZE',link:'/surfize'},
   { name:'DESERT PEEKABOO',link:'/desert'},
   { name:'DOWNHILL*',link:'/downhill'},
   { name:'OUTPUT',link:'/output'},
  ];
  

export default () => {
  const initialState = ''
  const [selected,setSelected] = useState(initialState) // this shit is not workin

  console.log('hola');

  return(  
  <HeaderWrapper>
    
    <li>
      <a to="/">
        <LogoWrapper src={logo} alt="" />
      </a>
    </li>
    {console.log(selected)}
    {options.map((option) => (    
    <li 
      key={option.name} 
      onClick = {()=>setSelected(option.name)}
      selected={option.name === selected ? 'selected' : ''}>
      <Link to={option.link}>
         {option.name}
      </Link>
    </li>
    ))}

    {/* <li>
      <Link to="/arena">ARENA</Link>
    </li>
    <li>
      <Link to="/surfize">SURFIZE</Link>
    </li>
    <li>
      <Link to="/desert">DESERT PEEKABOO VR</Link>
    </li>
    <li>
      <Link to="/downhill">DOWNHILL</Link>
    </li>
    <li>
      <Link to="/output">OUTPUT</Link>
    </li> */}
    {/* <li>
      <Link to="/presskit">PRESSKIT</Link>
    </li>
    <li>
      <Link to="/devlog">DEVLOG</Link>
    </li> */}
  </HeaderWrapper>)
};


