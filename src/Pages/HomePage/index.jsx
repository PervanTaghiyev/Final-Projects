import React from 'react'
import "./index.scss"

const HomePage = () => {
  return (
    <div className="banner">
        <div className="banner-type">
            <h1>Select Your New Perfect Style</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolor.</p>
            <button><h2>SHOP NOW</h2></button>
        </div>
        <div className="image">
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage