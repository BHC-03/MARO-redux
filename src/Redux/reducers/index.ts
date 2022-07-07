import { combineReducers } from "redux";
import loadingReducer from "./loadingReucer";
import userReducer from "./userReducer";


const RootReducer = combineReducers({
    user : userReducer,
    loading: loadingReducer
})
export type rootReducerType = ReturnType<typeof RootReducer>
export default RootReducer;