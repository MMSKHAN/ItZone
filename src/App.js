import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import Home from './Components/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Components/About/About'
import Services from './Components/Services/Services'

import Blogs from './Components/Blogs/Blogs'
import Contact from './Components/Contact/Contact'
import Navigation from './Components/Navigation/Navigation'
// import '../node_modules/bootstrap/js/src'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Footer from './Components/Footer/Footer'
import Admin from './Admin/Admin';
function App() {
  return (<>
    {/* <Cursor/> */}
    <BrowserRouter>
    <Navigation/>
<div style={{ position:"relative", top: "150vh"}}>
      <ScrollToTop smooth color={"green"} />
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path="/Blogs" element={<Blogs />}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="*" element={<Home/>} />
      
    </Routes>
        {/* <Cursor/> */}
    <Footer/>
   </BrowserRouter>
  </> )
}

export default App
