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
import TableviewPage from "../../pages/tableview";

const Routing:React.FC = () => {
    return (
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/timetable"/>
                </Route>
                <Route path="/timetable" component={TimetablePage}/>
                <Route path="/tableview" component={TableviewPage}/>
                <PublicRoute path="/login" component={LoginPage}/>
            </Switch>
    )
};

export default Routing;
