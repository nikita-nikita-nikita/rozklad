import React from "react";
import "./loginPageStyles.scss";
import {connect, MapStateToProps} from "react-redux";
import loginGirl from "../../assets/images/login-girl.jpg";
import {setGroup} from "../../reducers/userReducer/actions";
import {StateType} from "../../store";



const LoginPage:React.FC = () => {
    return(
        <div className="login-page">
            <div className="login-page-content">
                <div className="login-page__inputs-container">
                    {/* todo telegram */}
                    <div className="login-page__input-block login-page__telegram-login-button">Login with telegram</div>
                    <input className="login-page__input-block login-page__group-input"/>
                </div>
                <img className="login-page__login-girl" src={loginGirl}/>
            </div>
        </div>
    )
}

const mapStateToProps:MapStateToProps<{group:string|null},any,StateType> = ({user} )=> ({
    group:user.group
});
const mapDispatchToProps = {
    setGroup
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
