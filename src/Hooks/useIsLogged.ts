import { useMemo,useState } from 'react';
import {useAppSelector} from './ReduxHooks';
import fire from '../firebaseConfig';
const useIsLogged = ()=>{
    const [isLogged,setIsLogged] = useState<boolean>(false)
    const currentUser = useAppSelector(state => state.user);
    const email =  fire.auth().currentUser?.email;
    useMemo(()=>{
        if(currentUser.email){
            if(email){
                return setIsLogged(true)
            }
        }
         return setIsLogged(false);
    },[currentUser])
    return isLogged;
}


export default useIsLogged;