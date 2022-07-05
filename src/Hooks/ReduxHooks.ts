import { useSelector,TypedUseSelectorHook,useDispatch } from "react-redux";
import { rootReducerType } from "../Redux/reducers";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../Redux/actionCreators";


export const useAppSelector : TypedUseSelectorHook<rootReducerType> = useSelector;

export const useAppDispatch = () =>{
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators,dispatch);
}

export default useAppSelector;