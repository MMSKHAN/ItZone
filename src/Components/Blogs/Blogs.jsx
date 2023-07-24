import React from 'react'
import Blog from './Blog';
import "./Blogs.css";
function Blogs() {
  return (
    <>
    <div className="container-fluid">



    {
      Blog.map((items)=>{
        return(
          <div className="row">
            <div className="col-sm-6 p-5 ">
              <img src={items.img1} className='blogimg' alt="" />
            </div>
            <div className="col-sm-6 p-5 text-light">
              <h2 className='BlogTitle' >{items.Title}</h2>
              <p className='Blogtext' >{items.text} </p>
              <button className='BlogButton' >{items.button }  <p></p> </button>
            </div>
            
          </div>

        )
      })
    }
    </div>
    
    
    
    </>
  )
}

export default Blogs