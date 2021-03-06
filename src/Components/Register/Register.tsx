import React, { useEffect, useState } from "react";
import {IuserInfo} from '../../Types/Login/logInTypes';
import './style/Register.css'
import useForm from "../../Hooks/useForm";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/actionCreators";
import {useAppSelector} from "../../Hooks/ReduxHooks";
import { motion } from "framer-motion";
import { registerComponentAnimation,registerTextAnimation ,registerTextContainerAnimation} from "../../Animations";
import useRedirect from "../../Hooks/useRedirect";
const Register:React.FC = ()=>{
    const [info,setInfo] = useState<IuserInfo>({
        email:'',
        password:'',
        username:''
    })
    const [errors,setErrors]=useForm(info);
    const [good,setGood] = useState<boolean>(true);
    const dispatch = useDispatch();
    const {register} = bindActionCreators(ActionCreators,dispatch);
    const userData = useAppSelector(state=>state.user);
    const redirect = useRedirect();
    const emailHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInfo(oldinfo=>({...oldinfo,email:e.target.value}));
    }
    const passwordHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInfo(oldinfo=>({...oldinfo,password:e.target.value}));

    }
    const usernameHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInfo(oldinfo=>({...oldinfo,username:e.target.value}));

    }
    useEffect(()=>{
        console.log(userData);
        //TODO:emplement the error register
    },[userData])
    const submitHandler = async()=>{
        if(errors.email || errors.password || errors.username){
            return setGood(false)
        }
        register(info.email,info.password,info.username);
        
    }
    return (
        <>
             <motion.div variants={registerComponentAnimation} initial="hidden" animate="show" exit="exit" className="registerContainer">
                <div className="registerInputContainer">
                    <input type="text" value={info.email} onChange={emailHandler} className="registerInput input emailInput" placeholder="ENTER YOUR EMAIL" />
                    {!good && errors.email && <p>{errors.email}</p>}
                    <input type="password" value={info.password} onChange={passwordHandler} className="registerInput input passwordInput" placeholder="ENTER YOUR PASSWORD" />
                    {!good && errors.password && <p>{errors.password}</p>}
                    <input type="text" value={info.username} onChange={usernameHandler} className="registerInput input usernameInput" placeholder="ENTER YOUR USERNAME" />
                    {!good && errors.username && <p>{errors.username}</p>}
                </div>
                <div className="btn" onClick={submitHandler}>REGISTER</div>
                <p className="hasAccount">already have an account ? <span onClick={()=>{redirect('/accounts/login')}}>LOGIN</span></p>
             </motion.div>
             <motion.div variants={registerTextContainerAnimation} initial={'hidden'} animate={'show'} exit={'exit'} className="textContainer">
             <motion.h1 variants={registerTextAnimation}><span >Register</span> Now</motion.h1>
             <motion.h2 variants={registerTextAnimation}>For free</motion.h2>
             <motion.h3 variants={registerTextAnimation}>and share your stories with your friends</motion.h3>
             </motion.div>
        </>
    )
}


export default Register;