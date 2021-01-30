import React from "react";
import {GoogleLogout} from "react-google-login";

const clientId = '1054753184331-ekhtermc42bebq96afim2gi8ihrq83fn.apps.googleusercontent.com'

type GoogleLogOutTypes ={
    onSucces : () =>  void
}
const GoogleLogoutButton : React.FC<GoogleLogOutTypes>= (props)=>{
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                onLogoutSuccess={props.onSucces}
                buttonText={"Logout"}
            />
        </div>
    )
}

export default GoogleLogout;