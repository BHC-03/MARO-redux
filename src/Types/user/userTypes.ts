import { ActionTypes } from "../../Redux/ActionTypes"

 interface logInActionType  {
    type: ActionTypes.SUCCESSFUL_LOG_IN ,
    payload:{
        email:string,
        username:string,
        id:string,
        token:string,
        photo_url:string
    }
 }
 interface registerActionType{
    type:ActionTypes.REGISTER,
    payload:{
        email:string,
        username:string,
        id:string,
        token:string,
        photo_url:string
    }
 }
 interface logOutActionType {
    type: ActionTypes.LOG_OUT,
 }
interface failedLoginActionType{
    type : ActionTypes.FAILED_LOG_IN,
    payload:{err:unknown}
   
}
interface successLoginResult{
    username:string,
    email:string,
    token:string,
    id:string,
    photo_url:string,
    err?:unknown
}
interface sessionLoginActionType {
    type:ActionTypes.SESSION_LOG_IN,
    payload:{
        email:string,
        username:string,
        photo_url:string,
        token:string,
        id:string
    }
}


 export type loginresults  = successLoginResult;
 export type userActionType = logInActionType | logOutActionType | failedLoginActionType | registerActionType | sessionLoginActionType;