import React from "react";
import {connect} from "react-redux";
import SmallSlider from "../../smallSlider";
import {MapStateToProps} from "react-redux";
import {StateType} from "../../../store";
import {incrementMonth, decrementMonth} from "../../../reducers/dateReducer/actions";

const monthsArr = [
    "Січень","Лютий",
    "Березень","Квітень","Травень",
    "Червень","Липень","Серпень",
    "Вересень","Жовтень","Листопад",
    "Грудень"
];
type NavbarSliderType = {
    date:Date,
    incrementMonth:()=>void,
    decrementMonth:()=>void,
}
const NavbarSlider:React.FC<NavbarSliderType> = ({date, incrementMonth, decrementMonth}) => {
    return <SmallSlider
        enumerated={monthsArr}
        index={date.getMonth()}
        switchLeft={decrementMonth}
        switchRight={incrementMonth}
    />
}

const mapStateToProps: MapStateToProps<{ date: Date }, any, StateType> = ({date}) => ({
    date: date.date
});

const mapDispatchToProps = {
    incrementMonth,
    decrementMonth
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSlider);
