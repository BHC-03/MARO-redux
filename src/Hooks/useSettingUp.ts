import { useEffect } from "react";
import fire from "../firebaseConfig";
import { useAppDispatch } from "./ReduxHooks";
const useSettingUp = ()=>{
    const {sessionLogin,pendingAction,pendingDoneAction} = useAppDispatch();
   
   

    useEffect(()=>{
        pendingAction();
        const unseb = fire.auth().onAuthStateChanged(async user=>{
            if(user?.email){
                sessionLogin(user.email,await user.getIdToken()!,user.uid,'',user.displayName!);
            }
            unseb();
            pendingDoneAction();
        })
        
        fire.auth().setPersistence('session');
    },[])
    return
}


export default useSettingUp