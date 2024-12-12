import { IoIosMenu, IoIosHeartEmpty, IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import './index.css'

const Navbar = () => (
    <>
    <div className='navbar-container'>
        <div className="navbar">
            <div className="logo-container">
                <IoIosMenu size="20" className="menu-icon" />
                <img src="https://res.cloudinary.com/demx1ym4x/image/upload/v1733933828/Vector_ikpgua.png" className='main-logo' alt="main-logo" />
            </div>
            <h1 className="logo-text">LOGO</h1>
            <div className="navbar-icons">
                <span className="navbar-icon"><FiSearch /></span>
                <span className="navbar-icon"><IoIosHeartEmpty /></span>
                <span className="navbar-icon"><BsHandbag /></span>
                <span className="navbar-icon"><CgProfile /></span>
                <p className="eng-icon">ENG <span> <IoIosArrowDown /></span></p>
            </div>
        </div>
    </div>
    <nav className="nav-links">
        <ul className="nav-list">
          <li><a href="#shop" className="nav-item">SHOP</a></li>
          <li><a href="#skills" className="nav-item">SKILLS</a></li>
          <li><a href="#stories" className="nav-item">STORIES</a></li>
          <li><a href="#about" className="nav-item">ABOUT</a></li>
          <li><a href="#contact" className="nav-item">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="heading-container">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br /> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
    </>
)

export default Navbar