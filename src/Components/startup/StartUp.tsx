import React from "react";
import './style/StartUp.css';
import useRedirect from "../../Hooks/useRedirect";
const StartUp:React.FC = ()=>{
    const redirect = useRedirect();
    return (
        <div className="startUpBodyPage">
            <div className="textContainerStartUp">
                <h1>Welcome to <span>MARO</span>!</h1>
                <h2>Get Started today catch up with your friends' amazing stories</h2>
                <h3>Log in into your account and get started</h3>
            </div>
            <div className="buttonsContainer">
                <div onClick={()=>redirect('/accounts/login')} className="loginDirectBtn StartUpButton">LOGIN</div>
                <div onClick={()=>redirect('/accounts/register')} className="registerDirectBtn StartUpButton">REGISTER</div>
            </div>
        </div>  
    )
}


export default StartUp;