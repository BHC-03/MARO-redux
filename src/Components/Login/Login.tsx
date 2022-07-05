import React,{useState,useEffect} from 'react';
import useForm from '../../Hooks/useForm';
import { IuserInfo } from '../../Types/Login/logInTypes';
import { loginresults } from '../../Types/user/userTypes';
import {useAppSelector,useAppDispatch} from '../../Hooks/ReduxHooks';
import './style/login.css';

const Login:React.FC = ()=>{ 
    const [info,setInfo] = useState<IuserInfo>({
        email:'',
        password:'',
        username:''
    })
    const [errors,setErrors] = useForm(info);
    const [good,setGood] = useState<boolean>(true);
    const emailHandler= (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setInfo(oldInfo=> ({...oldInfo,email:e.target.value}))
    };
    const passwordHandler= (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setInfo(oldInfo=> ({...oldInfo,password:e.target.value}))
    };
    const {logIn} = useAppDispatch();
    const currentUserData:loginresults = useAppSelector(state=> state.user);
    useEffect(()=>{
        if(currentUserData.err){
            setErrors({email:'invalid email',password:'invalid Password',username:''})
        }
    },[currentUserData])
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
        <>
            <div className="inputContainer">
                <input placeholder='ENTER YOUR EMAIL ADDRESS' className="inputfield" type="text" value={info.email} onChange={emailHandler} />
                {!good && errors.email && (<p className="errorMessage">{errors?.email}</p>) }
                <br />
                <input placeholder='ENTER YOUR PASSWORD' className="inputfield" type="password" value={info.password} onChange={passwordHandler} />
                {!good && errors.password && (<p className="errorMessage">{errors.password}</p>) }
                <br />
                <button className="button" onClick={clickHandler}>LOG IN</button>

            </div>
        </>
    )
}


export default Login;