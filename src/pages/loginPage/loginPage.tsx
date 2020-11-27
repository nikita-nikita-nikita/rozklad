import React from "react";
import "./loginPageStyles.scss";
import loginGirl from "../../assets/images/login-girl.png";

const LoginPage:React.FC = () => {
    return(
        <div className="login-page">
            <div className="login-page__inputs-container">
                <div className="login-page__input-block login-page__telegram-login-button">Login with telegram</div>
                <input className="login-page__input-block login-page__group-input"/>
            </div>
            <img className="login-page__login-girl" src={loginGirl}/>
        </div>
    )
}

export default LoginPage;
