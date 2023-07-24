import "./Nav.css"
import Logos from "../Asserts/2.png"

import React,{useState} from 'react'
import NavArray from './NavArray'
import { NavLink } from 'react-router-dom'
function Navigation() {
  const [size,setSide]=useState(false)
  const [navcolor,setNavColor]=useState(false)
  const clicked=()=>{
  if(size===false){
      setSide(true)
  }else{
      setSide(false)
  }
  }
const scrolled=()=>{
  if(window.screenY >=90){
    console.log("80px")
    setNavColor(true)
  }else{
    setNavColor(false)
  }
}
window.addEventListener('scroll',scrolled);


  return (
    <>
<div className={navcolor?"back":"navcontainer "}>    
    <nav className={navcolor? "back":"navbar navbar-expand-lg  p-3"}>
  <a className="navbar-brand" href="lhyd#"><img src={Logos} alt="logo" /></a>
   <div className='button navbar-toggler' style={{border:"none"}} onClick={clicked}  data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <div className={size?"bar11":"bar1"}></div>
        <div className={size?"bar12":"bar2"}><div className="span1"></div> <div className="span2"></div> </div>
        <div className={size?"bar13":"bar3"}></div>
    </div>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav m-auto ml-auto">
      {
        NavArray.map((items)=>{
          return(
            <li className="nav-item  m-auto">
            <NavLink   activeClassName="active-link" id="navLink" to={items.to}>{items.name}</NavLink>
            <div className="navline" ></div>
          </li>
          )
        })
      }
    </ul>
  </div>
</nav>
</div>

    </>
  )
}

export default Navigation