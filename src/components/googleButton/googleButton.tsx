type googleButtonTypes = {
    dataOnauth?: Function
}

const GoogleButton : React.FC<googleButtonTypes>= (props)=>{
    return <div className="g-signin2" data-onsuccess={props.dataOnauth}></div>
}

export default GoogleButton;