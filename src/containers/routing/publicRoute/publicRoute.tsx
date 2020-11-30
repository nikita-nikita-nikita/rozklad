import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect, MapStateToProps} from "react-redux";
import {StateType} from "../../../store";

type PublicRouteProps = {
    group:string|null
};

const PublicRoute:React.FC<PublicRouteProps> = ({group, ...props}) =>
    group ? <Redirect to="/timetable"/> : <Route {...props}/>;

const mapStateToProps:MapStateToProps<{group:string|null},any,StateType> = ({user} )=> ({
    group:user.group
});

export default connect(mapStateToProps)(PublicRoute);
