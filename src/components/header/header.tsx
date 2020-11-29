import React from "react";
import {Route, Switch} from "react-router-dom";
import "./headerStyles.scss";
import MopsLogo from "../../assets/images/mops-logo.png";

const Header:React.FC = () => {
    return (
        <header className="header">
            <img className="header__mops__logo" src={MopsLogo}/><p>mops</p>
            <Switch>
                <Route path="/timetable" component={() => (<>Hello</>)}/>
            </Switch>
        </header>
    )
}

export default Header;
