import React from "react";
import SmallSlider from "../../smallSlider";
import {connect, MapStateToProps} from "react-redux";
import {StateType} from "../../../store";
import {changeWeek} from "../../../reducers/dateReducer/actions";

const weeksArr = [
    "Перший", "Другий"
];

type WeekSliderProps = {
    weekIndex: 0 | 1
    changeWeek: () => void
}

const WeekSlider: React.FC<WeekSliderProps> = ({weekIndex, changeWeek}) =>
    <SmallSlider
        enumerated={weeksArr}
        index={weekIndex}
        switchLeft={changeWeek}
        switchRight={changeWeek}
    />;

const mapStateToProps: MapStateToProps<{ weekIndex: 0 | 1 }, any, StateType> = ({date}) => ({
    weekIndex: date.weekIndex
});

const mapDispatchToProps = {
    changeWeek
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekSlider);
