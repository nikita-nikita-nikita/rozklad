import React from "react";
import "./loginPageStyles.scss";
import loginGirl from "../../assets/images/login-girl.jpg";

const LoginPage:React.FC = () => {
    return(
        <div className="login-page">
            <div className="login-page-content">
                <div className="login-page__inputs-container">
                    <div className="login-page__input-block login-page__telegram-login-button">Login with telegram</div>
                    <form className="login-page__input-block login-page__group-input">
                        <input className="login-page__input-block login-page__group-input" id="group-input" required/>
                        <label htmlFor="group-input" id="group-input-label">Группа</label>
                    </form>
                </div>
                <img className="login-page__login-girl" src={loginGirl}/>
            </div>
        </div>
    )
}

export default LoginPage;
