import React from "react";
import "./navbarStyles.scss";
import NavbarSlider from "../navbarSlider";

const Navbar:React.FC = () => {
    return (
        <nav className="header__navbar">
            <NavbarSlider enumerated={[]}/>
        </nav>
    )
}

export default Navbar;
