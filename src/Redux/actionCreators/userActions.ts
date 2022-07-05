import { Dispatch } from "redux"
import { userActionType } from "../../Types/user/userTypes"
import { ActionTypes } from "../ActionTypes"
import fire from "../../firebaseConfig"


 export const logIn = (email:string,password:string)=>async(dispatch:Dispatch<userActionType>)=>{
    try{
        await fire.auth().signInWithEmailAndPassword(email,password).then(async({user})=>{
            const token:string = await user!.getIdToken();
            dispatch({type:ActionTypes.SUCCESSFUL_LOG_IN,payload:{email:user!.email!,username:user!.displayName!,token,id:user!.uid,photo_url:user!.photoURL!}})
        })

        
    }
    catch(err){
        dispatch({type:ActionTypes.FAILED_LOG_IN,payload:{err}})
    }
}
export const logOut = () =>async (dispatch : Dispatch<userActionType>)=>{
    try {
        await fire.auth().signOut().then(()=>{
            dispatch({type:ActionTypes.LOG_OUT})
            console.log('logged out')
        })
    }catch(err){
        console.log('error');
    }
}
export const register = (email:string,password:string,username:string)=>(dispatch:Dispatch<userActionType>)=>{
    fire.auth().createUserWithEmailAndPassword(email,password).then(async({user})=>{
        await user!.updateProfile({displayName:username});
        const token = await user!.getIdToken();
        dispatch({type:ActionTypes.REGISTER,payload:{email:user!.email!,username:user!.displayName!,token,photo_url:'',id:user?.uid!}});
    })
}
