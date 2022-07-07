import { ActionTypes } from "../ActionTypes"
import {PendingActionType} from "../../Types/Pending/pending"

const loadingReducer = (state:boolean = false,action:PendingActionType)=>{
    switch(action.type){
        case ActionTypes.PENDING:
            return true
        case ActionTypes.PENDING_DONE:
            return false
        default:
            return state
    }
}
export default loadingReducer;