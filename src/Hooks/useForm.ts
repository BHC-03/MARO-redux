import { useEffect,useState } from "react"
import {IuserInfo} from '../Types/Login/logInTypes';

export default (state:IuserInfo)=>{
    const [errors,setErrors] = useState<IuserInfo>({
        email:'',
        password:'',
        username:''
    });
    useEffect(()=>{
        if(!state.email){
            setErrors(errors=>({...errors,email:'email is required'}))
        }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)){
            setErrors(errors=>({...errors,email:'email is invalid'}))
        }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)){
            setErrors(errors=>({...errors,email:''}))
        }
        if(!state.password){
            setErrors(errors=>({...errors,password:'password is required'}))
        }else if(state.password){
            setErrors(errors=>({...errors,password:''}))
        }
        if(!state.username){
            setErrors(errors=>({...errors,username:'username is required'}))
        }else if(state.username){
            setErrors(errors=>({...errors,username:''}))
        }
    },[state]);

    return [errors,setErrors] as const;

}