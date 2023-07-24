import React from 'react'

import "./Home.css"
import HomePart1 from './HomePart1'
// import HomePart2 from './HomePart2'
import HomePart4 from './HomePart4'
// import Cursor from '../Cursor/Cursor'
import HomePart5 from './HomePart5'
import HomePart6 from './HomePart6'
import HomePart7 from './HomePart7'
import HomeCaro from './HomeCaro'
function Home() {
  return (
    <>

      <div className="container-fluid p-0">

  <HomeCaro/>
     <HomePart1/>
        {/* <HomePart4/> */}
        <HomePart6/>

        <HomePart5/>
        <HomePart7/>
      </div>
    </> )
}

export default Home