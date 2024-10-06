import React from 'react';
import "./slider.css";

const Slider = () => {
  return (
   <>
     <div className="containerS2 container">
        <h3>Get Your Free Quote</h3>
        <h1>Grow With Us Now</h1>
        <div className="input-group">
          <input type="text" placeholder="Your Website URL"/>
          <input type="email" placeholder="Email Address"/>
          <button>Get Quote Now</button>
        </div>
     </div>
   </>
  );
}

export default Slider;
