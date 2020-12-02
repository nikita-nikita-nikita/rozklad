import React from "react";
import "./navbarStyles.scss";
import NavbarSlider from "./NavbarSlider";

const Navbar:React.FC = () => {
    return (
        <nav className="header__navbar">
            <NavbarSlider />
        </nav>
    )
}

export default Navbar;
