import React, {useEffect, useState} from "react";
import "./loginPageStyles.scss";
import {connect, MapStateToProps} from "react-redux";
import loginGirl from "../../assets/images/login-girl.jpg";
import {setGroup, setUser} from "../../reducers/userReducer/actions";
import {StateType} from "../../store";
import TelegramButton from "../../components/TelegramButton"
import {TelegramResponse} from "../../reducers/userReducer/reducer";
import {useGroupService} from "../../api/context/groupContext";
import GoogleButton from "../../components/googleButton";

type LoginPageType = {
    setGroup: (group:string) => void,
    setUser: (user : TelegramResponse) => void
}

const LoginPage: React.FC<LoginPageType> = ({setGroup, setUser}) => {
    const [groups, setGroups] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [hintClicked, setHintClicked] = useState<boolean>(false);
    const groupService = useGroupService();
    useEffect(() => {
        groupService.getGroups().then(({data}) => setGroups(data))
    }, []);
    const onAuth= (user : TelegramResponse)=>{
        // request to API
    }
    const submitGroup = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!groups.includes(inputValue)) alert("Ведіть валідну групу");
        setGroup(inputValue.toLowerCase());
    }
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
                    <GoogleButton dataOnauth={console.log}/>
                    <form className="login-page__group-choose-block" onSubmit={submitGroup}>
                        <div className="login-page__input-block">
                            <input
                                name="group-name"
                                onFocus={() => setHintClicked(false)}
                                value={inputValue}
                                className="login-page__input-block login-page__group-input"
                                id="group-input"
                                required
                                onChange={({target} )=> {setInputValue(target.value.toLowerCase())}}/>
                            <label htmlFor="group-input" className="login-page__input-label">Група</label>
                            {
                                groups?.length && inputValue && !hintClicked ? // a little but invert, but that's more logically
                                    <div className="group-hints">
                                        {
                                            groups.map(group =>
                                                group.toLowerCase().slice(0, inputValue.length) === inputValue
                                                    ?
                                                    <button
                                                        type="button"
                                                        className="group-hint-button"
                                                        onClick={() => {
                                                            setInputValue(group);
                                                            setHintClicked(true);
                                                        }}>
                                                        {group}
                                                    </button>
                                                    : null
                                            )
                                        }
                                    </div>
                                    : null
                            }
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
