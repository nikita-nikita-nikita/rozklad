import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import LoginPage from "../../pages/loginPage";

const Routing:React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/table"/>
                </Route>
                <Route path="/login" component={LoginPage}/>
            </Switch>
        </Router>
    )
};

export default Routing;
