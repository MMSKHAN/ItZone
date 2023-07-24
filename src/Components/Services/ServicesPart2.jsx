import React from 'react'
import ProductArray from '../Home/ProductArray'
import "./Services.css"
import { ArrowRightCircleFill } from 'react-bootstrap-icons'
function ServicesPart2() {
  return (
    <div className='ServicesPart2'>
        <div className="ServicesPart1text">
        <h6>Our Services</h6>
        <p></p>
        </div>
<div className="services-card_header row ">
    {
        ProductArray.map((items)=>{
            return(
                <div className="col-sm-4 mt-5">
                    <div className="card-body p-3">
                        <div className="Services_Part4_imgs">
                            <img src={items.img} alt="Producrs" />
                        </div>
                        <div className="ServicesTitle">
                            {items.title}
                        </div>
                        <div className="Services_Part4_content">
                            {items.content}
                        </div>
                        <a href='/' className="Services_4btn">
                           <span> {items.button}</span>
                            <span className='Services_arrow' ><ArrowRightCircleFill/></span>
                        </a>
                    </div>
                </div>
            )
        })
    }
</div>
    </div>
  )
}

export default ServicesPart2