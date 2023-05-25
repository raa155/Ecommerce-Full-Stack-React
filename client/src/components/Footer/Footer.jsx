import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="link-item">
          <h1>Categories</h1>
          <div className="links">
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
        </div>
        <div className="link-item">
          <h1>Links</h1>
          <div className="links">
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>This store was founded on the principle of creativity.
            We thrive through colors and modern chique design. Our motto is to inspire.
            Shop with us for a better look for tomorrow!</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>This store was founded on the principle of creativity.
            We thrive through colors and modern chique design. Our motto is to inspire.
            Shop with us for a better look for tomorrow!</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Wolf Wears Sheep</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
