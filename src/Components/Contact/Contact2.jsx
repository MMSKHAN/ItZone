import React from 'react'
import {  TelephoneFill, GeoAltFill, EnvelopeAtFill,Clock,DoorClosed } from 'react-bootstrap-icons'
function Contact2() {
  return (
    <>
    <div className="container-fluid  bg-white p-5">
        <div className="row  mb-5 ">
            <div className="col-sm-12  text-center">
            <h2 >Find us Here!</h2>
            </div>
            </div>

            <div className="row">
                <div className="col-sm-6"> 
<div className="mapwrapper "  >
<iframe title='my location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861.9830667637724!2d71.51441376378396!3d30.21048057565426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b342f94c2bf5b%3A0xb2567d9a29235313!2sChowk%20Kumharanwala%20Level-1%20Flyover%2C%20Qaiserabad%2C%20Multan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1689832359472!5m2!1sen!2s" width="500" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>
                </div>
                <div className="col-sm-6">


   
    <div className="contect-head">
        <h2 className='txt-center  ' >Visit Our Office</h2>
<p><span  ><EnvelopeAtFill className='icon_size' /></span>  msaudkhan18@gmail.com</p>
<p> <span><TelephoneFill  className='icon_size' /> </span> <span> +923218304691  </span> </p>
<p> <span><GeoAltFill className='icon_size' /> </span> <span>Plo # 26  Chowk Kumharawala  Multan </span> </p>
    </div>
    <div className="contect-bottom">
    <h2 className='txt-center  '  >working Time   </h2>
<p> <span><Clock className='icon_size' /></span> <span>Mon. - Fri. 9 am to 6 pm</span> </p>
<p> <span><DoorClosed className='icon_size' /></span> <span>Saturday</span> </p>
<p> <span><DoorClosed className='icon_size' /></span> <span>Sunday</span> </p>
    </div>
</div>

                </div>
       
            </div>

    
    </>
  )
}

export default Contact2