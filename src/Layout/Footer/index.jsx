import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

const Footer = () => {
  return (
    <div className="foot">
      <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus autem vero quo?</p>
      <div className="footer">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Offers & Discounts</NavLink>
          </li>
          <li>
            <NavLink>Get Coupon</NavLink>
          </li>
          <li>
            <NavLink>Contact Us</NavLink>
          </li>
        </ul>
        
      </div>
      <div className="footers">
          <h3>New Products</h3>
          <ul>
            <li>
              <NavLink>Woman Cloth</NavLink>
            </li>
            <li>
              <NavLink>Fashion Accessories</NavLink>
            </li>
            <li>
              <NavLink>Man Accessories</NavLink>
            </li>
            <li>
              <NavLink>Rubber made Toys</NavLink>
            </li>
          </ul>

        
        </div>
        <div className="header-footer">
            <h3>Support</h3>
            <ul>
              <li>
                <NavLink>Frequently Asked Questions</NavLink>
              </li>
              <li>
                <NavLink>Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink>Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink>Report a Payment Issue</NavLink>
              </li>
            </ul>

          </div>
    </div>
  )
}

export default Footer