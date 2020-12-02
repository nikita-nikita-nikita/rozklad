import React, {useEffect, useState} from "react";
import "./loginPageStyles.scss";
import {connect, MapStateToProps} from "react-redux";
import loginGirl from "../../assets/images/login-girl.jpg";
import {setGroup, setUser} from "../../reducers/userReducer/actions";
import {StateType} from "../../store";
import TelegramButton from "../../components/TelegramButton"
import {TelegramResponse} from "../../reducers/userReducer/reducer";
import {useGroupService} from "../../api/context/groupContext";


const LoginPage: React.FC = () => {
    const onAuth= (user : TelegramResponse)=>{
        // request to API
    }
    const [groups, setGroups] = useState<string[]>([]);
    const groupService = useGroupService();
    useEffect(() => {
        groupService.getGroups().then(({data}) => setGroups(data))
    }, []);
    return (
        <div className="login-page">
            <div className="login-page-content">
                <div className="login-page__inputs-container">
                    {/*<div className="login-page__input-block login-page__telegram-login-button">Login with telegram</div>*/}
                    <TelegramButton
                        botName="RozkladDevelopment_bot"
                        buttonSize="large"
                        className="login-page__input-block"
                        cornerRadius={10}
                        usePic={true}
                        lang="en"
                        dataOnauth={onAuth}
                    />
                    <form className="login-page__group-choose-block">
                        <div className="login-page__input-block">
                            <input className="login-page__input-block login-page__group-input" id="group-input"
                                   required/>
                            <label htmlFor="group-input" className="login-page__input-label">Група</label>
                        </div>
                        <button type="submit" className="login-page_submit-button">Далі</button>
                    </form>
                </div>
                <img className="login-page__login-girl" src={loginGirl}/>
            </div>
        </div>
    )
}

const mapStateToProps: MapStateToProps<{ group: string | null }, any, StateType> = ({user}) => ({
    group: user.group
});
const mapDispatchToProps = {
    setGroup,
    setUser
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
