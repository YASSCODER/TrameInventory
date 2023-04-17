import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQrcode, faHouse} from '@fortawesome/free-solid-svg-icons'
import './navBar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from'../../assets/logoHR.svg';
import trame from'../../assets/LOGOTRAME.svg';
const NavBar =  () => {
return (
    <div className="navBar">
        <div className="navBar__links">
            {/* image div */}
            <div className="navBar__links_logo">
                <img src={trame} alt="logo" />
            </div>
            <div className="navBar_links_container">
                <FontAwesomeIcon icon={faHouse} className='icon'/>
                <a href="#">Home</a>
                <FontAwesomeIcon icon={faQrcode} className='icon'/>
                <a href="#">Inventory</a>
            </div>
        </div>
        <div className="navBar_sign">
            <a href="">Sign In</a>
            <button type="button">Sign Up</button>
        </div>
    </div>
)
}
export default NavBar;