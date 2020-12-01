import React from "react";
import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import PrivateRoute from "./privateRoute/privateRoute";
import PublicRoute from "./publicRoute";
import LoginPage from "../../pages/loginPage";

const Routing:React.FC = () => {
    return (
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/timetable"/>
                </Route>
                <PrivateRoute path="/timetable" component={()=><h1>Timetable</h1>}/>
                <PublicRoute path="/login" component={LoginPage}/>
            </Switch>
    )
};

export default Routing;
