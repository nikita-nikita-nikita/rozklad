import React from "react";
import {GoogleLogin} from 'react-google-login'

const clientId = '1054753184331-ekhtermc42bebq96afim2gi8ihrq83fn.apps.googleusercontent.com'
type GoogleLoginTypes ={
    onSucces : (googleUser : any) =>  void
    onFailure : (err : any )=> void
}

const GoogleLoginButton : React.FC<GoogleLoginTypes>=  (props)=>{
    return (
    <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={props.onSucces}
            onFailure={props.onFailure}
            style={{marginTop : '100px'}}
            isSignedIn={false}
        />
    </div>
    )
}

export default GoogleLoginButton;