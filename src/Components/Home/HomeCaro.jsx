import { useEffect,useState } from "react"
import Caro from "./Caro"
function HomeCaro() {
    const [imgIndex,setImgIndex]=useState(0);
    useEffect(()=>{
        const interval = setInterval(() => {
                    setImgIndex((prevIndex) =>
                         (imgIndex + 1) % Caro.length
                       );
                     }, 5000);
                
                 return () => clearInterval(interval);
    },[imgIndex])
  return (
    <>
    <div className="slid">
        <img src={Caro[imgIndex].img1} alt="dafewrdf" />
        
        </div>
    
    </>
  )
}

export default HomeCaro