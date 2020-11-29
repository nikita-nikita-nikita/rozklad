import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect, MapStateToProps} from "react-redux";
import {StateType} from "../../../store";

type PrivateRouteProps = {
    group:string|null
};

const PrivateRoute:React.FC<PrivateRouteProps> = ({group, ...props}) =>
    !group ? <Redirect to="/login"/> : <Route {...props}/>;

const mapStateToProps:MapStateToProps<{group:string|null},any,StateType> = ({user} )=> ({
    group :user.group
});

export default connect(mapStateToProps)(PrivateRoute);
