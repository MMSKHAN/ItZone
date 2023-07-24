import React from 'react'
// import Particals from '../Particals/Particals'
import AboutPart1 from './AboutPart1'
import "./About.css"
import AboutPart2 from './AboutPart2'
import AboutPart3 from './AboutPart3'
import AboutPart4 from './AboutPart4'
import AboutPart5 from './AboutPart5'
function About() {
  return (<>
    <div className="cntainer-fluid">
        <AboutPart1  />
        <AboutPart2/>
        <AboutPart4/>
        <AboutPart3/>
        <AboutPart5/>
         </div>
         </>)
}

export default About