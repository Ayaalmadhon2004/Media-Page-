import React from 'react';
import './header.css';
import image from '../images/slider-dec.png';

const Header = () => {
  return (
    <>
      <div className="container containerH">
        <div className="sub-cont1-H">
          <h3>Digital Media Agency</h3>
          <h1>We Boost Your Website Traffic</h1>
          <p>
            This template is brought to you by TemplateMo website. Feel
            <br /> free to use this for a commercial purpose. You are not allowed
            <br /> to redistribute the template ZIP file on any other template
            <br /> website. Thank you.
          </p>
          <button className="btn">Free Quote</button>
        </div>
        <div className="sub-cont2-H">
          <img src={image} alt="SEO" />
        </div>
      </div>
    </>
  );
};

export default Header;
