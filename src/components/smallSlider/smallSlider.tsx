import React, {useEffect, useRef} from "react";
import "./smallSliderStyles.scss";

type NavbarSliderTypes = {
    enumerated:string[],
    switchLeft?: ()=>void,
    switchRight?: ()=>void,
    index:number
}

const SmallSlider:React.FC<NavbarSliderTypes> = (
    {
        enumerated,
        switchLeft,
        switchRight,
        index}) => {
    const sliderRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        console.log(index)
        sliderRef.current.scrollTo(200*index,0);
    },[index]);
    const slideLeft = () => {
        if(typeof switchLeft === "function") switchLeft();
    }
    const slideRight = () => {
        if(typeof switchRight === "function") switchRight();
    }
    return(
        <div className="small-slider">
            <button className="slider-arrow left" onClick={slideLeft}/>
            <div className="slider-elements" ref={sliderRef}>
                <div className="slider-track" >
                    {
                        enumerated.map(elem => (<div className="slider-elem">{elem}</div>))
                    }
                </div>
            </div>
            <button className="slider-arrow right" onClick={slideRight}/>
        </div>
    )
};

export default SmallSlider
