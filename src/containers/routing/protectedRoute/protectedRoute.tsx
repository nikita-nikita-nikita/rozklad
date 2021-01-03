import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect, MapStateToProps} from "react-redux";
import {StateType} from "../../../store";

type ProtectedRouteProps = {
  group:string|null
};

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({group, ...props}) =>
  !group ? <Redirect to="/login"/> : <Route {...props}/>;

const mapStateToProps:MapStateToProps<ProtectedRouteProps,any,StateType> = ({user:{user, group}} )=> ({
  group
});

export default connect(mapStateToProps)(ProtectedRoute);
