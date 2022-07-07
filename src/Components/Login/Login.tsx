import React,{useState,useEffect} from 'react';
import useForm from '../../Hooks/useForm';
import { IuserInfo } from '../../Types/Login/logInTypes';
import { loginresults } from '../../Types/user/userTypes';
import {useAppSelector,useAppDispatch} from '../../Hooks/ReduxHooks';
import { motion } from 'framer-motion';
import { loginContainerAnimation , loginTextContainerAnimatoin,loginTextAnimation} from '../../Animations';
import useRedirect from '../../Hooks/useRedirect';
import './style/login.css';


const Login:React.FC = ()=>{
    const [info,setInfo] = useState<IuserInfo>({
        email:'',
        password:'',
        username:''
    })
    const [errors,setErrors] = useForm(info);
    const [good,setGood] = useState<boolean>(true);
    const redirect = useRedirect();
    
    
    
    const {logIn} = useAppDispatch();
    const currentUserData:loginresults = useAppSelector(state=> state.user);
    
    useEffect(()=>{
        if(currentUserData.err){
            setErrors({email:'invalid email',password:'invalid Password',username:''})
        }
    },[currentUserData])
    
    const emailHandler= (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setInfo(oldInfo=> ({...oldInfo,email:e.target.value}))
    };
    const passwordHandler= (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setInfo(oldInfo=> ({...oldInfo,password:e.target.value}))
    };
    const clickHandler = async()=>{
        if(errors.email){
            return setGood(false);
        }
        if(errors.password){
            return setGood(false);
        }
        await logIn(info.email,info.password);
        
    }   
    
    
    return(
        <motion.div className='loginBody'>
          
            <motion.div variants={loginContainerAnimation} initial="hidden" animate='show' exit="exit"  className="inputContainer">
                <input placeholder='ENTER YOUR EMAIL ADDRESS' className="inputfield" type="text" value={info.email} onChange={emailHandler} />
                {!good && errors.email && (<p className="errorMessage">{errors?.email}</p>) }
                <br />
                <input placeholder='ENTER YOUR PASSWORD' className="inputfield" type="password" value={info.password} onChange={passwordHandler} />
                {!good && errors.password && (<p className="errorMessage">{errors.password}</p>) }
                <br />
                <button className="button" onClick={clickHandler}>LOG IN</button>
                <div className="dontHaveAccount">you don't have an account ? <span onClick={()=>redirect('/accounts/register')}>Register</span></div>
            </motion.div>
            <motion.div variants={loginTextContainerAnimatoin} initial='hidden' animate='show' exit='exit' className='textContainer loginTextContainer'>
                <motion.h1 variants={loginTextAnimation}>
                    <span>Welcome</span> Back!
                </motion.h1>
                <motion.h2 variants={loginTextAnimation}>
                    log into your
                </motion.h2>
                <motion.h3 variants={loginTextAnimation}>
                    Account and catch up with your friend!
                </motion.h3>
            </motion.div>
        </motion.div>
    )
}


export default Login;