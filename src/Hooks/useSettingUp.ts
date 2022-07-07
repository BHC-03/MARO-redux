import { useEffect } from "react";
import fire from "../firebaseConfig";
import { useAppDispatch } from "./ReduxHooks";
const useSettingUp = ()=>{
    const {sessionLogin} = useAppDispatch();
   
   

    useEffect(()=>{
        const unseb = fire.auth().onAuthStateChanged(async user=>{
            console.log(user);
            if(user?.email){
                sessionLogin(user.email,await user.getIdToken()!,user.uid,'',user.displayName!);
            }
            unseb();
        })
        
        fire.auth().setPersistence('session');
    },[])
    return
}


export default useSettingUp