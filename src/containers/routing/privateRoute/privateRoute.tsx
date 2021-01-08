import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect, MapStateToProps} from "react-redux";
import {StateType} from "../../../store";
import { User } from "../../../reducers/userReducer/reducer";

type PrivateRouteProps = {
    user:User|null
};

const PrivateRoute:React.FC<PrivateRouteProps> = ({user, ...props}) =>
    !user ? <Redirect to="/tableview"/> : <Route {...props}/>;

const mapStateToProps:MapStateToProps<PrivateRouteProps,any,StateType> = ({user:{user}} )=> ({
    user
});

export default connect(mapStateToProps)(PrivateRoute);
