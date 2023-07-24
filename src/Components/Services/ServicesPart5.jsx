import React from 'react'
import img from "../Asserts/b5.jpg"
import { Dot } from 'react-bootstrap-icons'
function ServicesPart5() {
  return (
    <div className="container-fluid">
      <p className='ServicesPart5' > <p> Latest Services</p> <span></span> </p>
      <div className="row">
        <div className="col-sm-6 leftside">
         <div className="webtext">
       </div>
        <div className="chidpart5">
          <p><Dot className='dot' /> </p> <p>  Problem Solving our Technical it team will help you to find the solution of latest problems</p>
        </div>
        <div className="chidpart5">
          <p><Dot className='dot' /> </p> <p>  Problem Solving our Technical it team will help you to find the solution of latest problems</p>
        </div>
        <div className="chidpart5">
          <p><Dot className='dot' /> </p> <p>  Problem Solving our Technical it team will help you to find the solution of latest problems</p>
        </div>
        <div className="chidpart5">
          <p><Dot className='dot' /> </p> <p>  Problem Solving our Technical it team will help you to find the solution of latest problems</p>
        </div>
        <div className="chidpart5">
          <p><Dot className='dot' /> </p> <p>  Problem Solving our Technical it team will help you to find the solution of latest problems</p>
        </div>
        </div>
        <div className="col-sm-6">
          <div className="ServicesPart5img"><img src={img} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPart5