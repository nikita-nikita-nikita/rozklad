import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect, MapStateToProps} from "react-redux";
import {StateType} from "../../../store";
import { User } from "../../../reducers/userReducer/reducer";

type PrivateRouteProps = {
    user:User|null,
    group: string
};

const PrivateRoute:React.FC<PrivateRouteProps> = ({user, group, ...props}) =>
    !user && group ? <Redirect to="/tableview"/> : <Route {...props}/>;

const mapStateToProps:MapStateToProps<PrivateRouteProps,any,StateType> = ({user:{user, group}} )=> ({
    user,
    group
});

export default connect(mapStateToProps)(PrivateRoute);
