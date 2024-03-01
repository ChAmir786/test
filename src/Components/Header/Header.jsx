import React from 'react'
import './Header.css'
import img1 from "../Images/cherries.jpg"
import img2 from "../Images/sandwich.jpg"
import img3 from "../Images/steak.jpg"
import img4 from "../Images/wine.jpg"
const Header = () => {
  return (
    <>
    <div className="Container">
        <div className="row Content">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
             <img src={img1} alt="" />  
             <div className="images-tesxt">
             <h4>The Perfect cherries, A Real NYC Classic</h4> 
             <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
             </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img src={img2} alt="" />
                <div className="images-tesxt">
             <h4>The Perfect Sandwich, A Real NYC Classic</h4> 
             <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
             </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img src={img3} alt="" />
                <div className="images-tesxt">
             <h4>The Perfect steak, A Real NYC Classic</h4> 
             <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
             </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img src={img4} alt="" />
                <div className="images-tesxt">
             <h4>The Perfect wine, A Real NYC Classic</h4> 
             <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
             </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Header