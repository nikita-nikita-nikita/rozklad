import React from "react";
import {Route, Switch} from "react-router-dom";
import "./headerStyles.scss";
import MopsLogo from "../../assets/images/mops-logo.png";
import Navbar from "../navbar";

const Header:React.FC = () => {
    return (
        <header className="header">
            <div className="header__mops__logo">
                <img height="100%" src={MopsLogo} alt='mops'/><p>mops.</p>
            </div>
            <Switch>
                <Route path="/timetable" component={Navbar}/>
            </Switch>
        </header>
    )
}

export default Header;
