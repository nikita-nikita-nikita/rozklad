import React from "react";
import {
    Switch,
    Redirect
} from "react-router-dom";
import PrivateRoute from "./privateRoute/privateRoute";
import PublicRoute from "./publicRoute";
import LoginPage from "../../pages/loginPage";

const Routing:React.FC = () => {
    return (
            <Switch>
                <PrivateRoute path="/" exact>
                    <Redirect to="/table"/>
                </PrivateRoute>
                <PublicRoute path="/login" component={LoginPage}/>
            </Switch>
    )
};

export default Routing;
