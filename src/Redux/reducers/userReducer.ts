import { loginresults } from "../../Types/user/userTypes"
import { userActionType } from "../../Types/user/userTypes"
import { ActionTypes } from "../ActionTypes"
const initialState:loginresults = {
    email:'',
    username:'',
    id:'',
    token:'',
    photo_url:'',
}


const userReducer = (state:loginresults = initialState,action:userActionType)=>{
    switch(action.type){
        case ActionTypes.SUCCESSFUL_LOG_IN:
            return state = {email:action.payload.email,username:action.payload.username,id:action.payload.id,token:action.payload.token,photo_url:action.payload.photo_url}
        case ActionTypes.FAILED_LOG_IN:
            return state = {...initialState,err:action.payload.err};
        case ActionTypes.LOG_OUT:
            return state = initialState;
        case ActionTypes.REGISTER:
            return state = {email:action.payload.email,token:action.payload.token,username:action.payload.username,id:action.payload.id,photo_url:action.payload.photo_url};
        default:
            return state
    }
}


export default userReducer;