import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import './index.css'

import React from "react";


const Footer = () => (
    <footer className="footer">
        <div className="upper-part">
            <div className="footer-section newsletter">
                <h4>BE THE FIRST TO KNOW</h4>
                <p>Sign up for updates from mettā muse.</p>
                <form className="newsletter-form">
                <input type="email" placeholder="Enter your e-mail..." className='input-email' />
                <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
            
            <div className="footer-section contact">
                <h4>CONTACT US</h4>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
                <div className="currency">
                <h4>CURRENCY</h4>
                <div className="usd-container">
                <img src="https://res.cloudinary.com/demx1ym4x/image/upload/v1734017342/United_States_of_America_US_zejxdd.png" alt="USA" />
                    <p>USD</p>
                    </div>
                <span>
                    Transactions will be completed in Euros and a currency reference is
                    available on hover.
                </span>
                </div>
            </div>
      </div>
      <hr className='separation-line' />
      <div className="bottom-part">
        <div className="footer-section links">
            <div>
                <h4>mettā muse</h4>
                <ul>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                </ul>
            </div>
            <div>
                <h4>QUICK LINKS</h4>
                <ul>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
      </div>
      
      <div className="footer-section social">
        <h4>FOLLOW US</h4>
        <div className="social-icons">
          <a href="#instagram"><IoLogoInstagram  size="20" /></a>
          <a href="#linkedin"><TiSocialLinkedinCircular size="20"/></a>
        </div>
        <h4>mettā muse ACCEPTS</h4>
        <div className="payment-icons">
          <img src="https://res.cloudinary.com/demx1ym4x/image/upload/v1734017368/Group_136188_cxv0wr.png" alt="gpay" />
          <img src="https://res.cloudinary.com/demx1ym4x/image/upload/v1734017398/Group_136190_fx0ndf.png" alt="visa"/>
          <img src="https://res.cloudinary.com/demx1ym4x/image/upload/v1734017424/Group_136192_tujlny.png" alt="master-card" />
          <img src="https://res.cloudinary.com/demx1ym4x/image/upload/v1734017449/Group_136193_krr7r0.png" alt="amex" />
          <img src="https://res.cloudinary.com/demx1ym4x/image/upload/v1734017477/Group_136194_yg6dbp.png" alt="apple-pay" />
          <img src="https://res.cloudinary.com/demx1ym4x/image/upload/v1734017498/Group_136195_ovjgi6.png" alt="shop-pay" />
        </div>
      </div>
      </div>
      <div className="footer-section copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  )





export default Footer