import { combineReducers } from "redux";
import userReducer from "./userReducer";


const RootReducer = combineReducers({
    user : userReducer
})
export type rootReducerType = ReturnType<typeof RootReducer>
export default RootReducer;