import React from "react";
import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import PrivateRoute from "./privateRoute/privateRoute";
import ProtectedRoute from "./protectedRoute";
import PublicRoute from "./publicRoute";
import LoginPage from "../../pages/loginPage";
import TimetablePage from "../../pages/timetablePage";

const Routing:React.FC = () => {
    return (
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/timetable"/>
                </Route>
                <PrivateRoute path="/timetable" component={TimetablePage}/>
                <ProtectedRoute path="/table" component={() => <h1>Table page</h1>}/>
                <PublicRoute path="/login" component={LoginPage}/>
            </Switch>
    )
};

export default Routing;
