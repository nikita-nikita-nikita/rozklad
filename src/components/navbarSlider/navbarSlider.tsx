import React from "react";
import "./monthSliderStyles.scss";

type Month = {
    name:string
    order:number
}

type NavbarSliderTypes = {
    enumerated:Month[]
}

const NavbarSlider:React.FC<NavbarSliderTypes> = ({enumerated}) => {
    return(
        <div className="months-slider">
            <button className="slider-arrow left"/>
            <button className="slider-arrow right"/>
        </div>
    )
};

export default NavbarSlider
