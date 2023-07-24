import React from 'react'
import { Telegram } from 'react-bootstrap-icons'

function Contact3() {
  return (
<>
<div className="contact3-container  container-fluid ">
    <div className="row"> <div className="col-sm-12">
        
        <h2 className='text-center text-white py-5' > Send Your Quiery </h2>
        
        </div> </div>


    <form>
<div className="row1">
  <div className='name' >  <p > <b>Name</b> </p> <input type="text" placeholder='Name'  />
  <div className="line2"></div>
  </div>
  <div className='name' >  <p ><b> Email</b> </p> <input type="email" placeholder='Email' /> 
  <div className="line2"></div>
  
  </div>
 
</div>
<div className="row2">
  
        <p > <b>Subject</b> </p>
        <input type="text" placeholder='Your Subject' />
        <div className='line' ></div>
  
    </div>
    <div className="row3">

        <p> <b>Message</b> </p>
        <input type="text" placeholder='How can we serve you' />
        <div className='line' ></div>
    </div>
    <div className="row4">

        <p > <b>Resume</b></p>
        <input type="File" placeholder='Resume'  />
        <div className='line' ></div>

    </div>
    <div className="send_button"> <Telegram className='telegram' />  Send</div>

</form>
</div>

</>
  )
}

export default Contact3