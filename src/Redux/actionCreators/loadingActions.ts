import { Dispatch } from "redux";
import {PendingActionType} from '../../Types/Pending/pending';
import { ActionTypes } from "../ActionTypes";

export const pendingAction = ()=>(dispatch : Dispatch<PendingActionType>)=>{
    return dispatch({type:ActionTypes.PENDING});
}

export const pendingDoneAction = ()=>(dispatch:Dispatch<PendingActionType>)=>{
    dispatch({type:ActionTypes.PENDING_DONE})
}