import React from "react";

import './NavbarDropDown.scss'

import profile from '../../../assets/images/profile.jpg'

const NavbarDropDown: React.FC = () => {
    return (
        <div className='header__navbar-dropdown'>
            <div className='header__navbar-body'>
                <img src={profile} alt='profile'/>
                <button className='icon' />
            </div>
        </div>
    )
}

export default NavbarDropDown;